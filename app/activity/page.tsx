export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Activity as ActivityIcon, Code2, Music2 } from "lucide-react"

import { getGithubActivity } from "@/lib/activity/github"
import { getSpotifyActivity } from "@/lib/activity/spotify"

import { Heatmap } from "@/components/activity/heatmap"

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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* LISTENING */}
            <section className="lg:col-span-2 bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Music2 className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-light">Listening</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Top artists (30 days)
                  </p>
                  <ul className="space-y-2">
                    {spotify.topArtists30.map((a) => (
                      <li
                        key={a.name}
                        className="text-sm text-foreground bg-secondary px-3 py-2 rounded-lg border border-border"
                      >
                        {a.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-3">
                    On repeat (30 days)
                  </p>
                  <ol className="space-y-2">
                    {spotify.topTracks30.map((t) => (
                      <li
                        key={`${t.name}-${t.artist}`}
                        className="text-sm text-muted-foreground"
                      >
                        <span className="text-foreground">{t.name}</span> —{" "}
                        {t.artist}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>

            {/* READING */}
            <section className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-sm font-medium mb-4">Reading</h2>

              <div className="space-y-3">
                <div className="w-full aspect-[3/4] bg-secondary rounded-lg border border-border flex items-center justify-center text-xs text-muted-foreground">
                  Book cover
                </div>

                <div>
                  <p className="text-sm text-foreground">Book Title</p>
                  <p className="text-xs text-muted-foreground">Author</p>
                </div>
              </div>
            </section>

            {/* WATCHING */}
            <section className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-sm font-medium mb-4">Watching</h2>

              <div className="space-y-3">
                <div className="w-full aspect-[2/3] bg-secondary rounded-lg border border-border flex items-center justify-center text-xs text-muted-foreground">
                  Movie poster
                </div>

                <div>
                  <p className="text-sm text-foreground">Movie Title</p>
                  <p className="text-xs text-muted-foreground">Director</p>
                </div>
              </div>
            </section>

            {/* BUILDING (last, visual-only) */}
            <section className="bg-card border border-border rounded-xl p-6">
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
