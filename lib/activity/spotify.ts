// lib/activity/spotify.ts
type TopArtist = { name: string }
type TopTrack = { name: string; artist: string }
type Genre = { name: string; count: number }

export async function getSpotifyActivity() {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

  const empty = {
    topArtists30: [] as TopArtist[],
    topTracks30: [] as TopTrack[],
    topGenres90: [] as Genre[],
  }

  if (!clientId || !clientSecret || !refreshToken) return empty

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    next: { revalidate: 60 * 60 * 12 }, // 12 hours
  })

  if (!tokenRes.ok) return empty
  const tokenJson = await tokenRes.json()
  const accessToken = tokenJson.access_token as string

  const [artists30Res, artists90Res, tracks30Res] = await Promise.all([
    fetch("https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=8", {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 60 * 60 * 12 },
    }),
    fetch("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=20", {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 60 * 60 * 12 },
    }),
    fetch("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5", {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 60 * 60 * 12 },
    }),
  ])

  if (!artists30Res.ok || !artists90Res.ok || !tracks30Res.ok) return empty

  const artists30 = await artists30Res.json()
  const artists90 = await artists90Res.json()
  const tracks30 = await tracks30Res.json()

  const topArtists30: TopArtist[] = (artists30.items ?? []).map((a: any) => ({
    name: a.name,
  }))

  const topTracks30: TopTrack[] = (tracks30.items ?? []).map((t: any) => ({
    name: t.name,
    artist: (t.artists?.[0]?.name ?? "Unknown"),
  }))

  // Derive genre counts from top artists (medium_term ≈ ~6 months; close enough to “90 days” vibe)
  const counts = new Map<string, number>()
  for (const a of artists90.items ?? []) {
    for (const g of a.genres ?? []) {
      counts.set(g, (counts.get(g) ?? 0) + 1)
    }
  }

  const topGenres90: Genre[] = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, count]) => ({ name, count }))

  return { topArtists30, topTracks30, topGenres90 }
}
