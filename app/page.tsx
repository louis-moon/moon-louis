import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { ArrowRight, Home } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Home className="w-4 h-4 text-primary" />
              Welcome
            </p>

            <h1 className="text-6xl md:text-7xl font-light text-foreground mb-6 text-balance">
              Louis Moon
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-2xl text-pretty leading-relaxed">
              Exploring the intersections of systems, culture, and human experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {/* Education */}
              <Link
                href="/education"
                className="group p-8 bg-card border border-border rounded-xl hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                  Education
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Expanding how I see the world
                </p>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Essays */}
              <Link
                href="/essays"
                className="group p-8 bg-card border border-border rounded-xl hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                  Essays
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Reflections on growth and change
                </p>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Media */}
              <Link
                href="/media"
                className="group p-8 bg-card border border-border rounded-xl hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                  Media
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Moments that shape who I am
                </p>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Personal */}
              <Link
                href="/personal"
                className="group p-8 bg-card border border-border rounded-xl hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                  Personal
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  What matters most beyond work
                </p>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Professional */}
              <Link
                href="/professional"
                className="group p-8 bg-card border border-border rounded-xl hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                  Professional
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Turning ideas into real change
                </p>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
