import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { GraduationCap, Award, BookOpen, Users, Library } from "lucide-react"

const educationTimeline = [
  {
    institution: "Yale University",
    degree: "Bachelor of Science",
    period: "2018 - 2023",
    focus: "Statistics & Data Science",
    description: "Senior Thesis: A Theoretical Framework for Implementing DCM with RNNs to Recover Brain Connectivity",
    highlights: ["AEPi: Epsilon Upsilon Chapter, Eta Deuteron Class", "Yale Club of South Florida: New Leaders Council"],
  },
  {
    institution: "Miami Palmetto Senior High School",
    degree: "High School Diploma",
    period: "2014 - 2018",
    focus: "Summa Cum Laude",
    description:
      "National Honor Society President, Chopin Foundation, Greater Miami Youth Symphony, Jazz Band",
    highlights: ["3rd in class of 673 students", "Johns Hopkins Book Award"],
  },
  {
    institution: "Miami Dade College",
    degree: "Dual Enrollment",
    period: "2017-2018",
    focus: "Introductory Mathematics",
    description: "Completed university-level coursework at Miami Dade College's Kendall Campus",
    highlights: ["Calculus and Analytic Geometry III", "Introduction to Differential Equations"],
  },
  {
    institution: "Yale Young Global Scholars",
    degree: "Summer Program",
    period: "Jul 2016 - Aug 2016",
    focus: "Technology, Innovation & Entrepreneurship",
    description: "Academic enrichment and leadership training program for exceptional high school students",
    highlights: ["Jonathan Edwards College", "Outstanding Marks"],
  },
]

/**
 * Coursework (reverse chronological for readability & impact)
 * We reverse at render-time to keep source order human-friendly.
 */
const coursework = [
  {
    term: "Fall 2018",
    courses: [
      {
        code: "ECON 115",
        title: "Introductory Microeconomics",
        instructors: ["P. Goldberg", "D. Morar", "S. Oster"],
      },
      {
        code: "ENGL 120",
        title: "Reading & Writing the Modern Essay",
        instructors: ["A. Sexton"],
      },
      {
        code: "MATH 222",
        title: "Linear Algebra with Applications",
        instructors: ["C. Uyanik"],
      },
      {
        code: "SPAN 243",
        title: "Advanced Spanish Grammar",
        instructors: ["M. Asensio-Manrique"],
      },
    ],
  },
  {
    term: "Spring 2019",
    courses: [
      { code: "ECON 159", title: "Game Theory", instructors: ["M. Halal"] },
      { code: "ENAS 151", title: "Multivariable Calculus for Engineers", instructors: ["B. Bennett"] },
      {
        code: "PHIL 126",
        title: "Intro to Modern Philosophy: Descartes to Kant",
        instructors: ["M. Della Rocca"],
      },
      { code: "PSYC 110", title: "Introduction to Psychology", instructors: ["M. Chun", "N. Córdova Sánchez"] },
      { code: "S&DS 230", title: "Data Exploration and Analysis", instructors: ["J. Reuning-Scherer"] },
    ],
  },
  {
    term: "Fall 2019",
    courses: [
      { code: "ECON 117", title: "Intro Data Analysis & Econometrics", instructors: ["N. Ryan"] },
      { code: "ENAS 130", title: "Computing for Engineers & Scientists", instructors: ["B. Bennett"] },
      { code: "KREN 132", title: "Intermediate Korean for Advanced Learners I", instructors: ["S. Choi"] },
      { code: "S&DS 241", title: "Probability Theory", instructors: ["W. Lin"] },
    ],
  },
  {
    term: "Spring 2020",
    courses: [
      { code: "ASTR 130", title: "Origins and Search for Life in the Universe", instructors: ["D. Fischer"] },
      { code: "KREN 142", title: "Intermediate Korean for Advanced Learners II", instructors: ["A. Lee-Smith"] },
      { code: "S&DS 242", title: "Theory of Statistics", instructors: ["Z. Fan"] },
      {
        code: "S&DS 363",
        title: "Multivariate Statistics for Social Sciences",
        instructors: ["J. Reuning-Scherer"],
      },
    ],
  },
  {
    term: "Fall 2020",
    courses: [
      { code: "ARCG 161", title: "Art & Myth in Greek Antiquity", instructors: ["M. Gaifman"] },
      { code: "ECON 251", title: "Financial Economics", instructors: ["E. Davila"] },
      { code: "S&DS 312", title: "Linear Models", instructors: ["J. Emerson"] },
      { code: "S&DS 365", title: "Data Mining & Machine Learning", instructors: ["S. Negahban"] },
    ],
  },
  {
    term: "Spring 2021",
    courses: [
      { code: "ASTR 160", title: "Frontiers & Controversies in Astrophysics", instructors: ["M. Geha"] },
      { code: "ENGL 114", title: "Kid Power", instructors: ["H. Klemann"] },
      { code: "MATH 244", title: "Discrete Mathematics", instructors: ["A. Pohoata"] },
      { code: "S&DS 674", title: "Applied Spatial Statistics", instructors: ["T. Gregoire"] },
    ],
  },
  {
    term: "Summer 2021",
    courses: [{ code: "EDST S255", title: "Education and Housing Policy", instructors: ["R. Barnes"] }],
  },
  {
    term: "Summer 2022",
    courses: [
      { code: "ASTR S110E", title: "Planets and Stars", instructors: ["M. Faison"] },
      { code: "FILM S274", title: "Global Hollywood", instructors: ["X. Sawada"] },
    ],
  },
  {
    term: "Fall 2022",
    courses: [
      { code: "E&EB 250", title: "Biology of Terrestrial Arthropods", instructors: ["M. Wells"] },
      { code: "KREN 152", title: "Advanced Korean for Advanced Learners", instructors: ["A. Lee-Smith"] },
      { code: "MATH 244", title: "Discrete Mathematics", instructors: ["D. Douglas"] },
      { code: "PSYC 160", title: "The Human Brain", instructors: ["G. McCarthy"] },
    ],
  },
  {
    term: "Spring 2023",
    courses: [
      { code: "LING 227", title: "Language and Computation I", instructors: ["R. Frank"] },
      {
        code: "PSYC 258",
        title: "Computational Methods in Human Neuroscience",
        instructors: ["N. Turk-Browne"],
      },
      { code: "S&DS 361", title: "Data Analysis", instructors: ["B. Macdonald"] },
      { code: "S&DS 492", title: "Senior Project", instructors: ["H. Seo"] },
    ],
  },
]

