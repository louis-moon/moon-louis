import { NextResponse } from "next/server"
import { getStravaActivity } from "@/lib/activity/strava"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  console.log("ACTIVITY ROUTE HIT")

  const data = await getStravaActivity()

  console.log("ACTIVITY DATA:", {
    days: data.days.length,
    months: data.monthlySeries.length,
    stats: data.stats,
  })

  return NextResponse.json(data)
}
