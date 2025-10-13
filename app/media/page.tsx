import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Camera } from "lucide-react"
import { PhotoCarousel } from "@/components/photo-carousel"
import { PhotoGrid } from "@/components/photo-grid"

const photos = [
  // 2019
  { src: "/photos/IMG_0244.HEIC", alt: "Me and Sam (Yale)", caption: "New Haven, CT — Nov 5, 2019" },

  // 2020
  { src: "/photos/IMG_0720.HEIC", alt: "Me and Blake (Gainesville)", caption: "Gainesville, FL — Mar 21, 2020" },

  // 2023
  { src: "/photos/IMG_0884.HEIC", alt: "Me and Dan (Tidal Basin)", caption: "Washington, DC — Mar 25, 2023" },
  { src: "/photos/IMG_2190.heic", alt: "Family (UNC White Coat Ceremony)", caption: "Chapel Hill, NC — May 21, 2023" },
  { src: "/photos/IMG_3044.PNG", alt: "Family (Yale graduation)", caption: "New Haven, CT — May 22, 2023" },
  { src: "/photos/IMG_4012.JPG", alt: "Family (Acadia National Park)", caption: "Maine — Jul 1, 2023" },
  { src: "/photos/IMG_5373.JPG", alt: "Me and Adyant (SF)", caption: "San Francisco, CA — Jul 30, 2023" },
  { src: "/photos/IMG_6140.HEIC", alt: "Me and Sam (Santa's Enchanted Forest)", caption: "Miami, FL — Dec 29, 2023" },
  { src: "/photos/IMG_6155.HEIC", alt: "Family (Fairchild Tropical Botanical Gardens)", caption: "Miami, FL — Dec 31, 2023" },

  // 2024
  { src: "/photos/IMG_7263.HEIC", alt: "Me and Jonathan (Doral)", caption: "Doral, FL — Jan 1, 2024" },
  { src: "/photos/IMG_7350.HEIC", alt: "Me and Mom (Hoboken)", caption: "Hoboken, NJ — Apr 28, 2024" },
  { src: "/photos/IMG_7569.HEIC", alt: "Family (Banff)", caption: "Banff, AB — Jun 17, 2024" },
  { src: "/photos/IMG_7643.HEIC", alt: "Me and David and Jaewon (Banff)", caption: "Banff, AB — Jun 19, 2024" },
  { src: "/photos/IMG_7685.HEIC", alt: "Family (Banff) — Kananaskis Country Golf Course", caption: "Kananaskis, AB — Jun 20, 2024" },
  { src: "/photos/IMG_7698.HEIC", alt: "Family (Banff) — Kananaskis Country Golf Course", caption: "Kananaskis, AB — Jun 20, 2024" },
  { src: "/photos/IMG_8225.HEIC", alt: "Me and Dad (US Open) — USTA Billie Jean King National Tennis Center", caption: "New York, NY — Sep 2, 2024" },

  // 2025
  { src: "/photos/IMG_9009.HEIC", alt: "Me and Preston (Doral)", caption: "Doral, FL — Feb 8, 2025" },
  { src: "/photos/IMG_9191.HEIC", alt: "Me and Youssef (Regatta Grove)", caption: "Miami, FL — Feb 9, 2025" },
  { src: "/photos/IMG_9400.heic", alt: "Me and Alan (Pier 86)", caption: "New York, NY — Mar 16, 2025" },
  { src: "/photos/IMG_9480.heic", alt: "Me and Jack (Longwood Gardens)", caption: "Kennett Square, PA — Mar 29, 2025" },
]

