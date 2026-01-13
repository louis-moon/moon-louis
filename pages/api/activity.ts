import type { NextApiRequest, NextApiResponse } from "next"
import { getStravaActivity } from "@/lib/activity/strava"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await getStravaActivity()
    res.status(200).json(data)
  } catch (err) {
    console.error("API ERROR:", err)
    res.status(500).json({ error: "Failed to load activity" })
  }
}
