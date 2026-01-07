// app/professional/page.tsx

import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Briefcase, HeartHandshake } from "lucide-react"

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

type VolunteerItem = {
  organization: string
  role: string
  period: string
  location: string
  bullets: Bullet[]
}

/**
 * 3 sections:
 * - Full-time: Green Golf Carbon, Rowan, Equity A1 (Equity A1 dates updated per request)
 * - Internships: Romero Capital, Yale Young Global Scholars, Florida Vocational Institute, + Tsai CITY Accelerator (placed here)
 * - Volunteering: BBBS (date updated), Yale Club of South Florida (date updated), Tutoring for Tomorrow (moved here)
 */

// FULL-TIME
const fullTime: Company[] = [
  {
    company: "Green Golf Carbon",
    location: "Miami, Florida, United States • On-site",
    roles: [
      {
        title: "Chief Product Officer",
        type: "Full-time",
        period: "Feb 2025 – Present • 1 yr",
        bullets: [
          "Originated go-to-market documents (e.g. business plan, pitch deck, project design document, project proposal) and strategy; built comprehensive database of 26k golf courses and ran SCEPTER model simulating carbon dioxide removal through ERW",
          "Building digital golf twin product: a real-time virtual replica of golf courses to save inputs, manage risk, and boost profitability; directly working hand in hand with founders to raise venture capital funding, expand team, and validate product development",
        ],
      },
    ],
  },
  {
    company: "Rowan",
    location: "Orlando, Florida, United States • Remote",
    roles: [
      {
        title: "Product Manager",
        type: "Full-time",
        period: "Mar 2024 – Feb 2025 • 1 yr",
        bullets: [
          "Established a semantic comparable business search query system to value businesses through comparable company analyses; formulated one version for the sell-side and one for the buy-side, bringing the time for process down from hours to seconds",
          "Led product development initiatives for the financial valuation product, focusing on core functionalities and user experience; created & maintained comprehensive product roadmap, prioritizing key features for MVP development and future iterations",
        ],
      },
    ],
  },
  // Equity A1 moved from Projects -> Full-time; dates updated per request.
  {
    company: "Equity A1",
    location: "",
    roles: [
      {
        title: "Co-founder",
        type: "Full-time",
        period: "Jan 2023 – Mar 2024",
        bullets: [
          "Utilized 3D CNN encoder and RNN decoder technology to build a video-to-text model with logistics clients for integration; focused on industry-specific use cases including package delivery verification, employee monitoring, and driver safety checks",
          "Co-founded organization alongside Yale, Berkeley, and UChicago alums with a focus on product and software development; leveraged children's books to build a text-to-video model as a complementary solution using natural language processing tools",
        ],
      },
    ],
  },
]

// INTERNSHIPS
const internships: Company[] = [
  // Tsai CITY Accelerator placed in Internships section (program/accelerator experience)
  {
    company: "Tsai CITY Accelerator",
    location: "Yale University • New Haven, Connecticut",
    roles: [
      {
        title: "Participant",
        type: "Accelerator",
        period: "Sep 2021 – Nov 2021",
        bullets: [
          "Participated in Tsai CITY's flagship venture accelerator; secured initial funding, mentorship, and strategic support",
          "Embedded within Yale's broader innovation pipeline; collaborated with peers and experts to refine concepts",
        ],
      },
    ],
  },
  {
    company: "Romero Capital",
    location: "New York, New York, United States • Remote",
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
    location: "New Haven, Connecticut, United States • On-site",
    roles: [
      {
        title: "Undergraduate Instructor",
        type: "Internship",
        period: "Jun 2019 – Aug 2019 • 3 mos",
        bullets: [
          "Designed and implemented teaching curriculum at Yale University summer program as one of 12 undergraduate instructors; taught Sustainable Development and Social Entrepreneurship and Politics, Law, & Economics to enhance academic breadth",
          "Delivered 4 unique seminars each session, orchestrated 3 simulated case studies, and oversaw post-lecture breakout sessions; mentored high school students, enhancing their academic capabilities and resulting in 6 successful capstone research projects",
        ],
      },
    ],
  },
  {
    company: "Florida Vocational Institute",
    location: "Miami, Florida, United States • On-site",
    roles: [
      {
        title: "Summer Intern",
        type: "Internship",
        period: "Jun 2018 – Aug 2018 • 3 mos",
        bullets: [
          "Set up 5 summer boot camps with 100 students to teach teenagers computer science for South Florida's TechHire initiative, a campaign to expand local technology sectors by establishing talent pipelines in underserved communities across the nation",
          "Modeled lead flows, managed marketing campaigns, and provided competitive analysis for the company's coding bootcamp; centered on search engine optimization along with improving click-through rates using CRM platforms and email marketing",
        ],
      },
    ],
  },
]