// Same list with ISO dates for the carousel (chronological)
const photosForCarousel = [
  { src: "/photos/IMG_0244.HEIC", title: "Me and Sam (Yale)", subtitle: "New Haven, CT — Nov 5, 2019", dateISO: "2019-11-05" },
  { src: "/photos/IMG_0720.HEIC", title: "Me and Blake (Gainesville)", subtitle: "Gainesville, FL — Mar 21, 2020", dateISO: "2020-03-21" },
  { src: "/photos/IMG_0884.HEIC", title: "Me and Dan (Tidal Basin)", subtitle: "Washington, DC — Mar 25, 2023", dateISO: "2023-03-25" },
  { src: "/photos/IMG_2190.heic", title: "Family (UNC White Coat Ceremony)", subtitle: "Chapel Hill, NC — May 21, 2023", dateISO: "2023-05-21" },
  { src: "/photos/IMG_3044.PNG", title: "Family (Yale graduation)", subtitle: "New Haven, CT — May 22, 2023", dateISO: "2023-05-22" },
  { src: "/photos/IMG_4012.JPG", title: "Family (Acadia National Park)", subtitle: "Maine — Jul 1, 2023", dateISO: "2023-07-01" },
  { src: "/photos/IMG_5373.JPG", title: "Me and Adyant (SF)", subtitle: "San Francisco, CA — Jul 30, 2023", dateISO: "2023-07-30" },
  { src: "/photos/IMG_6140.HEIC", title: "Me and Sam (Santa's Enchanted Forest)", subtitle: "Miami, FL — Dec 29, 2023", dateISO: "2023-12-29" },
  { src: "/photos/IMG_6155.HEIC", title: "Family (Fairchild Tropical Botanical Gardens)", subtitle: "Miami, FL — Dec 31, 2023", dateISO: "2023-12-31" },
  { src: "/photos/IMG_7263.HEIC", title: "Me and Jonathan (Doral)", subtitle: "Doral, FL — Jan 1, 2024", dateISO: "2024-01-01" },
  { src: "/photos/IMG_7350.HEIC", title: "Me and Mom (Hoboken)", subtitle: "Hoboken, NJ — Apr 28, 2024", dateISO: "2024-04-28" },
  { src: "/photos/IMG_7569.HEIC", title: "Family (Banff)", subtitle: "Banff, AB — Jun 17, 2024", dateISO: "2024-06-17" },
  { src: "/photos/IMG_7643.HEIC", title: "Me and David and Jaewon (Banff)", subtitle: "Banff, AB — Jun 19, 2024", dateISO: "2024-06-19" },
  { src: "/photos/IMG_7685.HEIC", title: "Family (Banff) — Kananaskis Country Golf Course", subtitle: "Kananaskis, AB — Jun 20, 2024", dateISO: "2024-06-20" },
  { src: "/photos/IMG_7698.HEIC", title: "Family (Banff) — Kananaskis Country Golf Course", subtitle: "Kananaskis, AB — Jun 20, 2024", dateISO: "2024-06-20" },
  { src: "/photos/IMG_8225.HEIC", title: "Me and Dad (US Open)", subtitle: "New York, NY — Sep 2, 2024", dateISO: "2024-09-02" },
  { src: "/photos/IMG_9009.HEIC", title: "Me and Preston (Doral)", subtitle: "Doral, FL — Feb 8, 2025", dateISO: "2025-02-08" },
  { src: "/photos/IMG_9191.HEIC", title: "Me and Youssef (Regatta Grove)", subtitle: "Miami, FL — Feb 9, 2025", dateISO: "2025-02-09" },
  { src: "/photos/IMG_9400.heic", title: "Me and Alan (Pier 86)", subtitle: "New York, NY — Mar 16, 2025", dateISO: "2025-03-16" },
  { src: "/photos/IMG_9480.heic", title: "Me and Jack (Longwood Gardens)", subtitle: "Kennett Square, PA — Mar 29, 2025", dateISO: "2025-03-29" },
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

          {/* Featured carousel (chronological) */}
          <section className="mb-16">
            <h2 className="text-2xl font-light mb-6 text-foreground">Featured</h2>
            <PhotoCarousel photos={photosForCarousel} />
          </section>

          {/* All photos grid */}
          <section>
            <h2 className="text-2xl font-light mb-6 text-foreground">Photography</h2>
            <PhotoGrid photos={photos} />
          </section>
        </div>
      </main>
    </>
  )
}
