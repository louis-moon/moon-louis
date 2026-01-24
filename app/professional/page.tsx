// app/professional/page.tsx

import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Briefcase, GraduationCap, HeartHandshake, FolderKanban } from "lucide-react"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional — Louis Moon",
  description: "Turning ideas into real change",
}

type Bullet = string

type Role = {
  title: string
  type: string // retained for data integrity / future use
  period: string
  bullets: Bullet[]
}

type Company = {
  company: string
  location: string
  roles: Role[]
}

/**
 * Projects are NOT companies/employment entries.
 * We intentionally do NOT model or render any role/title/type line for projects.
 * We also intentionally do NOT include location for projects.
 */
type Project = {
  name: string
  period: string
  bullets: Bullet[]
}

// FULL-TIME (vertical stack)
const fullTime: Company[] = [
  {
    company: "Green Golf Carbon",
    location: "Miami, Florida",
    roles: [
      {
        title: "Chief Product Officer",
        type: "Full-time",
        period: "Feb 2025 – Present • 1 yr",
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
        period: "Jul 2024 – Feb 2025 • 8 mos",
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
        period: "Mar 2024 – Jun 2024 • 4 mos",
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
        period: "Jan 2023 – Mar 2024 • 1 yr 3 mos",
        bullets: [
          "Utilized 3D CNN encoder and RNN decoder technology to build a video-to-text model with logistics clients for integration; focused on industry-specific use cases including package delivery verification, employee monitoring, and driver safety checks",
          "Co-founded organization alongside Yale, Berkeley, and UChicago alums with a focus on product and software development; leveraged children's books to build a text-to-video model as a complementary solution using natural language processing tools",
        ],
      },
    ],
  },
]

// PROJECTS (horizontal scroll)
const projects: Project[] = [
  {
    name: "Tsai CITY Accelerator",
    period: "Sep 2021 – Nov 2021",
    bullets: [
      "Participated in Tsai CITY's flagship venture accelerator; secured initial funding, mentorship, and strategic support",
      "Embedded within Yale's broader innovation pipeline; collaborated with peers and experts to refine concepts",
    ],
  },
  {
    name: "Tutoring for Tomorrow",
    period: "Aug 2015 – May 2021",
    bullets: [
      "Tripled sales to $3,000 a month, raised over $100,000 in 5 years, and expanded operations to 4 schools in Miami-Dade County as Executive Director of charitable education nonprofit after having previously served as tutor, Vice President, and President",
      "Personally raised over $5,000 as a tutor, incorporated organization as a 501(c)(3) nonprofit, and recruited over 50 student-tutors; engaged with top lawyers and nonprofit education consultants to establish a board of directors and formalize business strategy",
    ],
  },
]

// INTERNSHIPS (vertical stack)
const internships: Company[] = [
  {
    company: "Romero Capital",
    location: "New York, New York",
    roles: [
      {
        title: "Investment Analyst Intern",
        type: "Internship",
        period: "Apr 2020 – Jun 2020 • 3 mos",
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
        period: "Jun 2019 – Aug 2019 • 3 mos",
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
        period: "Jun 2018 – Aug 2018 • 3 mos",
        bullets: [
          "Set up five summer boot camps with 100 students to teach teenagers computer science for South Florida's TechHire initiative, a campaign to expand local technology sectors by establishing talent pipelines in underserved communities across the nation",
          "Modeled lead flows, managed marketing campaigns, and provided competitive analysis for the company's coding bootcamp; centered on search engine optimization along with improving click-through rates using CRM platforms and email marketing",
        ],
      },
    ],
  },
]

// VOLUNTEERING (vertical stack)
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

function CompanySection({ data }: { data: Company[] }) {
  return (
    <div className="space-y-6">
      {data.map((co) => (
        <section
          key={co.company}
          className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
            <h3 className="text-xl font-medium text-foreground">{co.company}</h3>
            {co.location && (
              <p className="text-xs text-muted-foreground">{co.location}</p>
            )}
          </div>

          <div className="space-y-6">
            {co.roles.map((role, i) => (
              <div
                key={i}
                className="pt-4 border-t border-border first:pt-0 first:border-t-0"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <p className="text-sm text-primary">{role.title}</p>
                  <span className="text-xs text-muted-foreground">
                    {role.period}
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  {role.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function ProjectsCarousel({ data }: { data: Project[] }) {
  return (
    <div className="relative">
      <div className="-mx-6 px-6 overflow-x-auto horizontal-scroll pb-6">
        <div className="flex gap-6 min-w-max">
          {data.map((p) => (
            <section
              key={p.name}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5
                         w-[320px] sm:w-[420px] md:w-[520px] flex-shrink-0"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-medium text-foreground">{p.name}</h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {p.period}
                </span>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {p.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  )
}

export default function ProfessionalPage() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="animate-fade-in mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-primary" />
              <p className="text-sm text-muted-foreground">Experience</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              Professional
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl text-pretty leading-relaxed">
              At the intersection of product, strategy, and people.
            </p>
          </div>

          {/* Full-time */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Full-time</h2>
            </div>
            <CompanySection data={fullTime} />
          </section>

          {/* Projects */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-2">
              <FolderKanban className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Projects</h2>
            </div>
            <p className="text-xs text-muted-foreground md:hidden mb-4">
              Swipe to explore →
            </p>
            <ProjectsCarousel data={projects} />
          </section>

          {/* Internships */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Internships</h2>
            </div>
            <CompanySection data={internships} />
          </section>

          {/* Volunteering */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <HeartHandshake className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Volunteering</h2>
            </div>
            <CompanySection data={volunteering} />
          </section>
        </div>
      </main>
    </>
  )
}
