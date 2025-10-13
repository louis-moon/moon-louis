"use client"

import { useState } from "react"
import { Music, Film, Tv, Book, Trophy, Plane, Coffee, Utensils, Heart, X, Palette, GraduationCap, Gamepad2, Star } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Notes for mobile polish:
 * - Fixed square tiles with consistent internal layout
 * - Icons sized with a wrapper so they don’t jump around
 * - Tighter leading/line-clamp to avoid awkward wraps on small screens
 */

const interestCategories = [
  {
    id: "music-movies",
    title: "Music • Movies",
    icon: Music,
    color: "from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20",
    borderColor: "hover:border-blue-500/50",
    items: [
      { label: "Juice WRLD", category: "Music" },
      { label: "The Chainsmokers", category: "Music" },
      { label: "HONNE", category: "Music" },
      { label: "Manchester by the Sea", category: "Movies" },
      { label: "La La Land", category: "Movies" },
      { label: "The Lion King", category: "Movies" },
    ],
  },
  {
    id: "books-cities",
    title: "Books • Cities",
    icon: Book,
    color: "from-amber-500/10 to-amber-600/10 hover:from-amber-500/20 hover:to-amber-600/20",
    borderColor: "hover:border-amber-500/50",
    items: [
      { label: "Eragon", category: "Books" },
      { label: "When Breath Becomes Air", category: "Books" },
      { label: "The Stranger", category: "Books" },
      { label: "Banff", category: "Cities" },
      { label: "Haeundae", category: "Cities" },
      { label: "Puerto Ayora", category: "Cities" },
    ],
  },
  {
    id: "ball-nonball",
    title: "Ball • Non-ball",
    icon: Trophy,
    color: "from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20",
    borderColor: "hover:border-green-500/50",
    items: [
      { label: "Tennis", category: "Ball Sports" },
      { label: "Golf", category: "Ball Sports" },
      { label: "Basketball", category: "Ball Sports" },
      { label: "Running", category: "Non-ball Sports" },
      { label: "Frisbee", category: "Non-ball Sports" },
      { label: "Cycling", category: "Non-ball Sports" },
    ],
  },
  {
    id: "food-drink",
    title: "Food • Drink",
    icon: Utensils,
    color: "from-rose-500/10 to-rose-600/10 hover:from-rose-500/20 hover:to-rose-600/20",
    borderColor: "hover:border-rose-500/50",
    items: [
      { label: "Risotto", category: "Food" },
      { label: "Tiramisu", category: "Food" },
      { label: "Dim Sum", category: "Food" },
      { label: "Sprite", category: "Drink" },
      { label: "Cold Brew", category: "Drink" },
      { label: "Apple Juice", category: "Drink" },
      { label: "Sangria", category: "Alcohol" },
      { label: "High Noon", category: "Alcohol" },
      { label: "Don’t like beer", category: "Alcohol" },
    ],
  },
  {
    id: "wishlist-pets",
    title: "Wish List • Pets",
    icon: Plane,
    color: "from-cyan-500/10 to-cyan-600/10 hover:from-cyan-500/20 hover:to-cyan-600/20",
    borderColor: "hover:border-cyan-500/50",
    items: [
      { label: "Germany", category: "Wish List" },
      { label: "Alaska", category: "Wish List" },
      { label: "Spain", category: "Wish List" },
      { label: "Golden Retriever", category: "Pets" },
      { label: "British Shorthair", category: "Pets" },
      { label: "French Bulldog", category: "Pets" },
      { label: "South Beach", category: "Spots" },
      { label: "East Rock", category: "Spots" },
      { label: "Bar Harbor", category: "Spots" },
    ],
  },
  {
    id: "actors-athletes",
    title: "Actors • Athletes",
    icon: Heart,
    color: "from-pink-500/10 to-pink-600/10 hover:from-pink-500/20 hover:to-pink-600/20",
    borderColor: "hover:border-pink-500/50",
    items: [
      { label: "Emily Blunt", category: "Actors" },
      { label: "Ryan Gosling", category: "Actors" },
      { label: "Brad Pitt", category: "Actors" },
      { label: "Victor Wembanyama", category: "Athletes" },
      { label: "Lewis Hamilton", category: "Athletes" },
      { label: "Roger Federer", category: "Athletes" },
      { label: "Janet Yellen", category: "Figures" },
      { label: "Richard Feynman", category: "Figures" },
      { label: "Jim Simons", category: "Figures" },
    ],
  },
  {
    id: "majors-passions",
    title: "Majors • Passions",
    icon: GraduationCap,
    color: "from-indigo-500/10 to-indigo-600/10 hover:from-indigo-500/20 hover:to-indigo-600/20",
    borderColor: "hover:border-indigo-500/50",
    items: [
      { label: "Philosophy", category: "Majors" },
      { label: "Global Affairs", category: "Majors" },
      { label: "Statistics", category: "Majors" },
      { label: "Science & Technology", category: "Passions" },
      { label: "Environment", category: "Passions" },
      { label: "Education", category: "Passions" },
      { label: "Spanish", category: "Learn / Work On" },
      { label: "Relationships", category: "Learn / Work On" },
      { label: "Korean", category: "Learn / Work On" },
    ],
  },
  {
    id: "video-cardboard",
    title: "Video • Card/Board",
    icon: Gamepad2,
    color: "from-blue-400/10 to-blue-500/10 hover:from-blue-400/20 hover:to-blue-500/20",
    borderColor: "hover:border-blue-500/50",
    items: [
      { label: "Roblox", category: "Video Games" },
      { label: "FIFA", category: "Video Games" },
      { label: "Clash of Clans", category: "Video Games" },
      { label: "Poker", category: "Card/Board" },
      { label: "Egyptian Rat Screw", category: "Card/Board" },
      { label: "Chess", category: "Card/Board" },
      { label: "Bowling", category: "Recreation" },
      { label: "Tetris", category: "Recreation" },
      { label: "Super Smash Bros.", category: "Recreation" },
    ],
  },
  {
    id: "written-visual",
    title: "Written • Visual",
    icon: Palette,
    color: "from-teal-500/10 to-teal-600/10 hover:from-teal-500/20 hover:to-teal-600/20",
    borderColor: "hover:border-teal-500/50",
    items: [
      { label: "Journaling", category: "Written" },
      { label: "Reading", category: "Written" },
      { label: "Poetry", category: "Written" },
      { label: "Video Editing", category: "Visual" },
      { label: "Photography", category: "Visual" },
      { label: "Art", category: "Visual" },
      { label: "Songwriting", category: "Music" },
      { label: "Jazz", category: "Music" },
      { label: "Freestyling", category: "Music" },
    ],
  },
]

