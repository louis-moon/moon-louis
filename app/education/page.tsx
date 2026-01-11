import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { GraduationCap, Award, BookOpen, Users, Library } from "lucide-react"

/* =========================
   DATA
========================= */

const educationTimeline = [
  {
    institution: "Yale University",
    degree: "Bachelor of Science",
    period: "2018 - 2023",
    focus: "Statistics & Data Science",
    description:
      "Senior Thesis: A Theoretical Framework for Implementing DCM with RNNs to Recover Brain Connectivity",
    highlights: [
      "Silliman College, Class of 2022 +1",
      "AEPi: Epsilon Upsilon Chapter, Eta Deuteron Class",
    ],
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
    period: "2017 - 2018",
    focus: "Introductory Mathematics",
    description:
      "Completed university-level coursework at Miami Dade College's Kendall Campus",
    highlights: [
      "Calculus and Analytic Geometry III",
      "Introduction to Differential Equations",
    ],
  },
  {
    institution: "Yale Young Global Scholars",
    degree: "Summer Program",
    period: "Jul 2016 - Aug 2016",
    focus: "Technology, Innovation & Entrepreneurship",
    description:
      "Academic enrichment and leadership training program for exceptional high school students",
    highlights: ["Jonathan Edwards College", "Outstanding Marks"],
  },
]

/**
 * Coursework (stored chronologically, rendered reverse-chronological)
 */
const coursework = [
  {
    term: "Fall 2018",
    courses: [
      { code: "ECON 115", title: "Introductory Microeconomics", instructors: ["P. Goldberg", "D. Morar", "S. Oster"] },
      { code: "ENGL 120", title: "Reading & Writing the Modern Essay", instructors: ["A. Sexton"] },
      { code: "MATH 222", title: "Linear Algebra with Applications", instructors: ["C. Uyanik"] },
      { code: "SPAN 243", title: "Advanced Spanish Grammar", instructors: ["M. Asensio-Manrique"] },
    ],
  },
  {
    term: "Spring 2019",
    courses: [
      { code: "ECON 159", title: "Game Theory", instructors: ["M. Halal"] },
      { code: "ENAS 151", title: "Multivariable Calculus for Engineers", instructors: ["B. Bennett"] },
      { code: "PHIL 126", title: "Intro to Modern Philosophy: Descartes to Kant", instructors: ["M. Della Rocca"] },
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
      { code: "S&DS 363", title: "Multivariate Statistics for Social Sciences", instructors: ["J. Reuning-Scherer"] },
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
    courses: [
      { code: "EDST S255", title: "Education and Housing Policy", instructors: ["R. Barnes"] },
    ],
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
      { code: "PSYC 258", title: "Computational Methods in Human Neuroscience", instructors: ["N. Turk-Browne"] },
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
      "Produced one investment pitch per semester for a student-managed fund overseeing ~$500,000",
      "Won best pitch presenting a small-cap industrial equity (+1000% since presentation, TGLS)",
    ],
  },
  {
    title: "Elmseed Enterprise Fund",
    role: "Project Head",
    bullets: [
      "Led consulting engagements for New Haven startups through structured advisory sessions",
      "Supported restaurant launches, food cart operations, and early-stage franchising strategy",
    ],
  },
  {
    title: "Volunteer Income Tax Assistance (VITA)",
    role: "Tax Preparer",
    bullets: [
      "Returned over $150,000 to low-income residents as an IRS-certified volunteer",
    ],
  },
  {
    title: "Dwight Hall at Yale",
    role: "Support Crew",
    bullets: [
      "Coordinated logistics for FOCUS on New Haven, a pre-orientation program serving 150 students",
    ],
  },
]

const testScores = [
  { test: "SAT", score: "1580/1600", detail: "780 EBRW, 800 Math" },
  { test: "SAT Essay", score: "24/24", detail: "8/8/8" },
  { test: "SAT Subject Tests", score: "2400/2400", detail: "Chemistry, Math II, US History" },
]

const apScores = [
  { subject: "World History", score: 5, year: 2015 },
  { subject: "Human Geography", score: 5, year: 2015 },
  { subject: "Chemistry", score: 4, year: 2016 },
  { subject: "Spanish Language", score: 5, year: 2016 },
  { subject: "Physics 1", score: 4, year: 2016 },
  { subject: "Calculus BC", score: 5, year: 2016 },
  { subject: "Calculus BC — AB Subscore", score: 5, year: 2016 },
  { subject: "European History", score: 4, year: 2016 },
  { subject: "Environmental Science", score: 5, year: 2017 },
  { subject: "Computer Science A", score: 4, year: 2017 },
  { subject: "United States History", score: 5, year: 2017 },
  { subject: "Physics C: Mechanics", score: 5, year: 2017 },
  { subject: "Physics C: Electricity & Magnetism", score: 5, year: 2017 },
  { subject: "English Language & Composition", score: 5, year: 2017 },
  { subject: "Statistics", score: 5, year: 2017 },
  { subject: "Art History", score: 3, year: 2018 },
  { subject: "Psychology", score: 4, year: 2018 },
  { subject: "Biology", score: 3, year: 2018 },
  { subject: "English Literature & Composition", score: 5, year: 2018 },
  { subject: "United States Government & Politics", score: 3, year: 2018 },
  { subject: "Macroeconomics", score: 5, year: 2018 },
  { subject: "Microeconomics", score: 5, year: 2018 },
]