// VOLUNTEERING
const volunteering: VolunteerItem[] = [
  {
    organization: "Big Brothers Big Sisters of Miami",
    role: "Big Brother",
    period: "Oct 2025 – Present",
    location: "Miami, Florida",
    bullets: [
      "Mentor matched youth ages 5–14 through community-based program, meeting bi-monthly for structured, family-coordinated activities that promote personal growth, goal setting, and consistent developmental support",
    ],
  },
  {
    organization: "Yale Club of South Florida",
    role: "New Leaders Council",
    period: "Sep 2025 – Present",
    location: "Miami, Florida",
    bullets: [
      "Organize and lead alumni engagement initiatives for the Yale Club of South Florida, coordinating programs and small-group events that strengthen networking, community participation, and sustained alumni involvement",
    ],
  },
  // Tutoring for Tomorrow moved from Projects -> Volunteering (kept bullets as-is)
  {
    organization: "Tutoring for Tomorrow",
    role: "Executive Director (formerly Tutor, VP, President)",
    period: "Aug 2015 – May 2021",
    location: "Miami-Dade County, Florida",
    bullets: [
      "Tripled sales to $3,000 a month, raised over $100,000 in 5 years, & expanded operations to 4 schools in Miami-Dade County as Executive Director of charitable education nonprofit after having previously served as tutor, Vice President, and President",
      "Personally raised over $5,000 as a tutor, incorporated organization as a 501(c)3 nonprofit, & recruited over 50 student-tutors; engaged with top lawyers and nonprofit education consultants to establish a board of directors and formalize business strategy",
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
          {/* Company header shown once */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
            <h3 className="text-xl font-medium text-foreground">{co.company}</h3>
            {co.location ? <p className="text-xs text-muted-foreground">{co.location}</p> : null}
          </div>

          {/* Roles inside the company */}
          <div className="space-y-6">
            {co.roles.map((role, i) => (
              <div key={i} className="pt-4 border-t border-border first:pt-0 first:border-t-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <p className="text-sm text-primary">
                    {role.title} • {role.type}
                  </p>
                  <span className="text-xs text-muted-foreground">{role.period}</span>
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
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">Professional</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl text-pretty leading-relaxed">
              At the intersection of product, strategy, and people.
            </p>
          </div>

          {/* Full-time */}
          <section className="mb-20">
            <h2 className="text-2xl font-light mb-8 text-foreground">Full-time</h2>
            <CompanySection data={fullTime} />
          </section>

          {/* Internships */}
          <section className="mb-20">
            <h2 className="text-2xl font-light mb-8 text-foreground">Internships</h2>
            <CompanySection data={internships} />
          </section>

          {/* Volunteering */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <HeartHandshake className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Volunteering</h2>
            </div>

            <div className="space-y-6">
              {volunteering.map((v, i) => (
                <section
                  key={`${v.organization ?? v.role ?? "vol"}-${i}`}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-medium text-foreground">{v.organization}</h3>
                      <p className="text-sm text-primary">{v.role}</p>
                      {v.location ? <p className="text-xs text-muted-foreground">{v.location}</p> : null}
                    </div>
                    <span className="text-xs text-muted-foreground">{v.period}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    {v.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