export function InterestGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const selected = interestCategories.find((cat) => cat.id === selectedCategory)

  return (
    <div className="relative">
      {/* Grid — keep 3x3 always, but improve legibility on small screens */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {interestCategories.map((category) => {
          const Icon = category.icon
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "aspect-square rounded-xl border border-border bg-gradient-to-br p-3 sm:p-4 transition-all duration-300 group relative overflow-hidden",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                category.color,
                category.borderColor,
                selectedCategory === category.id && "scale-95 opacity-60"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full w-full flex flex-col items-center justify-center gap-2">
                {/* Icon wrapper fixes tiny/misaligned icons on iOS Safari */}
                <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 flex items-center justify-center">
                  <Icon className="h-full w-full text-primary group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-center font-medium text-foreground leading-tight text-sm sm:text-base line-clamp-2">
                  {category.title}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Modal overlay */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedCategory(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between">
              <div className="flex items-center gap-3">
                {(() => {
                  const SelectedIcon = selected.icon
                  return <SelectedIcon className="h-6 w-6 text-primary" />
                })()}
                <h3 className="text-2xl font-medium text-foreground">{selected.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Group by subcategory */}
            <div className="space-y-4">
              {Object.entries(
                selected.items.reduce((acc, item) => {
                  if (!acc[item.category]) acc[item.category] = []
                  acc[item.category].push(item.label)
                  return acc
                }, {} as Record<string, string[]>)
              ).map(([category, items]) => (
                <div key={category}>
                  <h4 className="mb-2 text-sm font-medium text-primary">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <span
                        key={i}
                        className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-foreground"
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
