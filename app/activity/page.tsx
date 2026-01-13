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
} from "lucide-react"

import { getGithubActivity } from "@/lib/activity/github"
import { getSpotifyActivity } from "@/lib/activity/spotify"

import { Heatmap } from "@/components/activity/heatmap"

/* ──────────────────────────────────────────────
   MANUAL CONTENT (Option 2)
   Update these values only
────────────────────────────────────────────── */

const reading = {
  title: "Book Title",
  author: "Author",
  image: "/media/reading.jpg", // put file in /public/media/
}

const watching = {
  title: "Movie Title",
  director: "Director",
  image: "/media/watching.jpg", // put file in /public/media/
}

export default async function ActivityPage() {
  const [github, spotify] = await Promise.all([
    getGithubActivity(),
    getSpotifyActivity(),
  ])

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
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              Activity
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
              An overview of where my time goes.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* LISTENING */}
            <section className="lg:col-span-3 bg-card border border-border rounded-xl p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Music2 className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-medium">Listening to</h2>
              </div>

              <div className="space-y-6 flex-1">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Top artists (30 days)
                  </p>
                  <ul className="space-y-2">
                    {spotify.topArtists30.map((a) => (
                      <li
                        key={a.name}
                        className="text-sm bg-secondary px-3 py-2 rounded-lg border border-border"
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
                    {spotify.topGenres90.map((g) => (
                      <span
                        key={g.name}
                        className="text-xs bg-secondary px-2 py-1 rounded-md border border-border whitespace-nowrap"
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
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {spotify.topTracks30.map((t) => (
                      <li key={`${t.name}-${t.artist}`}>
                        <span className="text-foreground">{t.name}</span> —{" "}
                        {t.artist}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* READING */}
            <section className="lg:col-span-3 bg-card border border-border rounded-xl p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-medium">Currently reading</h2>
              </div>

              <div className="space-y-3 flex-1">
                <Image
                  src={reading.image}
                  alt={`Cover of ${reading.title}`}
                  width={300}
                  height={400}
                  className="w-full aspect-[3/4] object-cover rounded-lg border border-border"
                />

                <div>
                  <p className="text-sm text-foreground">{reading.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {reading.author}
                  </p>
                </div>
              </div>
            </section>

            {/* WATCHING */}
            <section className="lg:col-span-3 bg-card border border-border rounded-xl p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Film className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-medium">Next watching</h2>
              </div>

              <div className="space-y-3 flex-1">
                <Image
                  src={watching.image}
                  alt={`Poster for ${watching.title}`}
                  width={300}
                  height={450}
                  className="w-full aspect-[2/3] object-cover rounded-lg border border-border"
                />

                <div>
                  <p className="text-sm text-foreground">{watching.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {watching.director}
                  </p>
                </div>
              </div>
            </section>

            {/* BUILDING */}
            <section className="lg:col-span-3 bg-card border border-border rounded-xl p-6 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" />
                  <h2 className="text-sm font-medium">Building</h2>
                </div>
                <span className="text-xs text-muted-foreground">
                  Last {github.windowDays} days
                </span>
              </div>

              <Heatmap
                ariaLabel="GitHub contribution heatmap"
                days={github.days}
              />
            </section>

            {/* TRAINING (hidden) */}
            {false && <div />}
          </div>
        </div>
      </main>
    </>
  )
}
