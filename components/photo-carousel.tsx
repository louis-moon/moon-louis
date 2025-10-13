"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import type { EmblaOptionsType } from "embla-carousel"  // ⬅️ type comes from core
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Photo = {
  src: string
  title: string
  subtitle?: string
  dateISO: string // used for sorting; YYYY-MM-DD
}

export function PhotoCarousel({
  photos,
  options,
}: {
  photos: Photo[]
  options?: EmblaOptionsType
}) {
  // sort chronologically by date (oldest → newest)
  const ordered = [...photos].sort((a, b) => a.dateISO.localeCompare(b.dateISO))

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    skipSnaps: false,
    ...options,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      {/* viewport */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card" ref={emblaRef}>
        <div className="flex">
          {ordered.map((p, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%]">
              <figure className="relative aspect-[4/3]">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={i < 1}
                />
                {/* caption bar */}
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm text-white/95 font-medium">{p.title}</p>
                  {p.subtitle && <p className="text-xs text-white/80">{p.subtitle}</p>}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      <button
        aria-label="Previous"
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/90 p-2 shadow hover:bg-card"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next"
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/90 p-2 shadow hover:bg-card"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* dots */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        {ordered.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === selectedIndex ? "bg-primary w-6" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