const collegeActivities = [
  {
    title: "Yale Student Investment Group",
    role: "Investment Analyst",
    bullets: [
      "Produced 1 investment pitch each semester as part of a team for fund managing ~$500,000 on behalf of university endowment",
      "Won best pitch presenting small-cap industrial stock for Analyst Training Program conclusion, up over +1000% since (TGLS)",
    ],
  },
  {
    title: "Elmseed Enterprise Fund",
    role: "Project Head",
    bullets: [
      "Spearheaded consulting initiatives for local New Haven startups and provided strategic advice during weekly office hours",
      "Helped a Korean food cart operationalize, a Filipino outlet launch pop-ups, and a Mediterranean restaurant start franchising",
    ],
  },
  {
    title: "Volunteer Income Tax Assistance (VITA)",
    role: "Tax Preparer",
    bullets: [
      "Returned $150,000+ for 75 low-income New Haven residents by providing tax services as an IRS-certified volunteer",
    ],
  },
  {
    title: "Dwight Hall at Yale",
    role: "Support Crew",
    bullets: [
      "Organized logistics for FOCUS on New Haven, one of Yale's nine pre-orientation programs hosting 150 students",
    ],
  },
]

const testScores = [
  { test: "SAT", score: "1580/1600", detail: "780 EBRW, 800 Math" },
  { test: "SAT Essay", score: "24/24", detail: "8/8/8" },
  { test: "SAT Subject Tests", score: "2400/2400", detail: "Chemistry, Math II, US History" },
]

