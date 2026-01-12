// lib/activity/strava.ts
type HeatDay = { date: string; value: number }
type BarPoint = { label: string; value: number }

function toISODate(d: Date) {
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

export async function getStravaActivity() {
  const clientId = process.env.STRAVA_CLIENT_ID
  const clientSecret = process.env.STRAVA_CLIENT_SECRET
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN

  if (!clientId || !clientSecret || !refreshToken) {
    return {
      windowDays: 120,
      days: [] as HeatDay[],
      monthlySeries: [] as BarPoint[],
      stats: { activities: 0, totalTimeHuman: "0m", totalDistanceHuman: "0 mi" },
    }
  }

  const tokenRes = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
    }),
    cache: "no-store",
    })

  if (!tokenRes.ok) {
    return {
      windowDays: 120,
      days: [] as HeatDay[],
      monthlySeries: [] as BarPoint[],
      stats: { activities: 0, totalTimeHuman: "0m", totalDistanceHuman: "0 mi" },
    }
  }

  const tokenJson = await tokenRes.json()
  const accessToken = tokenJson.access_token as string

  const windowDays = 120
  const to = new Date()
  const from = new Date()
  from.setDate(to.getDate() - windowDays + 1)

  // Pull last ~200 activities; plenty for 120 days for most people
  const actsRes = await fetch(
    "https://www.strava.com/api/v3/athlete/activities?per_page=200",
    {
        headers: {
        Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
    }
    )

  if (!actsRes.ok) {
    return {
      windowDays,
      days: [] as HeatDay[],
      monthlySeries: [] as BarPoint[],
      stats: { activities: 0, totalTimeHuman: "0m", totalDistanceHuman: "0 mi" },
    }
  }

  const activities: any[] = await actsRes.json()

  if (!Array.isArray(activities)) {
    console.error("Strava activities response:", activities)
  }


  // Filter to window
  const inWindow = activities.filter((a) => {
    const d = new Date(a.start_date)
    return d >= from && d <= to
  })

  // Heatmap: count activities per day (or use moving time sum; counts are cleaner)
  const perDay = new Map<string, number>()
  for (const a of inWindow) {
    const day = toISODate(new Date(a.start_date))
    perDay.set(day, (perDay.get(day) ?? 0) + 1)
  }

  // Make contiguous list of days
  const days: HeatDay[] = []
  const cursor = new Date(from)
  while (cursor <= to) {
    const day = toISODate(cursor)
    days.push({ date: day, value: perDay.get(day) ?? 0 })
    cursor.setDate(cursor.getDate() + 1)
  }

  // Monthly bar: total moving time per month (hours)
  const perMonth = new Map<string, number>() // YYYY-MM -> seconds
  for (const a of inWindow) {
    const d = new Date(a.start_date)
    const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`
    perMonth.set(key, (perMonth.get(key) ?? 0) + Number(a.moving_time ?? 0))
  }

  const monthlySeries: BarPoint[] = [...perMonth.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-8) // keep it clean
    .map(([label, seconds]) => ({
      label,
      value: Math.round(seconds / 3600), // hours
    }))

  const totalTime = inWindow.reduce((acc, a) => acc + Number(a.moving_time ?? 0), 0)
  const totalDistance = inWindow.reduce((acc, a) => acc + Number(a.distance ?? 0), 0)

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