const honors = [
  { title: "National Merit Scholar", organization: "National Merit Scholarship Corporation", year: "2018" },
  { title: "National Economics Challenge: State Champion, 9th Place Nationally", organization: "Council for Economic Education", year: "2017" },
  { title: "National Finance Challenge: State Champion, Semifinalist", organization: "Council for Economic Education", year: "2017" },
  { title: "Odyssey of the Mind: 2nd Place World Finals", organization: "Creative Competitions", year: "2017" },
  { title: "Envirothon: North American Qualifier, 1st Place State", organization: "National Conservation Foundation", year: "2017" },
]

const extracurriculars = [
  {
    title: "National Honor Society",
    role: "President",
    description:
      "Launched and coordinated community service initiatives with local and national partners.",
    tags: ["Community Service"],
  },
  {
    title: "Honor Council",
    role: "Co-President",
    description:
      "Led a student-run academic integrity body and formalized institutional honor procedures.",
    tags: ["Leadership"],
  },
  {
    title: "Science National Honor Society",
    role: "VP of Competitions",
    description:
      "Prepared competitive teams for regional and national science challenges.",
    tags: ["Science"],
  },
  {
    title: "Mu Alpha Theta",
    role: "VP of Tutoring",
    description:
      "Organized math tutoring infrastructure and competition preparation programs.",
    tags: ["Mathematics"],
  },
  {
    title: "Achieve Miami",
    role: "Big Buddy",
    description:
      "Mentored elementary school students and supported early literacy education.",
    tags: ["Volunteering"],
  },
]

/* =========================
   COMPONENT
========================= */

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
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              Education
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
              At the heart of interdisciplinary learning and long-term intellectual growth.
            </p>
          </div>

          {/* Timeline (vertical stack) */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Timeline</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationTimeline.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-1">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {edu.period}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">
                      {edu.focus}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-primary" />
                        <p className="text-xs text-muted-foreground">
                          {h}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coursework (horizontal) */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <Library className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground">Coursework</h2>
            </div>
            <p className="text-xs text-muted-foreground md:hidden mb-4">
              Swipe by term →
            </p>

            <div className="relative">
              <div className="overflow-x-auto horizontal-scroll pb-6">
                <div className="flex gap-6 min-w-max">
                  {[...coursework].reverse().map((block) => (
                    <div
                      key={block.term}
                      className="w-[320px] md:w-[420px] flex-shrink-0 bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5"
                    >
                      <h3 className="text-lg font-medium mb-4">
                        {block.term}
                      </h3>

                      <div className="space-y-3">
                        {block.courses.map((c) => (
                          <div
                            key={`${block.term}-${c.code}`}
                            className="rounded-lg border border-border bg-secondary p-3"
                          >
                            <p className="text-sm font-medium">
                              {c.code}: {c.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {c.instructors.join(", ")}
                            </p>
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

          {/* College Extracurriculars */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light">College Extracurriculars</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {collegeActivities.map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-primary mb-3">{item.role}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground">
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
              <h2 className="text-2xl font-light">Standardized Testing</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testScores.map((t, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <p className="text-sm text-muted-foreground">{t.test}</p>
                  <p className="text-3xl font-light text-primary">{t.score}</p>
                  <p className="text-xs text-muted-foreground">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AP Scores (horizontal) */}
          <div className="mb-20">
            <h2 className="text-2xl font-light mb-2">
              Advanced Placement Examinations
            </h2>
            <p className="text-xs text-muted-foreground md:hidden mb-4">
              Swipe by exam →
            </p>

            <div className="relative">
              <div className="overflow-x-auto horizontal-scroll pb-6">
                <div className="flex gap-4 min-w-max">
                  {apScores.map((ap, i) => (
                    <div
                      key={i}
                      className="w-[220px] flex-shrink-0 bg-card border border-border rounded-lg p-4"
                    >
                      <div className="flex justify-between mb-2">
                        <p className="text-sm font-medium">{ap.subject}</p>
                        <span className="text-lg font-medium">
                          {ap.score}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {ap.year}
                      </p>
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
              <h2 className="text-2xl font-light">High School Extracurriculars</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extracurriculars.map((e, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-medium">{e.title}</h3>
                  <p className="text-sm text-primary">{e.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{e.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {e.tags.map((t, j) => (
                      <span key={j} className="text-xs bg-secondary px-2 py-1 rounded-md border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honors */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light">Honors & Awards</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {honors.map((h, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-medium">{h.title}</h3>
                  <p className="text-sm text-muted-foreground">{h.organization}</p>
                  <p className="text-xs text-primary">{h.year}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
