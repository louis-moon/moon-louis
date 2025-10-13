"use client"

import Image from "next/image"

type Photo = {
  src: string
  alt: string
  caption?: string
}

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((p, i) => (
        <figure
          key={i}
          className="group overflow-hidden rounded-xl border border-border bg-card hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              // No need to set a style/color—Tailwind handles it and Next will statically export unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority={i < 3}
            />
          </div>
          {(p.caption || p.alt) && (
            <figcaption className="p-4 text-sm text-muted-foreground">
              {p.caption ?? p.alt}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}
