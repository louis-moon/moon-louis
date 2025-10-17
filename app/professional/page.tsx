// app/professional/page.tsx

import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Briefcase, Rocket } from "lucide-react"

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

type ProjectItem = {
  title: string
  period: string
  bullets: Bullet[]
}

const work: Company[] = [
  {
    company: "Green Golf Carbon",
    location: "Miami, Florida, United States • On-site",
    roles: [
      {
        title: "Chief Product Officer",
        type: "Full-time",
        period: "Oct 2025 – Present • 1 mo",
        bullets: [
          "Our custom method operates within turfgrass root zones to naturally improve soil quality while capturing atmospheric CO2; our primary focus is golf courses and sports fields where our product can be integrated within existing maintenance programs",
        ],
      },
      {
        title: "Chief of Staff",
        type: "Full-time",
        period: "Feb 2025 – Oct 2025 • 9 mos",
        bullets: [
          "Green Golf Carbon is focused on capturing carbon and improving turfgrass sustainability through enhanced rock weathering; served as Chief of Staff to the CEO to carry out go-to-market strategy, improve operational efficiency, and realize new projects",
        ],
      },
    ],
  },
  {
    company: "Boom",
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

const projects: ProjectItem[] = [
  {
    title: "Equity A1",
    period: "Dec 2021 – Mar 2024",
    bullets: [
      "Utilized 3D CNN encoder and RNN decoder technology to build a video-to-text model with logistics clients for integration; focused on industry-specific use cases including package delivery verification, employee monitoring, and driver safety checks",
      "Co-founded organization alongside Yale, Berkeley, and UChicago alums with a focus on product and software development; leveraged children's books to build a text-to-video model as a complementary solution using natural language processing tools",
    ],
  },
  {
    title: "Tsai CITY Accelerator",
    period: "Sep 2021 – Nov 2021",
    bullets: [
      "Participated in Tsai CITY's flagship venture accelerator; secured initial funding, mentorship, and strategic support",
      "Embedded within Yale's broader innovation pipeline; collaborated with peers and experts to refine concepts",
    ],
  },
  {
    title: "Tutoring for Tomorrow",
    period: "Aug 2015 – May 2021",
    bullets: [
      "Tripled sales to $3,000 a month, raised over $100,000 in 5 years, & expanded operations to 4 schools in Miami-Dade County as Executive Director of charitable education nonprofit after having previously served as tutor, Vice President, and President",
      "Personally raised over $5,000 as a tutor, incorporated organization as a 501(c)3 nonprofit, & recruited over 50 student-tutors; engaged with top lawyers and nonprofit education consultants to establish a board of directors and formalize business strategy",
    ],
  },
]

// Optional: make the Tsai card a bit narrower for visual balance
const cardWidthClass = (title: string) =>
  title === "Tsai CITY Accelerator" ? "w-[320px]" : "w-[450px]"

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

          {/* Work (company groups) */}
          <section className="mb-20">
            <h2 className="text-2xl font-light mb-8 text-foreground">Work</h2>
            <div className="space-y-6">
              {work.map((co) => (
                <section
                  key={co.company}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Company header shown once */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-medium text-foreground">{co.company}</h3>
                    <p className="text-xs text-muted-foreground">{co.location}</p>
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
          </section>

          {/* Projects */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Rocket className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Projects</h2>
            </div>
            <div className="relative">
              <div className="overflow-x-auto horizontal-scroll pb-6">
                <div className="flex gap-6 min-w-max">
                  {projects.map((project) => (
                    <div
                      key={project.title}
                      className={`${cardWidthClass(
                        project.title
                      )} flex-shrink-0 bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5 group`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          {project.period}
                        </span>
                      </div>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                        {project.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
