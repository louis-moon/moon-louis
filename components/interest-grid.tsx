"use client"

import { useState } from "react"
import { Music, Film, Tv, Book, Trophy, Mountain, Utensils, Users, X } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Consolidated to a strict 3x3 grid (nine categories),
 * each category exposes exactly three items on click.
 */
const interestCategories = [
  {
    id: "music",
    title: "Music",
    icon: Music,
    color: "from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20",
    borderColor: "hover:border-blue-500/50",
    items: [
      { label: "Juice WRLD", category: "Rap" },
      { label: "The Chainsmokers", category: "EDM" },
      { label: "HONNE", category: "Pop" },
    ],
  },
  {
    id: "movies",
    title: "Movies",
    icon: Film,
    color: "from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20",
    borderColor: "hover:border-purple-500/50",
    items: [
      { label: "Manchester by the Sea", category: "Films" },
      { label: "La La Land", category: "Films" },
      { label: "The Lion King", category: "Films" },
    ],
  },
  {
    id: "tv",
    title: "TV Shows",
    icon: Tv,
    color: "from-indigo-500/10 to-indigo-600/10 hover:from-indigo-500/20 hover:to-indigo-600/20",
    borderColor: "hover:border-indigo-500/50",
    items: [
      { label: "Ozark", category: "Series" },
      { label: "Monster", category: "Series" },
      { label: "Chernobyl", category: "Series" },
    ],
  },
  {
    id: "books",
    title: "Books",
    icon: Book,
    color: "from-amber-500/10 to-amber-600/10 hover:from-amber-500/20 hover:to-amber-600/20",
    borderColor: "hover:border-amber-500/50",
    items: [
      { label: "Eragon", category: "Favorites" },
      { label: "When Breath Becomes Air", category: "Favorites" },
      { label: "The Stranger", category: "Favorites" },
    ],
  },
  {
    id: "ball-sports",
    title: "Ball Sports",
    icon: Trophy,
    color: "from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20",
    borderColor: "hover:border-green-500/50",
    items: [
      { label: "Tennis", category: "Sports" },
      { label: "Golf", category: "Sports" },
      { label: "Basketball", category: "Sports" },
    ],
  },
  {
    id: "nonball-sports",
    title: "Non-ball Sports",
    icon: Trophy,
    color: "from-emerald-500/10 to-emerald-600/10 hover:from-emerald-500/20 hover:to-emerald-600/20",
    borderColor: "hover:border-emerald-500/50",
    items: [
      { label: "Running", category: "Sports" },
      { label: "Frisbee", category: "Sports" },
      { label: "Cycling", category: "Sports" },
    ],
  },
  {
    id: "outdoors",
    title: "Outdoors",
    icon: Mountain,
    color: "from-teal-500/10 to-teal-600/10 hover:from-teal-500/20 hover:to-teal-600/20",
    borderColor: "hover:border-teal-500/50",
    items: [
      { label: "Fishing", category: "Activities" },
      { label: "Skiing", category: "Activities" },
      { label: "Hiking", category: "Activities" },
    ],
  },
  {
    id: "food-drink",
    title: "Food & Drink",
    icon: Utensils,
    color: "from-rose-500/10 to-rose-600/10 hover:from-rose-500/20 hover:to-rose-600/20",
    borderColor: "hover:border-rose-500/50",
    items: [
      { label: "Risotto", category: "Food" },
      { label: "Dim Sum", category: "Food" },
      { label: "Cold Brew", category: "Drink" },
    ],
  },
  {
    id: "people",
    title: "People & Inspirations",
    icon: Users,
    color: "from-cyan-500/10 to-cyan-600/10 hover:from-cyan-500/20 hover:to-cyan-600/20",
    borderColor: "hover:border-cyan-500/50",
    items: [
      { label: "Emily Blunt", category: "Actors" },
      { label: "Roger Federer", category: "Athletes" },
      { label: "Richard Feynman", category: "Figures" },
    ],
  },
]

export function InterestGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const selected = interestCategories.find((cat) => cat.id === selectedCategory)

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {interestCategories.map((category) => {
          const Icon = category.icon
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "aspect-square bg-gradient-to-br border border-border rounded-xl p-6 transition-all duration-300 group relative overflow-hidden",
                category.color,
                category.borderColor,
                selectedCategory === category.id && "scale-95 opacity-50",
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full flex flex-col items-center justify-center gap-3">
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-sm md:text-base font-medium text-foreground text-center">{category.title}</p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedCategory(null)}
        >
          <div
            className="bg-card border border-border rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                {/* @ts-expect-error dynamic icon component */}
                <selected.icon className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-medium text-foreground">{selected.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {Object.entries(
                selected.items.reduce(
                  (acc, item) => {
                    if (!acc[item.category]) acc[item.category] = []
                    acc[item.category].push(item.label)
                    return acc
                  },
                  {} as Record<string, string[]>,
                ),
              ).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-primary mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                      <span
                        key={index}
                        className="text-sm text-foreground bg-secondary px-3 py-1.5 rounded-lg border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
