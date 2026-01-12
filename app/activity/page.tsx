// app/activity/page.tsx
export const dynamic = "force-dynamic"
export const revalidate = 0

import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Activity as ActivityIcon, Code2, Dumbbell, Music2 } from "lucide-react"

import { getGithubActivity } from "@/lib/activity/github"
import { getStravaActivity } from "@/lib/activity/strava"
import { getSpotifyActivity } from "@/lib/activity/spotify"

import { StatPills } from "@/components/activity/stat-pills"
import { Heatmap } from "@/components/activity/heatmap"
import { BarChart } from "@/components/activity/bar-chart"

export default async function ActivityPage() {
  const [github, strava, spotify] = await Promise.all([
    getGithubActivity(),
    getStravaActivity(),
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
              What I’ve been focused on lately.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* BUILDING */}
            <section className="lg:col-span-2 bg-card border border-border rounded-xl p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-light">Building</h2>
                </div>
                <span className="text-xs text-muted-foreground">
                  Last {github.windowDays} days
                </span>
              </div>

              <div className="space-y-6">
                <Heatmap
                  ariaLabel="GitHub contribution heatmap"
                  days={github.days}
                />

                <StatPills
                  items={[
                    { label: "Active days", value: github.stats.activeDays.toString() },
                    { label: "Total contributions", value: github.stats.total.toString() },
                    { label: "Repos touched", value: github.stats.reposTouched.toString() },
                  ]}
                />
              </div>
            </section>

            {/* LISTENING */}
            <section className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Music2 className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-light">Listening</h2>
                </div>
                <span className="text-xs text-muted-foreground">Rolling windows</span>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-xs text-muted-foreground mb-3">Top artists (30 days)</p>
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
                  <p className="text-xs text-muted-foreground mb-3">Top genres (90 days)</p>
                  <div className="flex flex-wrap gap-2">
                    {spotify.topGenres90.map((g) => (
                      <span
                        key={g.name}
                        className="text-xs bg-secondary px-2 py-1 rounded-md border border-border text-foreground"
                        title={`${g.count}`}
                      >
                        {g.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-3">On repeat (30 days)</p>
                  <ol className="space-y-2">
                    {spotify.topTracks30.map((t) => (
                      <li
                        key={`${t.name}-${t.artist}`}
                        className="text-sm text-muted-foreground"
                      >
                        <span className="text-foreground">{t.name}</span>{" "}
                        <span className="text-muted-foreground">— {t.artist}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>

            {/* TRAINING */}
            <section className="lg:col-span-3 bg-card border border-border rounded-xl p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Dumbbell className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-light">Training</h2>
                </div>
                <span className="text-xs text-muted-foreground">
                  Last {strava.windowDays} days
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-xs text-muted-foreground mb-3">Monthly volume</p>
                  <BarChart
                    ariaLabel="Strava monthly activity chart"
                    series={strava.monthlySeries}
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-muted-foreground mb-3">Calendar</p>
                    <Heatmap
                      ariaLabel="Strava activity heatmap"
                      days={strava.days}
                    />
                  </div>

                  <StatPills
                    items={[
                      { label: "Activities", value: strava.stats.activities.toString() },
                      { label: "Time", value: strava.stats.totalTimeHuman },
                      { label: "Distance", value: strava.stats.totalDistanceHuman },
                    ]}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
