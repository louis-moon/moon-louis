import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { GraduationCap, Award, BookOpen, Users } from "lucide-react"

const educationTimeline = [
  {
    institution: "Yale University",
    degree: "Bachelor of Arts",
    period: "2018 - 2022",
    focus: "Statistics & Data Science",
    description:
      "Interdisciplinary learning focused on understanding how complex systems function.",
    highlights: [
      "Alpha Epsilon Pi",
      "Tsai CITY Accelerator",
    ],
  },
  {
    institution: "Miami Palmetto Senior High School",
    degree: "High School Diploma",
    period: "2014 - 2018",
    focus: "Advanced Placement & Dual Enrollment",
    description: "Rigorous academic program with extensive AP coursework and dual enrollment at Miami Dade College.",
    highlights: ["3rd in class of 673 students", "National Merit Scholar"],
  },
  {
    institution: "Miami Dade College",
    degree: "Dual Enrollment",
    period: "2017",
    focus: "Advanced Mathematics",
    description: "Completed Calculus III and Introduction to Differential Equations while in high school.",
    highlights: ["Calculus and Analytic Geometry III", "Introduction to Differential Equations"],
  },
  {
    institution: "Yale Young Global Scholars",
    degree: "Summer Program",
    period: "Jul 2016 - Aug 2016",
    focus: "Technology, Innovation & Entrepreneurship",
    description:
      "Innovation, venture thinking, and interdisciplinary collaboration.",
    highlights: ["Technology, Innovation & Entrepreneurship", "Jonathan Edwards College"],
  },
]

const testScores = [
  { test: "SAT", score: "1580", detail: "780 EBRW, 800 Math" },
  { test: "SAT Essay", score: "24/24", detail: "Perfect score" },
  { test: "SAT Subject Tests", score: "2400", detail: "800 Math II, Chemistry, US History" },
]

const apScores = [
  { subject: "Calculus BC", score: 5, year: 2016 },
  { subject: "World History", score: 5, year: 2015 },
  { subject: "Human Geography", score: 5, year: 2015 },
  { subject: "Spanish Language", score: 5, year: 2016 },
  { subject: "Environmental Science", score: 5, year: 2017 },
  { subject: "United States History", score: 5, year: 2017 },
  { subject: "Physics C Mechanics", score: 5, year: 2017 },
  { subject: "Physics C E&M", score: 5, year: 2017 },
  { subject: "English Language", score: 5, year: 2017 },
  { subject: "Statistics", score: 5, year: 2017 },
  { subject: "Chemistry", score: 4, year: 2016 },
  { subject: "Physics 1", score: 4, year: 2016 },
  { subject: "European History", score: 4, year: 2016 },
  { subject: "Computer Science A", score: 4, year: 2017 },
]

const honors = [
  {
    title: "National Economics Challenge: State Champion, 9th Place Nationally",
    organization: "Council for Economic Education",
    year: "2017",
  },
  {
    title: "National Personal Finance Challenge: State Champion, Semifinalist",
    organization: "National Economics Challenge",
    year: "2017",
  },
  {
    title: "Odyssey of the Mind: 2nd Place World Finals",
    organization: "Creative Competitions",
    year: "2017",
  },
  {
    title: "Envirothon: North American Qualifier, 1st Place State",
    organization: "National Conservation Foundation",
    year: "2017",
  },
  { title: "Johns Hopkins Book Award", organization: "Miami Palmetto Senior High School", year: "2017" },
]

// HS extracurriculars moved here (unchanged content, updated tag style)
const extracurriculars = [
  {
    title: "National Honor Society",
    role: "President",
    period: "2017 - 2018",
    description:
      "Launched community service projects with Feed My Starving Children, Chapman Partnership, and elementary schools.",
    tags: ["Community Service"],
  },
  {
    title: "Honor Council",
    role: "Co-President",
    period: "2016 - 2018",
    description: "Led student-run body addressing academic misconduct; formalized and promoted the honor code.",
    tags: ["Leadership"],
  },
  {
    title: "Science National Honor Society",
    role: "VP of Competitions",
    period: "2016 - 2018",
    description:
      "Prepared competitors for Lexus Eco Challenge, Envirothon, and Fairchild Challenge; team won 1st in Astronaut Challenge.",
    tags: ["Science"],
  },
  {
    title: "Mu Alpha Theta",
    role: "Vice President of Tutoring",
    period: "2015 - 2018",
    description:
      "Consolidated schoolwide math tutoring; organized competition practice; managed field trips as treasurer in 10th grade.",
    tags: ["Mathematics"],
  },
]

export default function EducationPage() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-in mb-16">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <p className="text-sm text-muted-foreground">Academic Journey</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">Education</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl text-pretty leading-relaxed">
              A commitment to interdisciplinary learning, combining economics, philosophy, and technology to understand
              complex systems and human behavior.
            </p>
          </div>

          {/* Academic Timeline */}
          <div className="mb-20">
            <h2 className="text-2xl font-light mb-8 text-foreground">Academic Timeline</h2>
            <div className="relative">
              <div className="overflow-x-auto horizontal-scroll pb-6">
                <div className="flex gap-6 min-w-max">
                  {educationTimeline.map((edu, index) => (
                    <div
                      key={index}
                      className="w-[450px] flex-shrink-0 bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5 group"
                    >
                      <div className="mb-4">
                        <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                          {edu.institution}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-1">{edu.degree}</p>
                        <p className="text-xs text-muted-foreground">{edu.period}</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm font-medium text-foreground mb-2">{edu.focus}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                      </div>
                      <div className="space-y-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <p className="text-xs text-muted-foreground">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Test Scores */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Standardized Testing</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testScores.map((test, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <p className="text-sm text-muted-foreground mb-2">{test.test}</p>
                  <p className="text-3xl font-light text-primary mb-2">{test.score}</p>
                  <p className="text-xs text-muted-foreground">{test.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AP Scores */}
          <div className="mb-20">
            <h2 className="text-2xl font-light mb-8 text-foreground">Advanced Placement Examinations</h2>
            <div className="relative">
              <div className="overflow-x-auto horizontal-scroll pb-6">
                <div className="flex gap-4 min-w-max">
                  {apScores.map((ap, index) => (
                    <div
                      key={index}
                      className="w-[200px] flex-shrink-0 bg-card border border-border rounded-lg p-4 hover:border-primary transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm font-medium text-foreground">{ap.subject}</p>
                        <span
                          className={`text-lg font-medium ${ap.score === 5 ? "text-primary" : "text-muted-foreground"}`}
                        >
                          {ap.score}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{ap.year}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Extracurriculars */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Extracurriculars</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extracurriculars.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-base font-medium group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary">{item.role}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{item.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs text-foreground bg-secondary px-2 py-1 rounded-md border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Honors & Awards</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {honors.map((honor, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5 group"
                >
                  <h3 className="text-base font-medium mb-2 group-hover:text-primary transition-colors">{honor.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{honor.organization}</p>
                  <p className="text-xs text-primary">{honor.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
