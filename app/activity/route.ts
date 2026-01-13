import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  console.log("ACTIVITY ROUTE HIT")

  const {
    STRAVA_CLIENT_ID,
    STRAVA_CLIENT_SECRET,
    STRAVA_REFRESH_TOKEN,
  } = process.env

  if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) {
    console.error("Missing Strava env vars")
    return NextResponse.json(
      { error: "Missing Strava credentials" },
      { status: 500 }
    )
  }

  // 1️⃣ Exchange refresh token for access token
  const tokenRes = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      refresh_token: STRAVA_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  })

  if (!tokenRes.ok) {
    const t = await tokenRes.text()
    console.error("Token exchange failed:", t)
    return NextResponse.json(
      { error: "Token exchange failed" },
      { status: 500 }
    )
  }

  const tokenJson = await tokenRes.json()
  console.log("STRAVA TOKEN SCOPE:", tokenJson.scope)

  const accessToken = tokenJson.access_token

  // 2️⃣ Fetch activities (first page, most recent)
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
    const t = await actsRes.text()
    console.error("Activities fetch failed:", t)
    return NextResponse.json(
      { error: "Activities fetch failed" },
      { status: 500 }
    )
  }

  const activities = await actsRes.json()

  console.log("STRAVA RAW COUNT:", activities.length)
  console.log("STRAVA SAMPLE:", activities[0])

  return NextResponse.json({
    ok: true,
    count: activities.length,
    activities,
  })
}
