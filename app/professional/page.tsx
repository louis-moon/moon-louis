import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Briefcase, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Tutoring for Tomorrow",
    role: "President & Founder",
    period: "2016 - 2018",
    description:
      "Led nonprofit organization, doubled monthly fundraising to $2,000, donated $15,000 annually to honor societies and charities. Organized competition prep and tutoring programs at middle schools.",
    tags: ["Leadership", "Nonprofit", "Education"],
  },
  {
    title: "National Honor Society",
    role: "President",
    period: "2017 - 2018",
    description:
      "Served as treasurer as only junior on board. Launched community service projects with Feed My Starving Children, Chapman Partnership, and elementary schools.",
    tags: ["Leadership", "Community Service"],
  },
  {
    title: "Honor Council",
    role: "Co-President",
    period: "2016 - 2018",
    description:
      "Co-led student-run organization addressing academic misconduct. Formalized and promoted honor code throughout school and to faculty.",
    tags: ["Leadership", "Ethics"],
  },
  {
    title: "Science National Honor Society",
    role: "VP of Competitions",
    period: "2016 - 2018",
    description:
      "Prepared competitors for Lexus Eco Challenge, Envirothon, and Fairchild Challenge. Led team to 1st place in Astronaut Challenge.",
    tags: ["Science", "Competition"],
  },
  {
    title: "Mu Alpha Theta",
    role: "Vice President of Tutoring",
    period: "2015 - 2018",
    description:
      "Consolidated schoolwide math tutoring programs. Organized competition practices and handled field trips as treasurer in 10th grade.",
    tags: ["Mathematics", "Tutoring"],
  },
]

const projects = [
  {
    title: "Odyssey of the Mind",
    description: "World Finals - 2nd place, 5th place. Creative problem-solving competition with engineering focus.",
    period: "2008 - 2018",
    achievement: "Ranatra Fusca Creativity Award",
  },
  {
    title: "National Economics Challenge",
    description: "State Champion, 9th place nationally in semi-finals",
    period: "2017",
    achievement: "State Champion",
  },
  {
    title: "Envirothon",
    description: "North American Qualifier, 1st place state competition",
    period: "2017",
    achievement: "State Champion",
  },
  {
    title: "National Merit Semifinalist",
    description: "Recognized for academic excellence and standardized test performance",
    period: "2017",
    achievement: "Semifinalist",
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
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">Leadership & Impact</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl text-pretty leading-relaxed">
              A journey through leadership roles, community service, and competitive achievements that shaped my
              approach to problem-solving and collaboration.
            </p>
          </div>

          {/* Horizontal scrolling experience timeline */}
          <div className="mb-20">
            <h2 className="text-2xl font-light mb-8 text-foreground">Experience Timeline</h2>
            <div className="relative">
              <div className="overflow-x-auto horizontal-scroll pb-6">
                <div className="flex gap-6 min-w-max">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="w-[400px] flex-shrink-0 bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5 group"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-medium mb-1 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-primary font-medium">{exp.role}</p>
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs text-foreground bg-accent px-2 py-1 rounded-md border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Projects section with horizontal scroll */}
          <div>
            <h2 className="text-2xl font-light mb-8 text-foreground">Notable Projects & Achievements</h2>
            <div className="relative">
              <div className="overflow-x-auto horizontal-scroll pb-6">
                <div className="flex gap-6 min-w-max">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="w-[350px] flex-shrink-0 bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{project.period}</span>
                        <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                          {project.achievement}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
