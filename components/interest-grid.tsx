"use client"

import { useState } from "react"
import type { LucideIcon } from "lucide-react"
import {
  Music,
  Book,
  Trophy,
  Utensils,
  Users,
  GraduationCap,
  Gamepad2,
  Palette,
  Plane,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Section = {
  title: string
  items: string[]
}

type Tile = {
  id: string
  title: string
  icon: LucideIcon
  color: string
  borderColor: string
  sections: [Section, Section, Section]
}

const tiles: Tile[] = [
  {
    id: "entertainment-a",
    title: "Sound • Story • Screen",
    icon: Music,
    color: "from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20",
    borderColor: "hover:border-blue-500/50",
    sections: [
      { title: "Music", items: ["HONNE (Pop)", "Juice WRLD (Rap)", "The Chainsmokers (EDM)"] },
      { title: "Movies", items: ["La La Land", "Manchester by the Sea", "Troy"] },
      { title: "TV Shows", items: ["Dragon Ball Z", "Impractical Jokers", "Ozark"] },
    ],
  },
  {
    id: "books-places",
    title: "Ideas • Places • Retreats",
    icon: Book,
    color: "from-amber-500/10 to-amber-600/10 hover:from-amber-500/20 hover:to-amber-600/20",
    borderColor: "hover:border-amber-500/50",
    sections: [
      { title: "Favorite Books", items: ["Flowers for Algernon", "Proofs from THE BOOK", "When Breath Becomes Air"] },
      { title: "Favorite Cities", items: ["Banff", "Haeundae", "Puerto Ayora"] },
      { title: "Favorite Spots", items: ["Bar Harbor", "East Rock", "South Pointe"] },
    ],
  },
  {
    id: "sports",
    title: "Competition • Movement • Nature",
    icon: Trophy,
    color: "from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20",
    borderColor: "hover:border-green-500/50",
    sections: [
      { title: "Ball Sports", items: ["Basketball", "Golf", "Tennis"] },
      { title: "Non-ball Sports", items: ["Cycling", "Frisbee", "Running"] },
      { title: "Outdoor Activities", items: ["Fishing", "Hiking", "Skiing"] },
    ],
  },
  {
    id: "food-drink",
    title: "Taste • Refreshment • Indulgence",
    icon: Utensils,
    color: "from-rose-500/10 to-rose-600/10 hover:from-rose-500/20 hover:to-rose-600/20",
    borderColor: "hover:border-rose-500/50",
    sections: [
      { title: "Food", items: ["Dim Sum", "Naengmyeon (물냉면)", "Risotto"] },
      { title: "Drink", items: ["Cold Brew", "Gatorade", "Sprite"] },
      { title: "Alcohol", items: ["High Noon", "Piña Colada", "Sangria"] },
    ],
  },
  {
    id: "travel-nature",
    title: "Aspirations • Companions • Creatures",
    icon: Plane,
    color: "from-cyan-500/10 to-cyan-600/10 hover:from-cyan-500/20 hover:to-cyan-600/20",
    borderColor: "hover:border-cyan-500/50",
    sections: [
      { title: "Travel Wish List", items: ["Alaska", "Germany", "Spain"] },
      { title: "Pet Wishlist", items: ["British Shorthair", "French Bulldog", "Staffordshire Bull Terrier"] },
      { title: "Favorite Animals", items: ["Dragons", "Lions", "Polar Bears"] },
    ],
  },
  {
    id: "people",
    title: "Performance • Excellence • Influence",
    icon: Users,
    color: "from-violet-500/10 to-violet-600/10 hover:from-violet-500/20 hover:to-violet-600/20",
    borderColor: "hover:border-violet-500/50",
    sections: [
      { title: "Favorite Actors", items: ["Anthony Hopkins", "Emily Blunt", "Jeremy Irons"] },
      { title: "Favorite Athletes", items: ["Lewis Hamilton", "Roger Federer", "Victor Wembanyama"] },
      { title: "Inspirational Figures", items: ["Albert Camus", "Janet Yellen", "Jim Simons"] },
    ],
  },
  {
    id: "academics-goals",
    title: "Study • Purpose • Growth",
    icon: GraduationCap,
    color: "from-sky-500/10 to-sky-600/10 hover:from-sky-500/20 hover:to-sky-600/20",
    borderColor: "hover:border-sky-500/50",
    sections: [
      { title: "What I Would Major In", items: ["Global Affairs", "Philosophy", "Statistics"] },
      { title: "Passions", items: ["Arts and Culture", "Economic Empowerment", "Science & Technology"] },
      { title: "Things to Learn / Work On", items: ["Korean & Spanish", "Relationships", "Systems Building"] },
    ],
  },
  {
    id: "games",
    title: "Play • Strategy • Recreation",
    icon: Gamepad2,
    color: "from-indigo-500/10 to-indigo-600/10 hover:from-indigo-500/20 hover:to-indigo-600/20",
    borderColor: "hover:border-indigo-500/50",
    sections: [
      { title: "Video Games", items: ["Clash of Clans", "FIFA", "Halo"] },
      { title: "Card / Board Games", items: ["Chess", "Egyptian Rat Screw", "Poker"] },
      { title: "Other Games / Recreation", items: ["Bowling", "Super Smash Bros.", "Tetris"] },
    ],
  },
  {
    id: "creative",
    title: "Expression • Vision • Form",
    icon: Palette,
    color: "from-teal-500/10 to-teal-600/10 hover:from-teal-500/20 hover:to-teal-600/20",
    borderColor: "hover:border-teal-500/50",
    sections: [
      { title: "Written", items: ["Journaling", "Reading", "Writing (Essays)"] },
      { title: "Visual", items: ["Video Editing", "Photography", "Art"] },
      { title: "Music", items: ["Jazz", "Piano", "Songwriting"] },
    ],
  },
]

export function InterestGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = tiles.find((t) => t.id === selectedId) ?? null

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {tiles.map((tile) => {
          const Icon = tile.icon

          return (
            <button
              key={tile.id}
              onClick={() => setSelectedId(tile.id)}
              className={cn(
                "aspect-square bg-gradient-to-br border border-border rounded-xl p-4 sm:p-6 transition-all duration-300 group relative overflow-hidden grid place-items-center",
                tile.color,
                tile.borderColor,
                selectedId === tile.id && "scale-95 opacity-50",
              )}
            >

              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex flex-col items-center justify-center gap-2 sm:gap-3">
                {/* ICON WRAPPER */}
                <div className="h-10 w-10 flex items-center justify-center flex-none">
                  <Icon className="h-full w-full block shrink-0 text-primary group-hover:scale-110 transition-transform" />
                </div>

                <p className="hidden sm:block text-sm md:text-base font-medium text-foreground text-center leading-tight">
                  {tile.title}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="bg-card border border-border rounded-2xl p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                {(() => {
                  const SelectedIcon: LucideIcon = selected.icon
                  return <SelectedIcon className="w-6 h-6 text-primary block shrink-0" />
                })()}
                <h3 className="text-2xl font-medium text-foreground">{selected.title}</h3>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 block" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selected.sections.map((section) => (
                <div
                  key={section.title}
                  className="bg-card/40 border border-border rounded-xl p-5 hover:border-primary transition-colors"
                >
                  <h4 className="text-sm font-medium text-primary mb-3">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-foreground bg-secondary px-3 py-1.5 rounded-lg border border-border"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
