import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Briefcase, Rocket } from "lucide-react"

type Bullet = string

type WorkItem = {
  company: string
  role: string
  employment: string
  period: string
  location: string
  bullets: Bullet[]
}

type ProjectItem = {
  title: string
  period: string
  bullets: Bullet[]
}

const work: WorkItem[] = [
  {
    company: "Green Golf Carbon",
    role: "Chief Product Officer",
    employment: "Full-time",
    period: "Oct 2025 - Present • 1 mo",
    location: "Miami, Florida, United States • On-site",
    bullets: [
      "Our patented method operates within turfgrass root zones to naturally improve soil quality while capturing atmospheric CO2; our primary focus is golf courses and sports fields where our product can be integrated within existing maintenance programs",
      "Building digital golf twin product: a real-time virtual replica of golf courses to save inputs, manage risk, and boost profitability; directly working hand in hand with founders to raise venture capital funding, expand team, and validate product development",
    ],
  },
  {
    company: "Green Golf Carbon",
    role: "Chief of Staff",
    employment: "Full-time",
    period: "Feb 2025 - Oct 2025 • 9 mos",
    location: "Miami, Florida, United States • On-site",
    bullets: [
      "Green Golf Carbon is focused on capturing carbon and improving turfgrass sustainability through enhanced rock weathering; served as Chief of Staff to the CEO to carry out go-to-market strategy, improve operational efficiency and realize new projects",
      "Originated go-to-market documents (e.g. business plan, pitch deck, project design document, project proposal) and strategy; built comprehensive database of 26k golf courses and ran SCEPTER model simulating carbon dioxide removal through ERW",
    ],
  },
  {
    company: "Boom",
    role: "Product Manager",
    employment: "Contract",
    period: "Mar 2024 - Feb 2025 • 4 mos",
    location: "Orlando, Florida, United States • Remote",
    bullets: [
      "Established a semantic comparable business search query system to value businesses through comparable company analyses; formulated one version for the sell-side and one for the buy-side, reducing the process from hours to seconds",
      "Led product development for the financial valuation product, focusing on core functionality and UX; created and maintained a comprehensive product roadmap, prioritizing MVP features and future iterations",
    ],
  },
  {
    company: "Romero Capital",
    role: "Investment Analyst Intern",
    employment: "Internship",
    period: "Apr 2020 - Jun 2020 • 3 mos",
    location: "New York, New York, United States • Remote",
    bullets: [
      "Supported portfolio manager by performing due diligence and building valuation models; crafted scenario-based financial statements with schedules and spread industry comparables",
      "Performed DCF, trading comps, and precedent transaction analyses; utilized LBO and M&A models to compare valuation levels and surface insights",
    ],
  },
  {
    company: "Yale Young Global Scholars",
    role: "Undergraduate Instructor",
    employment: "Internship",
    period: "Jun 2019 - Aug 2019 • 3 mos",
    location: "New Haven, Connecticut, United States • On-site",
    bullets: [
      "Designed and implemented curriculum as one of 12 undergraduate instructors; taught Sustainable Development & Social Entrepreneurship and Politics, Law, & Economics",
      "Delivered 4 unique seminars per session, ran 3 simulated case studies, mentored students through post-lecture breakouts; advised 6 successful capstone research projects",
    ],
  },
  {
    company: "Florida Vocational Institute",
    role: "Marketing Intern",
    employment: "Internship",
    period: "Jun 2018 – Aug 2018 • 3 mos",
    location: "Miami, Florida, United States • On-site",
    bullets: [
      "Set up 5 summer boot camps (100 students) teaching computer science for South Florida’s TechHire initiative to expand local tech-sector talent pipelines",
      "Modeled lead flows, managed campaigns, and provided competitive analysis for the coding bootcamp; focused on SEO and improving CTRs via CRM and email marketing",
    ],
  },
]

const projects: ProjectItem[] = [
  {
    title: "Equity A1",
    period: "Dec 2021 - Mar 2024",
    bullets: [
      "Utilized 3D CNN encoder and RNN decoder technology to build a video-to-text model with logistics clients; focused on package delivery verification, employee monitoring, and driver safety checks",
      "Co-founded organization with Yale, Berkeley, and UChicago alums; leveraged children’s books to build a text-to-video model as a complementary solution using natural language processing tools",
    ],
  },
  {
    title: "Tutoring for Tomorrow",
    period: "Aug 2015 - May 2021",
    bullets: [
      "Tripled sales to $3,000/month, raised $100,000+ over 5 years, and expanded operations to 4 Miami-Dade schools as Executive Director after serving as tutor, VP, and President",
      "Personally raised $5,000+ as a tutor, incorporated the org as a 501(c)(3), and recruited 50+ student tutors; engaged lawyers and nonprofit education consultants to form a board and formalize strategy",
    ],
  },
]

export default function ProfessionalPage() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-in mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-primary" />
              <p className="text-sm text-muted-foreground">Professional Experience</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">Work & Projects</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl text-pretty leading-relaxed">
              Recent roles and projects.
            </p>
          </div>

          {/* Work Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-light mb-8 text-foreground">Work</h2>
            <div className="space-y-6">
              {work.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-medium text-foreground">{item.company}</h3>
                      <p className="text-sm text-primary">{item.role} • {item.employment}</p>
                    </div>
                    <div className="text-xs text-muted-foreground flex flex-col items-start md:items-end">
                      <span>{item.period}</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Rocket className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Projects</h2>
            </div>
            <div className="relative">
              <div className="overflow-x-auto horizontal-scroll pb-6">
                <div className="flex gap-6 min-w-max">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="w-[450px] flex-shrink-0 bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5 group"
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
