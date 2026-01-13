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
      : {
          topArtists30: [],
          topGenres90: [],
          topTracks30: [],
        }

  const strava =
    results[2].status === "fulfilled"
      ? results[2].value
      : {
          windowDays: 90,
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
            <p className="text-lg text-muted-foreground max-w-2xl">
              An overview of where my time goes.
            </p>
          </div>

          {/* ─────────────────────────────────────
              STATE CARDS
             ───────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-start">
            {/* LISTENING */}
            <section className="bg-card border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Music2 className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-medium">Listening to</h2>
              </div>

              <p className="text-xs text-muted-foreground mb-2">
                Top artists (30 days)
              </p>
              <ul className="space-y-2 mb-6">
                {spotify.topArtists30.map((a) => (
                  <li
                    key={a.name}
                    className="text-sm bg-secondary px-3 py-2 rounded-lg"
                  >
                    {a.name}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-muted-foreground mb-2">
                Top genres (90 days)
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {spotify.topGenres90.map((g) => (
                  <span
                    key={g.name}
                    className="text-xs bg-secondary px-2 py-1 rounded-md"
                  >
                    {g.name}
                  </span>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mb-2">
                On repeat (30 days)
              </p>
              <ul className="space-y-1 text-sm">
                {spotify.topTracks30.map((t) => (
                  <li key={`${t.name}-${t.artist}`}>
                    <span className="text-foreground">{t.name}</span> —{" "}
                    {t.artist}
                  </li>
                ))}
              </ul>
            </section>

            {/* READING */}
            <section className="bg-card border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-medium">Currently reading</h2>
              </div>

              <Image
                src={reading.image}
                alt={`Cover of ${reading.title}`}
                width={300}
                height={400}
                className="w-full aspect-[3/4] object-cover rounded-lg mb-3"
              />

              <p className="text-sm">{reading.title}</p>
              <p className="text-xs text-muted-foreground">
                {reading.author}
              </p>
            </section>

            {/* WATCHING */}
            <section className="bg-card border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Film className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-medium">Next watching</h2>
              </div>

              <Image
                src={watching.image}
                alt={`Poster for ${watching.title}`}
                width={300}
                height={450}
                className="w-full aspect-[2/3] object-cover rounded-lg mb-3"
              />

              <p className="text-sm">{watching.title}</p>
              <p className="text-xs text-muted-foreground">
                {watching.director}
              </p>
            </section>

            {/* BUILDING */}
            {github && (
              <section className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-4 h-4 text-primary" />
                  <h2 className="text-sm font-medium">Building</h2>
                </div>

                {/* GitHub stats */}
                <div className="text-xs text-muted-foreground mb-4 space-y-1">
                  <div>{github.stats.activeDays} active days</div>
                  <div>{github.stats.total} commits</div>
                  <div>{github.stats.reposTouched} repos</div>
                </div>

                <Heatmap
                  ariaLabel="GitHub contribution heatmap"
                  days={github.days}
                />
              </section>
            )}
          </div>

          {/* ─────────────────────────────────────
              TRAINING (FULL WIDTH)
             ───────────────────────────────────── */}
          <section className="bg-card border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-medium">Training</h2>
              </div>

              <span className="text-xs text-muted-foreground">
                Last {strava.windowDays} days
              </span>
            </div>

            <p className="text-xs text-muted-foreground mb-4">
              {strava.stats.activities} activities ·{" "}
              {strava.stats.totalDistanceHuman} ·{" "}
              {strava.stats.totalTimeHuman}
            </p>

            <Heatmap
              ariaLabel="Strava activity heatmap"
              days={strava.days}
            />
          </section>
        </div>
      </main>
    </>
  )
}
