'use client'

// app/professional/page.tsx

import { useEffect, useMemo, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Briefcase, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// =======================
// Types (UNCHANGED)
// =======================

type Bullet = string

type Role = {
  title: string
  type: string
  period: string
  bullets: Bullet[]
}

type Company = {
  company: string
  location: string
  roles: Role[]
}

type ProjectRole = {
  title: string
  period: string
  bullets: Bullet[]
}

type Project = {
  name: string
  location: string
  roles: ProjectRole[]
}

// =======================
// Data (UNCHANGED)
// =======================

const fullTime: Company[] = [
  {
    company: "Green Golf Carbon",
    location: "Miami, Florida",
    roles: [
      {
        title: "Chief Product Officer",
        type: "Full-time",
        period: "Feb 2025 – Present",
        bullets: [
          "Originated go-to-market documents (e.g. business plan, pitch deck, project design document, project proposal) and strategy; built comprehensive database of 25k+ golf courses and ran SCEPTER model simulating carbon dioxide removal through ERW",
          "Building digital golf twin product: a real-time virtual replica of golf courses to save inputs, manage risk, and boost profitability; directly working hand in hand with founders to raise venture capital funding, expand team, and validate product development",
        ],
      },
    ],
  },
  {
    company: "amiqo",
    location: "Atlanta, Georgia",
    roles: [
      {
        title: "Head of Product",
        type: "Full-time",
        period: "Jul 2024 – Feb 2025",
        bullets: [
          "Owned end-to-end product strategy and conceptualized platform to foster in-person connections through real-life activities; organized product requirements documents, KPI frameworks, and conducted user interviews to drive rapid product iteration",
          "Orchestrated development of two core product features: an interest-matching algorithm and social sphere visualization tool; managed cross-functional team and collaborated with engineering, design, and marketing to drive product growth and success",
        ],
      },
    ],
  },
  {
    company: "Rowan",
    location: "Orlando, Florida",
    roles: [
      {
        title: "Product Manager",
        type: "Contract",
        period: "Mar 2024 – Jun 2024",
        bullets: [
          "Established a semantic comparable business search query system to value businesses through comparable company analyses; formulated one version for the sell-side and one for the buy-side, bringing the time for process down from hours to seconds",
          "Led product development initiatives for the financial valuation product, focusing on core functionalities and user experience; created and maintained comprehensive product roadmap, prioritizing key features for MVP development and future iterations",
        ],
      },
    ],
  },
  {
    company: "Equity A1",
    location: "NYC Metropolitan Area",
    roles: [
      {
        title: "Co-Founder",
        type: "Full-time",
        period: "Apr 2023 – Mar 2024",
        bullets: [
          "Utilized CNN/RNN and transformer-based architectures to build video-to-text models with logistics clients for production integration, refining requirements with operators; focused on delivery verification, employee monitoring, and driver safety checks",
          "Co-founded the company alongside Yale, Berkeley, and UChicago alumni with a focus on product and software development; used children's books as training data to prototype a complementary text-to-video model using natural language processing techniques",
        ],
      },
    ],
  },
]

const projects: Project[] = [
  {
    name: "Tsai CITY Accelerator",
    location: "New Haven, Connecticut",
    roles: [
      {
        title: "Fall Cohort",
        period: "Sep 2021 – Nov 2021",
        bullets: [
          "Participated in Tsai CITY's flagship venture accelerator; secured initial funding, mentorship, and strategic support",
          "Embedded within Yale's broader innovation pipeline; collaborated with peers and experts to refine concepts",
        ],
      },
    ],
  },
  {
    name: "Tutoring for Tomorrow",
    location: "Miami, Florida",
    roles: [
      {
        title: "Executive Director",
        period: "Aug 2015 – May 2021",
        bullets: [
          "Tripled sales to $3,000 a month, raised over $100,000 in 5 years, and expanded operations to 4 schools in Miami-Dade County",
          "Personally raised over $5,000, incorporated organization as a 501(c)(3), and recruited over 50 student tutors",
        ],
      },
    ],
  },
]

const internships: Company[] = [
  {
    company: "Romero Capital",
    location: "New York, New York",
    roles: [
      {
        title: "Investment Analyst Intern",
        type: "Internship",
        period: "Apr 2020 – Jun 2020",
        bullets: [
          "Supported portfolio manager in reviewing investment prospects by performing due diligence and building valuation models; crafted scenario-based financial statements with schedules and spread industry comparables to enhance investment decisions",
          "Performed company valuations including discounted cash flow, comparable companies, and precedent transactions analyses; utilized LBO and M&A models to evaluate and compare valuation levels, resulting in full valuation comparisons and insights",
        ],
      },
    ],
  },
  {
    company: "Yale Young Global Scholars",
    location: "New Haven, Connecticut",
    roles: [
      {
        title: "Undergraduate Instructor",
        type: "Internship",
        period: "Jun 2019 – Aug 2019",
        bullets: [
          "Designed and implemented teaching curriculum at Yale University summer program as one of 12 undergraduate instructors; taught Sustainable Development and Social Entrepreneurship and Politics, Law, and Economics to enhance academic breadth",
          "Delivered four unique seminars each session, orchestrated three simulated case studies, and oversaw post-lecture breakout sessions; mentored high school students, enhancing their academic capabilities and resulting in six successful capstone research projects",
        ],
      },
    ],
  },
  {
    company: "Florida Vocational Institute",
    location: "Miami, Florida",
    roles: [
      {
        title: "Summer Intern",
        type: "Internship",
        period: "Jun 2018 – Aug 2018",
        bullets: [
          "Set up five summer boot camps with 100 students to teach teenagers computer science for South Florida's TechHire initiative, a campaign to expand local technology sectors by establishing talent pipelines in underserved communities across the nation",
          "Modeled lead flows, managed marketing campaigns, and provided competitive analysis for the company's coding bootcamp; centered on search engine optimization along with improving click-through rates using CRM platforms and email marketing",
        ],
      },
    ],
  },
]

const volunteering: Company[] = [
  {
    company: "Big Brothers Big Sisters of Miami",
    location: "Miami, Florida",
    roles: [
      {
        title: "Big Brother",
        type: "Volunteer",
        period: "Oct 2025 – Present",
        bullets: [
          "Mentor matched youth ages 5–14 through community-based program, meeting bi-monthly for structured, family-coordinated activities that promote personal growth, goal setting, and consistent developmental support",
        ],
      },
    ],
  },
  {
    company: "Yale Club of South Florida",
    location: "Miami, Florida",
    roles: [
      {
        title: "New Leaders Council",
        type: "Volunteer",
        period: "Sep 2025 – Present",
        bullets: [
          "Organize and lead alumni engagement initiatives for the Yale Club of South Florida, coordinating programs and small-group events that strengthen networking, community participation, and sustained alumni involvement",
        ],
      },
    ],
  },
]

// =======================
// Optional display-only metadata for Projects
// (Does NOT change your project content; just lets you add a title/location
// so Projects can visually match Companies.)
// =======================

const projectDisplayMeta: Record<
  string,
  {
    title?: string
    location?: string
  }
> = {
  "Tsai CITY Accelerator": {
    title: "Fall Cohort",
    location: "New Haven, Connecticut",
  },
  "Tutoring for Tomorrow": {
    title: "Executive Director",
    location: "Miami, Florida",
  },
}

// =======================
// Bubble Model
// =======================

type BubbleContent =
  | { kind: "company"; data: Company }
  | { kind: "project"; data: Project }

type BubbleCategory = "fullTime" | "projects" | "internships" | "volunteering"

type BubbleSeed = {
  id: string
  label: string
  diameter: number
  category: BubbleCategory
  seedX: number
  seedY: number
  content: BubbleContent
}

type BubbleSim = BubbleSeed & {
  x: number
  y: number
  vx: number
  vy: number
}

const categoryStyle: Record<
  BubbleCategory,
  {
    fill: string
    ring: string
    hoverRing: string
    glow: string
    legendDot: string
    legendBg: string
  }
> = {
  fullTime: {
    fill: "bg-gradient-to-br from-blue-700/45 to-blue-600/30",
    ring: "ring-blue-700/60",
    hoverRing: "group-hover:ring-blue-600/90",
    glow: "group-hover:shadow-blue-600/30",
    legendDot: "bg-blue-600",
    legendBg: "bg-blue-800/25",
  },
  projects: {
    fill: "bg-cyan-500/16",
    ring: "ring-cyan-500/45",
    hoverRing: "group-hover:ring-cyan-400/85",
    glow: "group-hover:shadow-cyan-400/20",
    legendDot: "bg-cyan-400",
    legendBg: "bg-cyan-500/10",
  },
  internships: {
    fill: "bg-purple-600/18",
    ring: "ring-purple-500/55",
    hoverRing: "group-hover:ring-purple-400/90",
    glow: "group-hover:shadow-purple-400/25",
    legendDot: "bg-purple-400",
    legendBg: "bg-purple-500/12",
  },
  volunteering: {
    fill: "bg-emerald-500/18",
    ring: "ring-emerald-500/45",
    hoverRing: "group-hover:ring-emerald-400/85",
    glow: "group-hover:shadow-emerald-400/20",
    legendDot: "bg-emerald-400",
    legendBg: "bg-emerald-500/10",
  },
}

const seedBubbles: BubbleSeed[] = [
  {
    id: "ggc",
    label: "Green Golf Carbon",
    diameter: 200,
    category: "fullTime",
    seedX: 0,
    seedY: 0,
    content: { kind: "company", data: fullTime[0] },
  },
  {
    id: "amiqo",
    label: "amiqo",
    diameter: 160,
    category: "fullTime",
    seedX: -190,
    seedY: -130,
    content: { kind: "company", data: fullTime[1] },
  },
  {
    id: "rowan",
    label: "Rowan",
    diameter: 140,
    category: "fullTime",
    seedX: 210,
    seedY: -110,
    content: { kind: "company", data: fullTime[2] },
  },
  {
    id: "equitya1",
    label: "Equity A1",
    diameter: 150,
    category: "fullTime",
    seedX: 220,
    seedY: 140,
    content: { kind: "company", data: fullTime[3] },
  },

  {
    id: "tsai",
    label: "Tsai CITY Accelerator",
    diameter: 125,
    category: "projects",
    seedX: -320,
    seedY: 160,
    content: { kind: "project", data: projects[0] },
  },
  {
    id: "tutoring",
    label: "Tutoring for Tomorrow",
    diameter: 175,
    category: "projects",
    seedX: -40,
    seedY: 260,
    content: { kind: "project", data: projects[1] },
  },

  {
    id: "romero",
    label: "Romero Capital",
    diameter: 125,
    category: "internships",
    seedX: 380,
    seedY: -40,
    content: { kind: "company", data: internships[0] },
  },
  {
    id: "yygs",
    label: "Yale Young Global Scholars",
    diameter: 125,
    category: "internships",
    seedX: 120,
    seedY: -360,
    content: { kind: "company", data: internships[1] },
  },
  {
    id: "fvi",
    label: "Florida Vocational Institute",
    diameter: 125,
    category: "internships",
    seedX: -380,
    seedY: -40,
    content: { kind: "company", data: internships[2] },
  },

  {
    id: "bbbs",
    label: "Big Brothers Big Sisters of Miami",
    diameter: 130,
    category: "volunteering",
    seedX: 60,
    seedY: -300,
    content: { kind: "company", data: volunteering[0] },
  },
  {
    id: "yaleclub",
    label: "Yale Club of South Florida",
    diameter: 130,
    category: "volunteering",
    seedX: -140,
    seedY: -320,
    content: { kind: "company", data: volunteering[1] },
  },
]

function computeLabelStyle(label: string, diameter: number) {
  const base = diameter * 0.12 // proportional baseline
  const max = 18
  const min = 11

  // penalize long strings slightly
  const lengthPenalty = Math.max(0, label.length - 18) * 0.25

  const size = clamp(base - lengthPenalty, min, max)

  return {
    fontSize: `${size}px`,
    lineHeight: 1.25,
  }
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function useBubbleSimulation(
  seeds: BubbleSeed[],
  bounds: { w: number; h: number },
  isMobile: boolean
) {
  const padding = isMobile ? 30 : 22
  const edgePadding = isMobile ? 16 : 0
  const maxSpeed = 0.7

  const simRef = useRef<BubbleSim[]>([])
  const [, setTick] = useState(0)

  useEffect(() => {
    simRef.current = seeds.map((s) => ({
      ...s,
      x: s.seedX,
      y: s.seedY,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }))
    setTick((t) => t + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seeds.length])

  useEffect(() => {
    if (!bounds.w || !bounds.h) return

    let raf = 0

    const step = () => {
      const nodes = simRef.current
      if (!nodes.length) {
        raf = requestAnimationFrame(step)
        return
      }

      for (const n of nodes) {
        const ax = (n.seedX - n.x) * 0.0025
        const ay = (n.seedY - n.y) * 0.0025
        n.vx += ax
        n.vy += ay

        n.vx += (Math.random() - 0.5) * 0.02
        n.vy += (Math.random() - 0.5) * 0.02

        n.vx *= 0.92
        n.vy *= 0.92

        n.vx = clamp(n.vx, -maxSpeed, maxSpeed)
        n.vy = clamp(n.vy, -maxSpeed, maxSpeed)
      }

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
      }

      for (let iter = 0; iter < 3; iter++) {
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i]
            const b = nodes[j]
            const ar = a.diameter / 2
            const br = b.diameter / 2
            const minDist = ar + br + padding

            const dx = b.x - a.x
            const dy = b.y - a.y
            const dist = Math.hypot(dx, dy) || 0.0001

            if (dist < minDist) {
              const overlap = (minDist - dist) / dist
              const pushX = dx * overlap * 0.5
              const pushY = dy * overlap * 0.5

              a.x -= pushX
              a.y -= pushY
              b.x += pushX
              b.y += pushY

              a.vx -= pushX * 0.02
              a.vy -= pushY * 0.02
              b.vx += pushX * 0.02
              b.vy += pushY * 0.02
            }
          }
        }
      }

      const halfW = bounds.w / 2
      const halfH = bounds.h / 2
      for (const n of nodes) {
        const r = n.diameter / 2
        const minX = -halfW + r
        const maxX = halfW - r
        const minY = -halfH + r
        const maxY = halfH - r

        if (n.x < minX) {
          n.x = minX
          n.vx *= -0.4
        }
        if (n.x > maxX) {
          n.x = maxX
          n.vx *= -0.4
        }
        if (n.y < minY) {
          n.y = minY
          n.vy *= -0.4
        }
        if (n.y > maxY) {
          n.y = maxY
          n.vy *= -0.4
        }
      }

      setTick((t) => (t + 1) % 1000000)
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [bounds.h, bounds.w])

  return simRef
}

function LegendPill({ label, category }: { label: string; category: BubbleCategory }) {
  const s = categoryStyle[category]
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 ${s.legendBg}`}>
      <span className={`w-2 h-2 rounded-full ${s.legendDot}`} />
      {label}
    </span>
  )
}

// =======================
// Page
// =======================

export default function ProfessionalPage() {
  const [active, setActive] = useState<BubbleSim | null>(null)

  const fieldRef = useRef<HTMLDivElement | null>(null)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const [bounds, setBounds] = useState({ w: 900, h: 900 })

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  const FIELD_SIZE = isMobile ? 820 : 980

  useEffect(() => {
    const el = fieldRef.current
    if (!el) return

    const ro = new ResizeObserver(() => {
      const w = el.offsetWidth
      const h = el.offsetHeight
      setBounds({
        w: Math.max(320, w),
        h: Math.max(520, h),
      })
    })

    ro.observe(el)
    return () => ro.disconnect()
  }, [])


  useEffect(() => {
    const vp = viewportRef.current
    if (!vp) return

    const id = setTimeout(() => {
      requestAnimationFrame(() => {
        vp.scrollLeft = (vp.scrollWidth - vp.clientWidth) / 2
        vp.scrollTop = (vp.scrollHeight - vp.clientHeight) / 2
      })
    }, 50)

    return () => clearTimeout(id)
  }, [])

  const seeds = useMemo(() => seedBubbles, [])
  const simRef = useBubbleSimulation(seeds, bounds, isMobile)

  return (
    <>
      <AnimatedBackground />
      <Navigation />

      <main className="min-h-screen pt-20 md:pt-32 px-6 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-24">
            <div className="flex items-center gap-3 mb-5">
              <Briefcase className="w-6 h-6 text-primary" />
              <p className="text-sm text-muted-foreground">Experience</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-8 tracking-tight">
              Professional
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
              At the intersection of product, strategy, and people.
            </p>
          </div>

          {/* Bubble Field */}
          <div className="-mx-6 md:mx-0">
            {/* This is the mobile pan/zoom viewport */}
            <div
              ref={viewportRef}
              className="
                relative
                h-[82vh] md:h-[980px]
                overflow-auto md:overflow-visible
                overscroll-contain
                flex justify-center
                -mx-6 md:mx-0
              "
            >

              {/* This is the fixed-size universe (always 980x980) */}
              <div
                ref={fieldRef}
                style={{ width: FIELD_SIZE, height: FIELD_SIZE }}
                className="
                  relative
                  origin-center
                  rounded-[2.5rem]
                  border border-border/60
                  bg-gradient-to-b from-blue-500/6 via-transparent to-indigo-500/6
                  overflow-hidden
                  my-2 md:my-0
                "
              >
                {/* center glow */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="w-[520px] h-[520px] rounded-full bg-blue-500/8 blur-[120px]" />
                </div>

                {/* atmospheric light */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500/12 blur-3xl" />
                  <div className="absolute -bottom-28 -right-28 w-[34rem] h-[34rem] rounded-full bg-indigo-500/12 blur-3xl" />
                </div>

                {/* origin at center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {simRef.current.map((b) => {
                    const s = categoryStyle[b.category]

                    return (
                      <motion.button
                        key={b.id}
                        onClick={() => setActive(b)}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.985 }}
                        style={{ width: b.diameter, height: b.diameter }}
                        animate={{ x: b.x, y: b.y }}
                        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6 }}
                        className={`group absolute rounded-full border border-border/70 ${s.fill} ring-2 ${s.ring} ${s.hoverRing} shadow-sm hover:shadow-2xl ${s.glow} transition-[box-shadow,border-color,background-color] flex items-center justify-center text-center px-6 select-none`}
                        aria-label={b.label}
                      >
                        <span
                          style={computeLabelStyle(b.label, b.diameter)}
                          className="font-medium text-foreground text-center text-balance"
                        >
                          {b.label}
                        </span>

                        <span
                          className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full ${s.legendDot} shadow`}
                          aria-hidden="true"
                        />
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <LegendPill label="Full-time" category="fullTime" />
            <LegendPill label="Projects" category="projects" />
            <LegendPill label="Internships" category="internships" />
            <LegendPill label="Volunteering" category="volunteering" />
            <span className="ml-auto hidden md:inline">Click a bubble to explore details.</span>
            <span className="md:hidden">Tap a bubble to explore details.</span>
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 bg-black/45 backdrop-blur-lg z-50 flex items-center justify-center p-6"

          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 160, damping: 20 }}
              className="bg-card max-w-2xl w-full rounded-3xl p-10 relative border border-border"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X />
              </button>

              {active.content.kind === "company" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <h2 className="text-2xl font-medium text-foreground">{active.content.data.company}</h2>
                    <span className="text-xs text-muted-foreground">{active.content.data.location}</span>
                  </div>

                  {active.content.data.roles.map((role, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <p className="text-sm text-primary font-medium">{role.title}</p>
                        <span className="text-xs text-muted-foreground">{role.period}</span>
                      </div>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {role.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {active.content.kind === "project" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <h2 className="text-2xl font-medium text-foreground">
                      {active.content.data.name}
                    </h2>
                    <span className="text-xs text-muted-foreground">
                      {active.content.data.location}
                    </span>
                  </div>

                  {active.content.data.roles.map((role, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <p className="text-sm text-primary font-medium">
                          {role.title}
                        </p>
                        <span className="text-xs text-muted-foreground">
                          {role.period}
                        </span>
                      </div>

                      <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {role.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
