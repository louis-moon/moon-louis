type HeatDay = { date: string; value: number }
type BarPoint = { label: string; value: number }

function toISODateUTC(d: Date) {
  return d.toISOString().slice(0, 10)
}

function secondsToHuman(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  if (h <= 0) return `${m}m`
  if (m <= 0) return `${h}h`
  return `${h}h ${m}m`
}

function metersToMiles(m: number) {
  return m / 1609.344
}

async function fetchAllActivities(accessToken: string) {
  let page = 1
  const perPage = 200
  const activities: any[] = []

  while (page <= 3) {
    const res = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?per_page=${perPage}&page=${page}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
      }
    )

    if (!res.ok) {
      const text = await res.text()
      console.error("Strava activities error:", res.status, text)
      break
    }
    const batch = await res.json()
    if (!Array.isArray(batch) || batch.length === 0) break

    activities.push(...batch)
    page++
  }

  return activities
}

export async function getStravaActivity() {
  const clientId = process.env.STRAVA_CLIENT_ID
  const clientSecret = process.env.STRAVA_CLIENT_SECRET
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN

  const windowDays = 365

  if (!clientId || !clientSecret || !refreshToken) {
    return {
      windowDays,
      days: [],
      monthlySeries: [],
      stats: { activities: 0, totalTimeHuman: "0m", totalDistanceHuman: "0 mi" },
    }
  }

  // Refresh access token
  const tokenRes = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  })

  if (!tokenRes.ok) {
    const text = await tokenRes.text()
    throw new Error(`Strava token refresh failed: ${text}`)
  }


  const { access_token } = await tokenRes.json()

  // Fetch activities
  const activities = await fetchAllActivities(access_token)

  if (!activities.length) {
    return {
      windowDays,
      days: [],
      monthlySeries: [],
      stats: { activities: 0, totalTimeHuman: "0m", totalDistanceHuman: "0 mi" },
    }
  }

  // Sort oldest → newest (UTC-safe)
  activities.sort(
    (a, b) =>
      new Date(a.start_date).getTime() -
      new Date(b.start_date).getTime()
  )

  // Build date window (UTC)
  const to = new Date()
  const from = new Date()
  from.setUTCDate(to.getUTCDate() - windowDays + 1)

  const fromISO = toISODateUTC(from)
  const toISO = toISODateUTC(to)

  // Filter to window
  const inWindow = activities.filter((a) => {
    if (!a.start_date) return false
    const day = toISODateUTC(new Date(a.start_date))
    return day >= fromISO && day <= toISO
  })

  // --- Heatmap (count ALL activities) ---
  const perDay = new Map<string, number>()
  for (const a of inWindow) {
    const day = toISODateUTC(new Date(a.start_date))
    perDay.set(day, (perDay.get(day) ?? 0) + 1)
  }

  const days: HeatDay[] = []
  const cursor = new Date(from)

  while (cursor <= to) {
    const day = toISODateUTC(cursor)
    days.push({ date: day, value: perDay.get(day) ?? 0 })
    cursor.setUTCDate(cursor.getUTCDate() + 1)
  }

  // --- Monthly volume (moving_time OR elapsed_time) ---
  const perMonth = new Map<string, number>()

  for (const a of inWindow) {
    const d = new Date(a.start_date)
    const key = `${d.getUTCFullYear()}-${String(
      d.getUTCMonth() + 1
    ).padStart(2, "0")}`

    const seconds =
      Number(a.moving_time ?? 0) > 0
        ? Number(a.moving_time)
        : Number(a.elapsed_time ?? 0)

    perMonth.set(key, (perMonth.get(key) ?? 0) + seconds)
  }

  const monthlySeries: BarPoint[] = [...perMonth.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-8)
    .map(([label, seconds]) => ({
      label,
      value: Math.round(seconds / 3600),
    }))

  // --- Stats ---
  const totalTime = inWindow.reduce((acc, a) => {
    const seconds =
      Number(a.moving_time ?? 0) > 0
        ? Number(a.moving_time)
        : Number(a.elapsed_time ?? 0)
    return acc + seconds
  }, 0)

  const totalDistance = inWindow.reduce(
    (acc, a) => acc + Number(a.distance ?? 0),
    0
  )

  return {
    windowDays,
    days,
    monthlySeries,
    stats: {
      activities: inWindow.length,
      totalTimeHuman: secondsToHuman(totalTime),
      totalDistanceHuman: `${metersToMiles(totalDistance).toFixed(0)} mi`,
    },
  }
}
