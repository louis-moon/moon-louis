export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import {
  Activity as ActivityIcon,
  Code2,
  Music2,
  BookOpen,
  Film,
  Dumbbell,
} from "lucide-react"

import { getGithubActivity } from "@/lib/activity/github"
import { getSpotifyActivity } from "@/lib/activity/spotify"
import { getStravaActivity } from "@/lib/activity/strava"
import { Heatmap } from "@/components/activity/heatmap"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activity — Louis Moon",
  description: "Patterns in how I spend my time",
};

/* ──────────────────────────────────────────────
   MANUAL CONTENT
────────────────────────────────────────────── */

const reading = {
  title: "Sapiens: A Brief History of Humankind",
  author: "Yuval Noah Harari",
  image: "/media/reading.jpg",
}

const watching = {
  title: "Past Lives",
  director: "Celine Song",
  image: "/media/watching.jpg",
}

export default async function ActivityPage() {
  const results = await Promise.allSettled([
    getGithubActivity(),
    getSpotifyActivity(),
    getStravaActivity(),
  ])

  const github =
    results[0].status === "fulfilled" ? results[0].value : null

  const spotify =
    results[1].status === "fulfilled"
      ? results[1].value
      : { topArtists30: [], topGenres90: [], topTracks30: [] }

  const strava =
    results[2].status === "fulfilled"
      ? results[2].value
      : {
          days: [],
          stats: {
            activities: 0,
            totalDistanceHuman: "0 mi",
            totalTimeHuman: "0m",
          },
        }

  return (
    <>
      <AnimatedBackground />
      <Navigation />

      <main className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="animate-fade-in mb-16">
            <div className="flex items-center gap-3 mb-4">
              <ActivityIcon className="w-6 h-6 text-primary" />
              <p className="text-sm text-muted-foreground">Present</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Activity
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
              Following the flow of work, rest, and play.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* LISTENING */}
            <section className="bg-card border rounded-xl p-6 lg:h-[640px] flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Music2 className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-medium">Listening to</h2>
              </div>

              <div className="flex-1 overflow-y-auto space-y-6 pr-1">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Top artists (30 days)
                  </p>
                  <ul className="space-y-2">
                    {spotify.topArtists30.slice(0, 5).map((a) => (
                      <li
                        key={a.name}
                        className="text-sm bg-secondary px-3 py-2 rounded-lg"
                      >
                        {a.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Top genres (90 days)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {spotify.topGenres90.slice(0, 5).map((g) => (
                      <span
                        key={g.name}
                        className="text-xs bg-secondary px-2 py-1 rounded-md"
                      >
                        {g.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    On repeat (30 days)
                  </p>
                  <ul className="space-y-1 text-sm">
                    {spotify.topTracks30.slice(0, 5).map((t) => (
                      <li key={`${t.name}-${t.artist}`}>
                        <span className="text-foreground">{t.name}</span>{" "}
                        — {t.artist}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* READING */}
            <section className="bg-card border rounded-xl p-6 lg:h-[640px] flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-medium">Currently reading</h2>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <Image
                  src={reading.image}
                  alt={reading.title}
                  width={300}
                  height={400}
                  className="w-full aspect-[3/4] object-cover rounded-lg mb-4"
                />
                <p className="text-sm">{reading.title}</p>
                <p className="text-xs text-muted-foreground">
                  {reading.author}
                </p>
              </div>
            </section>

            {/* WATCHING */}
            <section className="bg-card border rounded-xl p-6 lg:h-[640px] flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Film className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-medium">Next watching</h2>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <Image
                  src={watching.image}
                  alt={watching.title}
                  width={300}
                  height={450}
                  className="w-full aspect-[2/3] object-cover rounded-lg mb-4"
                />
                <p className="text-sm">{watching.title}</p>
                <p className="text-xs text-muted-foreground">
                  {watching.director}
                </p>
              </div>
            </section>
            {/* BUILDING + MOVING (DESKTOP-OPTIMIZED, SYMMETRIC) */}
            {github && (
              <section className="bg-card border rounded-xl p-6 lg:h-[640px] flex flex-col">
                {/* BUILDING */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="w-4 h-4 text-primary" />
                    <h2 className="text-sm font-medium">Building…</h2>
                  </div>

                  <div className="space-y-1 text-xs text-muted-foreground mb-4">
                    <p>{github.stats.activeDays} active days</p>
                    <p>{github.stats.total} commits</p>
                    <p>{github.stats.linesChangedHuman} lines changed</p>
                  </div>

                  <Heatmap
                    ariaLabel="GitHub contribution heatmap"
                    days={github.days}
                  />
                </div>

                {/* MOVING */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Dumbbell className="w-4 h-4 text-primary" />
                    <h3 className="text-sm font-medium text-muted-foreground">
                      …and moving
                    </h3>
                  </div>

                  <div className="space-y-1 text-xs text-muted-foreground mb-4">
                    <p>{strava.stats.activities} activities</p>
                    <p>{strava.stats.totalDistanceHuman}</p>
                    <p>{strava.stats.totalTimeHuman}</p>
                  </div>

                  <Heatmap
                    ariaLabel="Strava activity heatmap"
                    days={strava.days}
                  />
                </div>
              </section>
            )}

          </div>
        </div>
      </main>
    </>
  )
}
