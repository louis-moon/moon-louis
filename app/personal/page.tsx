import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { InterestGrid } from "@/components/interest-grid"
import { Heart, Sparkles, ImageIcon } from "lucide-react"
import { PhotoCarousel } from "@/components/photo-carousel"

const personalPhotos = [
  // 2019
  {
    src: "/photos/IMG_0244.HEIC",
    title: "Me and Sam (Yale)",
    subtitle: "New Haven, CT",
    dateISO: "2019-11-05",
  },

  // 2020
  {
    src: "/photos/IMG_0720.HEIC",
    title: "Me and Blake (Gainesville)",
    subtitle: "Gainesville, FL",
    dateISO: "2020-03-21",
  },

  // 2023
  {
    src: "/photos/IMG_0884.HEIC",
    title: "Me and Dan (Tidal Basin)",
    subtitle: "Washington, DC",
    dateISO: "2023-03-25",
  },
  {
    src: "/photos/IMG_2190.heic",
    title: "Family (UNC White Coat Ceremony)",
    subtitle: "Chapel Hill, NC",
    dateISO: "2023-05-21",
  },
  {
    src: "/photos/IMG_3044.PNG",
    title: "Family (Yale graduation)",
    subtitle: "New Haven, CT",
    dateISO: "2023-05-22",
  },
  {
    src: "/photos/IMG_4012.JPG",
    title: "Family (Acadia National Park)",
    subtitle: "Maine",
    dateISO: "2023-07-01",
  },
  {
    src: "/photos/IMG_5373.JPG",
    title: "Me and Adyant (SF)",
    subtitle: "San Francisco, CA",
    dateISO: "2023-07-30",
  },
  {
    src: "/photos/IMG_6140.HEIC",
    title: "Me and Sam (Santa's Enchanted Forest)",
    subtitle: "Miami, FL",
    dateISO: "2023-12-29",
  },
  {
    src: "/photos/IMG_6155.HEIC",
    title: "Family (Fairchild Tropical Botanical Gardens)",
    subtitle: "Miami, FL",
    dateISO: "2023-12-31",
  },

  // 2024
  {
    src: "/photos/IMG_7263.HEIC",
    title: "Me and Jonathan (Doral)",
    subtitle: "Doral, FL",
    dateISO: "2024-01-01",
  },
  {
    src: "/photos/IMG_7350.HEIC",
    title: "Me and Mom (Hoboken)",
    subtitle: "Hoboken, NJ",
    dateISO: "2024-04-28",
  },
  {
    src: "/photos/IMG_7569.HEIC",
    title: "Family (Banff)",
    subtitle: "Banff, AB",
    dateISO: "2024-06-17",
  },
  {
    src: "/photos/IMG_7643.HEIC",
    title: "Me and David and Jaewon (Banff)",
    subtitle: "Banff, AB",
    dateISO: "2024-06-19",
  },
  {
    src: "/photos/IMG_7685.HEIC",
    title: "Family (Banff) — Kananaskis Country Golf Course",
    subtitle: "Kananaskis, AB",
    dateISO: "2024-06-20",
  },
  {
    src: "/photos/IMG_7698.HEIC",
    title: "Family (Banff) — Kananaskis Country Golf Course",
    subtitle: "Kananaskis, AB",
    dateISO: "2024-06-20",
  },
  {
    src: "/photos/IMG_8225.HEIC",
    title: "Me and Dad (US Open)",
    subtitle: "USTA Billie Jean King National Tennis Center, NY",
    dateISO: "2024-09-02",
  },

  // 2025
  {
    src: "/photos/IMG_9009.HEIC",
    title: "Me and Preston (Doral)",
    subtitle: "Doral, FL",
    dateISO: "2025-02-08",
  },
  {
    src: "/photos/IMG_9191.HEIC",
    title: "Me and Youssef (Regatta Grove)",
    subtitle: "Miami, FL",
    dateISO: "2025-02-09",
  },
  {
    src: "/photos/IMG_9400.heic",
    title: "Me and Alan (Pier 86)",
    subtitle: "New York, NY",
    dateISO: "2025-03-16",
  },
  {
    src: "/photos/IMG_9480.heic",
    title: "Me and Jack (Longwood Gardens)",
    subtitle: "Kennett Square, PA",
    dateISO: "2025-03-29",
  },
]

export default function PersonalPage() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
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

          {/* Interest grid */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground">Click any category to explore</p>
            </div>
            <InterestGrid />
          </div>

          {/* Photography carousel */}
          <section className="mt-10">
            <div className="flex items-center gap-3 mb-6">
              <ImageIcon className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Photography</h2>
            </div>
            <PhotoCarousel photos={personalPhotos} />
          </section>
        </div>
      </main>
    </>
  )
}
