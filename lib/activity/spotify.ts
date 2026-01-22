// lib/activity/spotify.ts

type TopArtist = {
  name: string
  genres: string[]
}

type TopTrack = {
  name: string
  artist: string
}

type Genre = {
  name: string
  count: number
}

export async function getSpotifyActivity() {
  // 🔁 CHANGE THIS TO TEST DIFFERENT TIMEFRAMES
  // "short_term"  ≈ 30 days
  // "medium_term" ≈ 180 days
  // "long_term"   ≈ 365 days
  const GENRE_TIME_RANGE: "short_term" | "medium_term" | "long_term" =
    "medium_term"

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

  const empty = {
    topArtists30: [] as TopArtist[],
    topTracks30: [] as TopTrack[],
    topGenres30: [] as Genre[],
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
    cache: "no-store",
  })

  if (!tokenRes.ok) return empty

  const tokenJson = await tokenRes.json()
  const accessToken = tokenJson.access_token as string

  // ──────────────────────────────────────────────
  // Fetch:
  // 1) Top artists (30 days) → display
  // 2) Top artists (GENRE_TIME_RANGE) → genre inference
  // 3) Top tracks (30 days)
  // ──────────────────────────────────────────────
  const [artists30Res, genreArtistsRes, tracks30Res] = await Promise.all([
    fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=8",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
      }
    ),
    fetch(
      `https://api.spotify.com/v1/me/top/artists?time_range=${GENRE_TIME_RANGE}&limit=20`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
      }
    ),
    fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
      }
    ),
  ])

  if (!artists30Res.ok || !genreArtistsRes.ok || !tracks30Res.ok) {
    return empty
  }

  const artists30 = await artists30Res.json()
  const genreArtists = await genreArtistsRes.json()
  const tracks30 = await tracks30Res.json()

  // ──────────────────────────────────────────────
  // Top artists (30 days)
  // ──────────────────────────────────────────────
  const topArtists30: TopArtist[] = (artists30.items ?? []).map((a: any) => ({
    name: a.name,
    genres: a.genres ?? [],
  }))

  // ──────────────────────────────────────────────
  // Top tracks (30 days)
  // ──────────────────────────────────────────────
  const topTracks30: TopTrack[] = (tracks30.items ?? []).map((t: any) => ({
    name: t.name,
    artist: t.artists?.[0]?.name ?? "Unknown",
  }))

  // ──────────────────────────────────────────────
  // Derive top genres from GENRE_TIME_RANGE artists
  // ──────────────────────────────────────────────
  const counts = new Map<string, number>()

  for (const artist of genreArtists.items ?? []) {
    for (const genre of artist.genres ?? []) {
      counts.set(genre, (counts.get(genre) ?? 0) + 1)
    }
  }

  const topGenres30: Genre[] = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3) // change to 5 if testing
    .map(([name, count]) => ({ name, count }))

  return { topArtists30, topTracks30, topGenres30 }
}
