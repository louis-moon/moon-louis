// app/media/page.tsx

import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Camera } from "lucide-react"
import { PhotoGrid } from "@/components/photo-grid"

const photos = [
  // 2025
  { src: "/photos/IMG_0884.jpg", alt: "Me and Jack (Longwood Gardens)", caption: "Kennett Square, PA — Mar 29, 2025" },
  { src: "/photos/IMG_0720.jpg", alt: "Me and Alan (Pier 86)", caption: "New York, NY — Mar 16, 2025" },
  { src: "/photos/IMG_5373.JPG", alt: "Me and Youssef (Regatta Grove)", caption: "Miami, FL — Feb 9, 2025" },
  { src: "/photos/IMG_0244.jpg", alt: "Me and Preston (Doral)", caption: "Doral, FL — Feb 8, 2025" },

  // 2024
  { src: "/photos/IMG_8225.jpg", alt: "Me and Dad (US Open) — USTA Billie Jean King National Tennis Center", caption: "New York, NY — Sep 2, 2024" },
  { src: "/photos/IMG_7685.jpg", alt: "Family (Banff) — Kananaskis Country Golf Course", caption: "Kananaskis, AB — Jun 20, 2024" },
  { src: "/photos/IMG_7698.jpg", alt: "Family (Banff) — Kananaskis Country Golf Course", caption: "Kananaskis, AB — Jun 20, 2024" },
  { src: "/photos/IMG_7643.jpg", alt: "Me and David and Jaewon (Banff)", caption: "Banff, AB — Jun 19, 2024" },
  { src: "/photos/IMG_7569.jpg", alt: "Family (Banff)", caption: "Banff, AB — Jun 17, 2024" },
  { src: "/photos/IMG_7263.jpg", alt: "Me and Mom (Hoboken)", caption: "Hoboken, NJ — Apr 28, 2024" },
  { src: "/photos/IMG_6155.jpg", alt: "Me and Jonathan (Doral)", caption: "Doral, FL — Jan 1, 2024" },

  // 2023
  { src: "/photos/IMG_6140.jpg", alt: "Family (Fairchild Tropical Botanical Gardens)", caption: "Miami, FL — Dec 31, 2023" },
  { src: "/photos/IMG_7350.jpg", alt: "Me and Sam (Santa's Enchanted Forest)", caption: "Miami, FL — Dec 29, 2023" },
  { src: "/photos/IMG_9400.jpg", alt: "Me and Adyant (SF)", caption: "San Francisco, CA — Jul 30, 2023" },
  { src: "/photos/IMG_9480.jpg", alt: "Family (Acadia National Park)", caption: "Maine — Jul 1, 2023" },
  { src: "/photos/IMG_9191.jpg", alt: "Family (Yale graduation)", caption: "New Haven, CT — May 22, 2023" },
  { src: "/photos/IMG_9009.jpg", alt: "Family (UNC White Coat Ceremony)", caption: "Chapel Hill, NC — May 21, 2023" },
  { src: "/photos/IMG_2190.jpg", alt: "Me and Dan (Tidal Basin)", caption: "Washington, DC — Mar 25, 2023" },

  // 2020
  { src: "/photos/IMG_4012.JPG", alt: "Me and Blake (Gainesville)", caption: "Gainesville, FL — Mar 21, 2020" },

  // 2019
  { src: "/photos/IMG_3044.PNG", alt: "Me and Sam (Yale)", caption: "New Haven, CT — Nov 5, 2019" },
]

export default function MediaPage() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="animate-fade-in mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-6 h-6 text-primary" />
              <p className="text-sm text-muted-foreground">Visual Stories</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">Media</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl text-pretty leading-relaxed">
              Capturing moments and experiences through photography and video, documenting travels, performances, and
              creative projects.
            </p>
          </div>

          {/* Photography grid only */}
          <section>
            <h2 className="text-2xl font-light mb-6 text-foreground">Photography</h2>
            <PhotoGrid photos={photos} />
          </section>
        </div>
      </main>
    </>
  )
}
