// lib/activity/github.ts
type Day = { date: string; value: number }

function toISODate(d: Date) {
  return d.toISOString().slice(0, 10)
}

function formatCompact(n: number) {
  if (n >= 1_000_000) return `${trimTrailingZero((n / 1_000_000).toFixed(1))}m`
  if (n >= 1_000) return `${trimTrailingZero((n / 1_000).toFixed(1))}k`
  return n.toString()
}

function trimTrailingZero(s: string) {
  return s.replace(/\.0$/, "")
}

async function githubGraphQL<T>(
  token: string,
  query: string,
  variables: Record<string, any>,
  revalidateSeconds = 60 * 60 * 6
): Promise<T> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: revalidateSeconds },
  })

  if (!res.ok) {
    throw new Error(`GitHub GraphQL failed: ${res.status}`)
  }

  const json = await res.json()
  if (json?.errors?.length) {
    throw new Error(
      `GitHub GraphQL errors: ${json.errors.map((e: any) => e.message).join(", ")}`
    )
  }

  return json.data as T
}

export async function getGithubActivity() {
  const token = process.env.GITHUB_TOKEN
  const username = process.env.GITHUB_USERNAME

  const empty = {
    windowDays: 90,
    days: [] as Day[],
    stats: {
      activeDays: 0,
      total: 0, // legacy
      totalCommits: 0,
      reposTouched: 0,
      linesChanged: 0,
      linesChangedHuman: "0",
    },
  }

  if (!token || !username) return empty

  const windowDays = 90
  const to = new Date()
  const from = new Date()
  from.setDate(to.getDate() - windowDays + 1)

  // 1) Fetch calendar + reposTouched + "primary" repo for lines-changed
  const overviewQuery = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
        repositoriesContributedTo(
          first: 1
          contributionTypes: [COMMIT, PULL_REQUEST, ISSUE]
          includeUserRepositories: true
        ) {
          totalCount
        }
        repositories(
          first: 1
          orderBy: { field: PUSHED_AT, direction: DESC }
          ownerAffiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]
          isFork: false
        ) {
          nodes {
            name
            owner { login }
            nameWithOwner
            defaultBranchRef { name }
          }
        }
      }
    }
  `

  type OverviewData = {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number
          weeks: Array<{
            contributionDays: Array<{ date: string; contributionCount: number }>
          }>
        }
      }
      repositoriesContributedTo: { totalCount: number }
      repositories: {
        nodes: Array<{
          name: string
          owner: { login: string }
          nameWithOwner: string
          defaultBranchRef: { name: string } | null
        }>
      }
    } | null
  }

  let overview: OverviewData
  try {
    overview = await githubGraphQL<OverviewData>(token, overviewQuery, {
      login: username,
      from: from.toISOString(),
      to: to.toISOString(),
    })
  } catch {
    return empty
  }

  const weeks =
    overview?.user?.contributionsCollection?.contributionCalendar?.weeks ?? []

  const rawDays: Day[] = weeks
    .flatMap((w) => w.contributionDays)
    .map((d) => ({ date: d.date, value: d.contributionCount }))
    .filter((d) => d.date >= toISODate(from) && d.date <= toISODate(to))

  const activeDays = rawDays.filter((d) => d.value > 0).length

  const totalCommits = Number(
    overview?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0
  )

  const reposTouched = Number(
    overview?.user?.repositoriesContributedTo?.totalCount ?? 0
  )

  // 2) Compute REAL lines changed from commit history on most recently pushed repo
  const repoNode = overview?.user?.repositories?.nodes?.[0]
  const owner = repoNode?.owner?.login
  const repo = repoNode?.name
  const branch = repoNode?.defaultBranchRef?.name

  let linesChanged = 0

  if (owner && repo && branch) {
    const historyQuery = `
      query($owner: String!, $name: String!, $branch: String!, $since: GitTimestamp!, $after: String) {
        repository(owner: $owner, name: $name) {
          ref(qualifiedName: $branch) {
            target {
              ... on Commit {
                history(first: 100, since: $since, after: $after) {
                  pageInfo { hasNextPage endCursor }
                  nodes {
                    additions
                    deletions
                    author {
                      user { login }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `

    type HistoryData = {
      repository: {
        ref: {
          target: {
            history: {
              pageInfo: { hasNextPage: boolean; endCursor: string | null }
              nodes: Array<{
                additions: number
                deletions: number
                author: { user: { login: string } | null } | null
              }>
            }
          } | null
        } | null
      } | null
    }

    // safety bounds for rate limits / weird repos
    const maxPages = 20
    let after: string | null = null
    let page = 0

    while (page < maxPages) {
      page += 1
      let data: HistoryData
      try {
        data = await githubGraphQL<HistoryData>(token, historyQuery, {
          owner,
          name: repo,
          branch: `refs/heads/${branch}`,
          since: from.toISOString(),
          after,
        })
      } catch {
        break
      }

      const history =
        data?.repository?.ref?.target &&
        "history" in data.repository.ref.target
          ? (data.repository.ref.target as any).history
          : null

      if (!history) break

      for (const c of history.nodes ?? []) {
        const authorLogin = c?.author?.user?.login
        if (authorLogin && authorLogin.toLowerCase() === username.toLowerCase()) {
          linesChanged += (c.additions ?? 0) + (c.deletions ?? 0)
        }
      }

      if (!history.pageInfo?.hasNextPage) break
      after = history.pageInfo.endCursor
      if (!after) break
    }
  }

  return {
    windowDays,
    days: rawDays,
    stats: {
      activeDays,
      total: totalCommits, // legacy field so your page compiles
      totalCommits,
      reposTouched, // legacy field so your page compiles
      linesChanged,
      linesChangedHuman: formatCompact(linesChanged),
    },
  }
}
