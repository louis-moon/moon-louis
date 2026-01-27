import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { ArrowRight, Home } from "lucide-react"
import Link from "next/link"

const cards = [
  {
    href: "/activity",
    title: "Activity",
    desc: "Patterns in how I spend my time",
  },
  {
    href: "/education",
    title: "Education",
    desc: "Expanding how I see the world",
  },
  {
    href: "/essays",
    title: "Essays",
    desc: "Reflections on growth and change",
  },
  {
    href: "/media",
    title: "Media",
    desc: "Moments that shape who I am",
  },
  {
    href: "/personal",
    title: "Personal",
    desc: "What matters most beyond work",
  },
  {
    href: "/professional",
    title: "Professional",
    desc: "Turning ideas into real change",
  },
]

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />

      <main className="min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            {/* Header */}
            <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Home className="w-4 h-4 text-primary" />
              Welcome
            </p>

            <h1 className="text-6xl md:text-7xl font-semibold text-foreground mb-6 text-balance">
              문석현
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-2xl text-pretty leading-[1.65]">
              Exploring the intersections of systems, culture, and human experience.
            </p>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {cards.map(({ href, title, desc }, index) => {
                const isLast = index === cards.length - 1
                const isEndOfRowLg = (index + 1) % 3 === 0

                return (
                  <div key={href} className="relative">
                    {/* Vertical connector (mobile only) */}
                    {!isLast && (
                      <span className="md:hidden absolute left-1/2 bottom-[-24px] h-6 w-px bg-primary/30 rounded-full" />
                    )}

                    {/* Horizontal connector (lg only, not end of row) */}
                    {!isEndOfRowLg && (
                      <span className="hidden lg:block absolute top-1/2 right-[-24px] w-6 h-px bg-primary/30 rounded-full" />
                    )}

                    <Link
                      href={href}
                      className="group relative block p-8 bg-card border border-primary/40 rounded-xl transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                    >
                      {/* Blue node */}
                      <span className="absolute top-5 right-5 h-2 w-2 rounded-full bg-primary/80 group-hover:bg-primary transition-colors" />

                      <h3 className="text-lg font-normal mb-2 transition-all group-hover:text-primary group-hover:-translate-y-0.5">
                        {title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        {desc}
                      </p>

                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