// Expanded AP list (chronological)
const apScores = [
  // 2015
  { subject: "World History", score: 5, year: 2015 },
  { subject: "Human Geography", score: 5, year: 2015 },

  // 2016
  { subject: "Chemistry", score: 4, year: 2016 },
  { subject: "Spanish Language", score: 5, year: 2016 },
  { subject: "Physics 1", score: 4, year: 2016 },
  { subject: "Calculus BC", score: 5, year: 2016 },
  { subject: "Calculus BC — AB Subscore", score: 5, year: 2016 },
  { subject: "European History", score: 4, year: 2016 },

  // 2017
  { subject: "Environmental Science", score: 5, year: 2017 },
  { subject: "Computer Science A", score: 4, year: 2017 },
  { subject: "United States History", score: 5, year: 2017 },
  { subject: "Physics C: Mechanics", score: 5, year: 2017 },
  { subject: "Physics C: Electricity & Magnetism", score: 5, year: 2017 },
  { subject: "English Language & Composition", score: 5, year: 2017 },
  { subject: "Statistics", score: 5, year: 2017 },

  // 2018
  { subject: "Art History", score: 3, year: 2018 },
  { subject: "Psychology", score: 4, year: 2018 },
  { subject: "Biology", score: 3, year: 2018 },
  { subject: "English Literature & Composition", score: 5, year: 2018 },
  { subject: "United States Government & Politics", score: 3, year: 2018 },
  { subject: "Macroeconomics", score: 5, year: 2018 },
  { subject: "Microeconomics", score: 5, year: 2018 },
]

const honors = [
  {
    title: "National Merit Scholar",
    organization: "National Merit Scholarship Corporation",
    year: "2018",
  },
  {
    title: "National Economics Challenge: State Champion, 9th Place Nationally",
    organization: "Council for Economic Education",
    year: "2017",
  },
  {
    title: "National Personal Finance Challenge: State Champion, Semifinalist",
    organization: "Council for Economic Education",
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
]

// High school extracurriculars (kept with gray tags)
const extracurriculars = [
  {
    title: "National Honor Society",
    role: "President",
    description:
      "Launched community service projects with Feed My Starving Children, Chapman Partnership, and elementary schools.",
    tags: ["Community Service"],
  },
  {
    title: "Honor Council",
    role: "Co-President",
    description: "Led student-run body addressing academic misconduct; formalized and promoted the honor code.",
    tags: ["Leadership"],
  },
  {
    title: "Science National Honor Society",
    role: "VP of Competitions",
    description:
      "Prepared competitors for Lexus Eco Challenge, Envirothon, and Fairchild Challenge; team won 1st in Astronaut Challenge.",
    tags: ["Science"],
  },
  {
    title: "Mu Alpha Theta",
    role: "VP of Tutoring",
    description:
      "Consolidated schoolwide math tutoring; organized competition practice; managed field trips as treasurer in 10th grade.",
    tags: ["Mathematics"],
  },
  {
    title: "Achieve Miami",
    role: "Big Buddy",
    description:
      "Mentored Little Buddies and taught literacy skills to kids at Goulds Elementary School",
    tags: ["Volunteering"],
  },
]

export default function EducationPage() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="animate-fade-in mb-16">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <p className="text-sm text-muted-foreground">Academics</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">Education</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl text-pretty leading-relaxed">
              At the heart of interdisciplinary learning and growth.
            </p>
          </div>

          {/* Academic Timeline (horizontal) */}
          <div className="mb-20">
            <h2 className="text-2xl font-light mb-8 text-foreground">Timeline</h2>
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

          {/* Coursework (reverse chronological, vertical) */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Library className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Coursework</h2>
            </div>

            <div className="space-y-6">
              {[...coursework].reverse().map((block) => (
                <div key={block.term} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-foreground">{block.term}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {block.courses.map((c) => (
                      <div
                        key={`${block.term}-${c.code}`}
                        className="rounded-lg border border-border bg-secondary p-4"
                      >
                        <p className="text-sm font-medium text-foreground">
                          {c.code}: {c.title}
                        </p>
                        {c.instructors.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-1">{c.instructors.join(", ")}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* College Extracurriculars */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">College Extracurriculars</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {collegeActivities.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-base font-medium group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary">{item.role}</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Standardized Testing */}
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

          {/* AP Scores (chronological horizontal scroll) */}
          <div className="mb-20">
            <h2 className="text-2xl font-light mb-8 text-foreground">Advanced Placement Examinations</h2>
            <div className="relative">
              <div className="overflow-x-auto horizontal-scroll pb-6">
                <div className="flex gap-4 min-w-max">
                  {apScores.map((ap, index) => (
                    <div
                      key={`${ap.subject}-${index}`}
                      className="w-[240px] flex-shrink-0 bg-card border border-border rounded-lg p-4 hover:border-primary transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm font-medium text-foreground">{ap.subject}</p>
                        <span
                          className={`text-lg font-medium ${
                            ap.score >= 5 ? "text-primary" : ap.score === 4 ? "text-foreground" : "text-muted-foreground"
                          }`}
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

          {/* High School Extracurriculars */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">High School Extracurriculars</h2>
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
