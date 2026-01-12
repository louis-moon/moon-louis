// lib/activity/github.ts
type Day = { date: string; value: number }

function toISODate(d: Date) {
  return d.toISOString().slice(0, 10)
}

export async function getGithubActivity() {
  const token = process.env.GITHUB_TOKEN
  const username = process.env.GITHUB_USERNAME

  if (!token || !username) {
    return {
      windowDays: 90,
      days: [] as Day[],
      stats: { activeDays: 0, total: 0, reposTouched: 0 },
    }
  }

  const windowDays = 90
  const to = new Date()
  const from = new Date()
  from.setDate(to.getDate() - windowDays + 1)

  const query = `
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
        repositoriesContributedTo(first: 100, contributionTypes: [COMMIT, PULL_REQUEST, ISSUE], includeUserRepositories: true) {
          totalCount
        }
      }
    }
  `

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        login: username,
        from: from.toISOString(),
        to: to.toISOString(),
      },
    }),
    // cache + revalidate (quietly “live”)
    next: { revalidate: 60 * 60 * 6 }, // 6 hours
  })

  if (!res.ok) {
    return {
      windowDays,
      days: [] as Day[],
      stats: { activeDays: 0, total: 0, reposTouched: 0 },
    }
  }

  const json = await res.json()
  const weeks =
    json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? []

  const rawDays: Day[] = weeks
    .flatMap((w: any) => w.contributionDays)
    .map((d: any) => ({ date: d.date, value: d.contributionCount }))
    .filter((d: Day) => d.date >= toISODate(from) && d.date <= toISODate(to))

  const activeDays = rawDays.filter((d) => d.value > 0).length
  const total = Number(
    json?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0
  )
  const reposTouched = Number(json?.data?.user?.repositoriesContributedTo?.totalCount ?? 0)

  return {
    windowDays,
    days: rawDays,
    stats: { activeDays, total, reposTouched },
  }
}
