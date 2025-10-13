import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { InterestGrid } from "@/components/interest-grid"
import { Heart, Sparkles } from "lucide-react"

export default function PersonalPage() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <p className="text-sm text-muted-foreground">Personal Interests</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">What Inspires Me</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl text-pretty leading-relaxed">
              Beyond academics and professional pursuits, these are the passions, experiences, and inspirations that
              shape who I am.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground">Click any category to explore</p>
            </div>
            <InterestGrid />
          </div>

          <div className="mt-16 bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-light mb-4 text-foreground">Philosophy & Aspirations</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="font-medium text-foreground">What I Would Major In:</span> Philosophy, Global Affairs,
                Statistics
              </p>
              <p>
                <span className="font-medium text-foreground">Things I Want to Learn:</span> Spanish fluency,
                Relationships, Korean language
              </p>
              <p>
                <span className="font-medium text-foreground">Pet Wishlist:</span> Golden Retriever, British Shorthair,
                French Bulldog
              </p>
              <p>
                <span className="font-medium text-foreground">Favorite Animals:</span> Polar Bears, Dragons, Lions
              </p>
              <p className="text-sm italic pt-4 border-t border-border">
                "They offer food to the indigent, the orphan, and the captive, saying, 'We feed you for the sake of
                Allah alone; we wish not from you reward, nor gratitude.'" — Islamic charity founding principle
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
