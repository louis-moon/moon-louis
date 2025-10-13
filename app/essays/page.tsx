import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { FileText, BookOpen } from "lucide-react"

const essays = [
  {
    title: "The Dead Shall Be Praised",
    subtitle: "ENGL 120 Essay (Professor Sexton)",
    date: "November 2018",
    excerpt:
      "Grove Street Cemetery’s Egyptian pylon bears the inscription “THE DEAD SHALL BE RAISED.” Inside, New Haven’s first chartered burial ground reframes death, memory, and the desire for permanence.",
    content: `The looming gateway to Grove Street Cemetery faces High Street. Inscribed on the lintel reads, “THE DEAD SHALL BE RAISED,” (1 Corinthians 15:52) to which Yale President Arthur Twining Hadley supposedly responded, “They certainly will be, if Yale needs the property.”

Architects Henry Austin and Hezekiah Augur designed this brownstone ancient Egyptian pylon during a wave of Egyptian Revival architecture that flourished from 1820-1850. In ancient Egypt, the two monumental towers on either side of the columns represented the hills between which the sun rose and set. While it’s uncertain whether Austin and Augur knew of this, they nevertheless chose a symbol of eternal renewal and resurrection to mark the entrance.

Prior to the establishment of Grove Street Cemetery, New Haven residents buried their dead on the Green, the central block of the town’s nine-square settlement plan. This changed when severe yellow fever epidemics devastated the city in 1794 and 1795: with almost five thousand buried over the past one hundred fifty years, the Green was much too crowded for any more skeletal occupants. New Haven residents and U.S. Senator James Hillhouse planned out a new graveyard on farmland to the north and two years later, Connecticut officially incorporated The New Burying Ground.

Over two hundred years later, the commotion of a bustling city and large university contrast the aura of peace coming from within the cemetery. An eight-foot brownstone wall surrounds three sides of the graveyard and obstructs everything from view, save a few trees and the most massive of headstones. Should you venture down Grove Street, a wrought iron fence provides a view into the graveyard. Immediately beyond the entrance lies a brick Victorian office topped with steep roofs that once served as a chapel so that service could be held in inclement weather; its sole decoration is a gilded butterfly symbolizing the soul’s release from the body.

The cemetery greets me through its vast scale, with a seemingly infinite number of gray headstones populating the whopping eighteen acres. The grass is neatly trimmed and ancient oak trees shade the paths, which are wide enough for cars or horse-drawn carriages to pass through. Each road is named after a tree: Maple, Magnolia, and Cedar Avenue are each lined with their titular species – Hillhouse prized trees and initiated the extensive plantings that would give New Haven the nickname of “Elm City.”

As I look beyond the wall, buildings like the Center for Innovation and Design, Benjamin Franklin College, and Yale Health provide a refreshing contrast of color and style to the graveyard’s beautiful, albeit monotonous green and gray. American flags honor veterans’ headstones and wilting flowers adorn the walkways. A low hum can be heard in the distance as two men work diligently on maintaining the property amidst freezing temperatures; another man can be seen sitting alone in front of a grave marker, slowly taking drags of his cigarette.

One tourist carries a DSLR camera and takes photos of the headstones. “I’m actually from Ireland – my wife left to go shopping but I thought this place looked more interesting. It’s very beautiful, I was just looking at the different ethnicities in the names.” His name is Killian, and he snaps a photo of me before we part ways. Another older visitor dressed in a suit strolls around with his daughter. I ask him why he’s here, to which he responds, “It’s very peaceful. Graveyards are a place for introspection and reflection – we’re all going to end up in one, or something like it, one day.” As I listen to birds chirping freely, I agree with his sentiment.

The very notion of a cemetery, not just the first chartered burial ground in the United States, is revolutionary in itself. Some tens of thousands of years ago, humans stumbled upon the dual emergence of symbols and sentience due to the increasing complexity and growth of the brain, coupled with vocal cords. With these tools came the development of language and eventually, the creation of a symbolic reality. Mortuary rituals fit into this newfound ability to reminisce about the past and envision the future, to collaborate and think abstractly. Although there is no way for anthropologists to research language in this regard, graveyards leave behind a literal fossil to study.

Burials reflect a deeply spiritual and meaningful aspect of humans mourning past deaths and imagining their own in the future. And for a long time, deliberate interment was thought to be a practice unique to Homo sapiens, one of many factors seeming to distinguish us from other animals. However, fossils discovered in 2013 evidenced that Homo naledi also carried out burials, even though their brains were half as small as ours. Pinpointing what exactly separates us from the rest of nature is surprisingly difficult.

As the first private nonprofit cemetery in the world, Grove Street Cemetery redefined graveyards from the ground down. Whereas bodies used to be thrown into the ground wherever space was available, sections of the cemetery were allocated for certain families. Beyond this, land was specifically designated for church parishioners, out of town strangers, the indigent, persons of color, and Yale College.

These divisions become immediately apparent when touring the area. Plots like Number 2 Cedar Avenue are enclosed by an iron fence and host the family of Benjamin Silliman, a prominent American chemist and Yalie. Luminaries such as Roger Sherman, Noah Webster, and Eli Whitney exhibit well-crafted, elegant headstones; lofty obelisks seem to reach for the heavens, continuing the Egyptian motif found in the pylon.

On the other hand, comparatively tiny stone grave markers moved from the Green can be found lined up against the back wall in alphabetical order. No bigger than 2’ x 1’, they are the oldest relics that can be found here, dating back to the seventeenth century. Wear and tear has rendered some illegible, and one looks more like a rock than an ornament. Another simply reads, “IH AGE 79 1683,” in what could pass for a child’s handwriting, with the word AGE sloping diagonally to avoid running out of space. Inscriptions recall the deaths of everyone from 5-week-old William to 93-year-old Decon.

Stone obviously isn’t permanent, but on the scale of a human life, it is – our lives are too short for us to perceive the constant movement of plate tectonics and mountains eroding. Consequently, we build monuments like the Great Pyramids and carve statues out of stone because they will outlast us, effectively achieving immortality. Modern constructions of metal and glass are nothing more than stone refined through human ingenuity – collectively, they anchor a sense of continuity and permanence, the kind that we wish for ourselves. One headstone reads, “We all yearn for transcendence, for immortal life, to be part of the future.”

Looking at the grave markers, I realize their decay aligns with the enduring truth that like humans, stone is transitory. According to estimates by demographic researchers at the Population Reference Bureau, roughly 100 billion people have died before us. Yet, death stalks us in a trivial, ignorable way: an expiration date far in the future engenders a false sense of permanence and lulls us into complacency. There is always tomorrow, so why start today?

The opposite idea, that our days are numbered, is emboldening. Although failures and humiliations will be forgotten, great achievements may not. As I leave, I find a bench marked with the words of Pericles: “What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others.” From the fallen soldiers to the fourteen Yale presidents who lie here, the people interred at Grove Street Cemetery are immortal in this sense.

I have never seen leaves change color first-hand. I have seen red and orange leaves while traveling, but green leaves are a constant in my mind, like stone. Yet, for the first time, I am seeing the leaves change color in the cemetery.`,
    tags: ["Place Writing", "History", "Reflection"],
  },
  {
    title: "The Lessons We Take from Obstacles",
    subtitle: "Common Application Personal Essay",
    date: "November 2017",
    excerpt:
      "For eight glacially slow minutes, we performed our skit, featuring everything from pneumatic wings to a fully functional go-kart built from scratch. It was our fifth time at World Finals and in that stadium, all I could think about was how bizarre it was to watch your work blow up in front of you, literally.",
    content: `I embarked on my venture with Odyssey of the Mind (OM) when I was in first grade. Alongside six teammates, I harbored a certain naiveté that made the whole experience seem more like glorified playtime than a creative problem-solving competition. We worked as diligently as our sub-four-foot-tall bodies would enable us and struggled to work with anything that weighed more than five pounds. Power tools were undoubtedly off limits per our parents' safety concerns, not that our juvenile hands could handle them anyway.

Over the years, we fashioned elaborate solutions to quirky challenges, producing a diverse selection of vehicles that could catalyze chemical reactions or disassemble and reassemble: a bootleg Transformers of sorts. I felt fiery nuts of steel drop into my lap and burn holes through my dearest pair of navy blue Nike basketball shorts. Neodymium magnets worked in tandem with rat traps to crush my hands: all part of the learning process. Whereas I had once been shy and trembled at the snap of dinky mousetraps, I now found myself featuring as a rapping grandma in our music videos and adrenalized to sit on exploding boxes.

My sophomore year marked the team's tenth anniversary: only three of the seven original team members remained, myself included, and whether or not to continue was a legitimate question. After collectively agreeing to another year, Home Depot became my third home again, right behind the coach's. Weekends meant OM work marathons wherein I could spend four hours testing the viability of a solution to meet problem limitations, just to spectacularly fail in a matter of seconds.

The engineering component of OM had largely been handled by my best friend and me every year, and this time was no different. Without a doubt, the single large car was the most difficult element of the problem we chose. I applied what little physics knowledge I possessed to get the job done; pressurized air tanks blew up in our faces and batteries shorted, but we eventually achieved our final product. The car worked in sync with an imaginative storyline to win us first place at the regional and state tournament, the latter of which would take us to Iowa for World Finals.

Even in the minutes leading up to the finale, our vehicle displayed undying loyalty to Murphy's law: the batteries exploded and set off the fire alarm, leaving bystanders stuck in the elevator and us with nothing but the ultimate stress test. After hurriedly repairing the flaming car, we came, we saw, but failed to conquer, placing eleventh overall. It was utter disillusionment to see that hundreds of hours of work was nothing but charcoal, crumbling into a pile of ashes rather than the diamond we had hoped to produce. I could all but hear the world laughing in my face, saying, "Your best wasn't good enough!"

Although blunt and severe, the realization that I couldn't have done better was liberating: in the face of the universe's stubborn silence, words like "deserve" and "fair" become indistinct – all we can do is constantly strive for something better. And there is real meaning and value to be created by pursuing projects in spite of, rather than because of incentives. Over the past decade, working with everything from amphibious cars to a makeshift eighty-gallon water trough shaped us into calculating risk-takers, ready to adapt to whatever challenge the future had to offer.

We returned to World Finals the following year to place second overall, and I still wear those navy blue shorts today.`,
    tags: ["Personal Growth", "Resilience", "Engineering"],
  },
  {
    title: "Why Yale",
    subtitle: "Yale Supplemental Essay",
    date: "November 2017",
    excerpt:
      "During my time at Yale Young Global Scholars, I befriended Yalies who were world debate champions and self-made executive directors, yet whose resumes alone would fail to reveal their defining qualities as sincere, hilarious people.",
    content: `During my time at Yale Young Global Scholars, I befriended Yalies who were world debate champions and self-made executive directors, yet whose resumes alone would fail to reveal their defining qualities as sincere, hilarious people. Likewise, Yale's strength as an academic institution is self-evident, yet it is the primary focus on community and genuine learning that engenders a unanimous appreciation valuing Yale's education over its degrees.

An alumnus on Quora writes, "Yale presents majors as areas to indulge intellectual and academic curiosity, not as vocational training." The same reason underlying the lack of an acting major, offering Theater Studies instead, emboldens me: Yale strives to offer a holistic experience, not a means to a career – it seeks to enrich, not to facilitate getting rich.`,
    tags: ["Education", "Philosophy", "Values"],
  },
]

export default function EssaysPage() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-primary" />
              <p className="text-sm text-muted-foreground">Written Work</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">Essays</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl text-pretty leading-relaxed">
              Reflections on personal growth, academic pursuits, and places that shaped my perspective on
              learning, leadership, and life.
            </p>
          </div>

          <div className="space-y-8">
            {essays.map((essay, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h2 className="text-2xl font-medium mb-1 group-hover:text-primary transition-colors">
                      {essay.title}
                    </h2>
                    <p className="text-sm text-primary mb-2">{essay.subtitle}</p>
                    <p className="text-xs text-muted-foreground">{essay.date}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-muted-foreground leading-relaxed italic">{essay.excerpt}</p>
                </div>

                <details className="group/details">
                  <summary className="cursor-pointer text-sm text-primary hover:text-primary/80 transition-colors list-none flex items-center gap-2">
                    <span>Read full essay</span>
                    <span className="text-xs">→</span>
                  </summary>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="prose prose-sm max-w-none">
                      {essay.content.split("\n\n").map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </details>

                <div className="flex flex-wrap gap-2 mt-4">
                  {essay.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs text-foreground bg-secondary px-3 py-1 rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
