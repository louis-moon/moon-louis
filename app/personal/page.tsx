import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { InterestGrid } from "@/components/interest-grid"
import { Heart, Sparkles } from "lucide-react"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal — Louis Moon",
  description: "What matters most beyond work",
};

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
              <p className="text-sm text-muted-foreground">Interests</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">Personal</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl text-pretty leading-relaxed">
              Exploring what I love beyond work and learning.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground">Click any category to explore</p>
            </div>
            <InterestGrid />
          </div>
        </div>
      </main>
    </>
  )
}
