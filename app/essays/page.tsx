import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { FileText, BookOpen } from "lucide-react"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essays — Louis Moon",
  description: "Reflections on growth and change",
};

const essays = [
  {
    title: "Structure and Freedom",
    subtitle: "Open Notes",
    date: "Jan 2026",
    tags: ["Finances", "Health", "Social"],
    excerpt:
      "Freedom isn’t the absence of limits, but the way we live within them—across money, health, and relationships, this note explores how meaning emerges not from escape, but from choosing constraints well.",
    content: `
On two opposite ends of a spectrum lie freedom and structure: freedom being the ability and means to pursue the life you want to live, and structure being the constraints opposing unrestrained growth imposed by both environment and self. Not too long ago, in 1800, 81% of people worldwide lived in poverty (by a $1.90-per-day standard). By 1990, only 44% were in poverty, and today, that figure lies at under 10%.

This newfound upward mobility, allowed by globalization and technological progress, has opened the doors to optionality, with people having the ability to choose what kinds of food they want to eat, what kinds of clothes they want to wear, what kinds of jobs they want to pursue, etc. And herein lies the crux of modern freedom--choice in a world of relative abundance.

What ties people down in "modern freedom" can be broken down into three broad categories: financial, health, and social obligations. Financially, we are limited by our income and long-term asset holdings. Still, I find it very common to come across people like the following example on Reddit:

"How do HENRYs afford to start a family in NYC?

Happy 2026! We are a 37M/28F DINK couple in NYC interested in starting a family, but feel like we don't have any good options for how to proceed. I'm interested in what other HENRYs think about starting a family in VHCOL while staying on FIRE track (or maybe giving up on or delaying FIRE to have kids). Any advice would be appreciated.

Here are our 2025 stats for background.

2025 Income:

P1 Day Job: Senior DS in Big Tech, Target TC $425k

P2 Day Job: Senior Associate at D-tier IB, Target TC $340k

Total income: ~$920k (P1 RSUs are up, P2 vested a one-time stock grant, we also have a growing side business that netted almost $13k this year. Honestly I'd say our reliable income is only ~$700k/year if I don't get laid off).

...

So yeah, no good options. How do people actually start a family here? None of this makes any financial or logical sense and pretty much every choice is terrible for quality of life. At this rate we might just do an IVF freeze-all and try again in 4-5 years. At that point we should be almost FI with a bigger nest egg and could find some low stress remote jobs to start a family anywhere without worrying about commuting into NYC. However, I don't really want to wait for my 40s to become a dad and I see plenty of HE couples in the FIRE subs with 2 school aged kids and $5-10m net worth by their late 40s. Do you just have to give up on sending your kids to a top school to FIRE with kids?"

This essentially translates to a couple making close to $1m in annual income being unable to find the means to afford kids in New York City--which, yes, is a very high cost-of-living area, but as one commenter notes,

"...Maybe you’re not ready for a kid if you can’t prioritize it financially. It can be that simple.

or another:

"You are so out of touch with reality. It’s not even worth addressing."

I hear people in their late careers (mid-50s) entertain the idea of calculating how much money they'll need for retirement: "Oh, maybe $20m will do?"

All of this serves to illustrate that for some people, enough is never enough--because their conception of freedom is defined by avoiding loss or constraint--while others with far less at least financially, are able to find meaning, value, and fulfillment in their day-to-day lives by treating money not as a game score to maximize or a cap to clear, but rather as an enabling structure that provides the base upon which a life can be deliberately built. This distinction matters, because money derives its value from the life it enables, not from its accumulation in isolation. I think it's important to note that your assets don't transfer to the afterlife.

Equally as important as financial constraints are health ones. 6 out of 10 Americans have 1 chronic disease and 4 out of 10 have 2 or more chronic diseases that account for 90% of the $4.5 trillion annual health care costs in the nation.

A lot of us are blessed as children to grow up without any life-threatening health issues, but the older we get, the more we see people who unfortunately fall victim to (chronic) illnesses, whether that be in our family, friend group, professional network, on social media, or the like.

By definition, the inability to permanently resolve these constraints on our lives hampers our long-term agency. But by being cognizant and health-literate, there are ways to be prepared and dramatically increase our capacity to live fulfilling lives health-wise. For example,

"1 out of 2 post-menopausal women will break a bone due to osteoporosis or loss of bone mineral density, and about 20% of women will not survive that year after they break a bone. While this may sound bad, one important way that women can improve their bone density and muscle mass is to resistance train regularly, whether that's at the gym or even at home."

- @trishapasrichamd (Instagram)

Another example:

"Untreated hearing loss in older adults has been linked to faster cognitive decline and increased dementia risk. Why? Because when the brain has to work overtime to hear, it takes a toll on memory, focus, and mental clarity. Add in social isolation, and the impact is even greater.

But here's the good news: Treating hearing loss may actually slow down cognitive decline. Hearing aids. Screenings. Awareness. These are small steps that protect big things--like brain function, independence, and quality of life."

- @ladyspincedoc (TikTok)

Health and medical challenges impose real and often irreversible constraints on freedom; however, awareness and deliberate management of these constraints can significantly preserve your health, maybe even making you healthier than you would have been otherwise.

And finally, social obligations represent perhaps the clearest expression of the tension between freedom and structure, and can be broadly categorized into three groups: familial, friendships, and romantic relationships.

I used to believe there was an inherent social contract embedded in having children--one that entailed being willing to do anything and everything they might need throughout their lives, given that you bring them into the world without their consent, in some sense. In contrast, I felt that the obligation to a partner was weaker, as the moral asymmetry seemed less pronounced in my eyes.

At one point, I was told my life seemed to be in a good place and was asked what problems I had, so I wrote them all down--four in the short-term and four in the long-term. What struck me wasn't the content of the list, but how short it was. With the last problem being having kids or starting a family, it felt as though my life would, in a way, end there, as my focus would shift almost entirely toward theirs.

All of this made me wonder whether there was more to it--whether my ultimate priority should always be others in the long run, or whether it should be myself, or at least something other than children alone, such as a partner or even work. In other words, I began to question whether meaning or freedom necessarily requires the surrender of self-direction, or whether there is room for commitment without complete self-erasure. 

A while back, I asked my mother if she ever thinks about how life might have been different had she attended her dream school in Korea. To my surprise, she said yes--about how she might have been an architect and had her own life and dream career path, instead of being primarily a wife and mother first.

For me, it isn't really about choosing kids versus a partner versus something else. Rather, it's about the fear of losing oneself entirely within any given role, and whether devotion must come at the cost of self-erasure. There is something undeniably beautiful about loving others and placing them above yourself--but when taken to its extreme, that same impulse can quietly hollow out the one doing the giving.

I think this is where many people misinterpret ideas like self-interest, often appealing to tradition, faith, or ideology as justification. A shallow reading of economic thinking treats self-interest as a law of nature and, therefore, as an unquestioned good. But that framing misses the point. We see this play out financially, where accumulation becomes an end in itself, and physically, where neglect or complacency erodes long-term agency in the name of short-term comfort. The goal is not unrestrained self-interest, just as it is not total self-sacrifice or freedom. Meaning emerges somewhere in between--where freedom and structure coexist, and where individuals are able to choose commitments that support, rather than consume, the life they are meant to serve.
`,
  },
  {
    title: "Covenant",
    subtitle: "Reflection #6",
    date: "Dec 2025",
    tags: ["Institutions", "Society", "Technology"],
    excerpt:
      "A reflection on institutions, the internet, and polarization—how our systems shape the way we see each other, and why meaning and agency have to scale beyond the individual.",
    content: `
There’s a funny book I think of every now and then called The End of History, published by Francis Fukuyama in 1992, and it essentially states that history ends happily ever after in liberal democracy. Okay, maybe not quite exactly, but I think that’s a funny interpretation of it as it reflects how optimistic people were at the end of the 20th century.

I think about institutions a lot—what role they serve in our day-to-day and broader lives, and how everyone says that they are evil. This may be true, yet I think they serve a purpose in the world we live in. Yes, they are flawed and sometimes predatory, but they are also the only tool humans have ever invented for the long-term transmission of meaning. And I think that we should leverage this for good rather than solely be affected by the negative aspects.

One part of the conservative faith I admire is the adherence to traditions. Not the broader theme of tradition itself, but celebrating even small things like birthdays, anniversaries, holidays, etc. I mean, it doesn’t actually matter that it’s been x years since you were born (the Earth isn’t in any meaningful position relative to the sun spatially), but the meaning is in what we attribute to it.

Growing up with the Internet, I got to see how my peers grew up on it as well and how we differed from our parents and even those just a few years older than us. Now, it’s incredible to see how we (strangers) no longer see each other as human anymore.

The Internet gave us infinite connection without community. I’ve seen this highlighted by people talking to chatbots and getting psychosis; people dating AI girlfriends; and hate comments everywhere—would you actually say that in real life? Probably not, I assume.

I mean even dating has been commodified. Of all things, this seems to be the most hilariously tragic, that we are swiping for love when we should definitely be meeting in person.

In tandem with the rise of the Internet, there has been widespread hyperpolarization since globalization peaked in the 2000s: Brexit, Trump’s 2016 victory, South Korea, pretty much everywhere and this all culminated in the COVID pandemic around 2020.

There has also been a massive transfer of wealth that happened during COVID that is not talked about enough, I think; yes, at the corporate level, but also at the individual, which has led to the K-shaped economy we see today.

And perhaps the most interesting to me is this massive shift to the right politically, at least in the United States, for the group of Gen Z young adults who experienced the pandemic in high school as opposed to the rest of the cohort who experienced it in college. Not too long ago, this generation was hailed as a liberal bastion that would continue in future generations. The end of history did not come about, decidedly so, and the world is hard to predict.

Yet, when I talk to people in real life, no matter what background they’re from, I don’t tangibly feel any of the animosity I see displayed so fervently online. Especially in 1:1 settings, people are more likely than not to be civil. Nobody’s going to antagonize someone else right off the bat of meeting them for no reason.

So, where do we most interact with people? In institutions: our schools, families, churches, etc. And when our institutions begin to fail us, that’s when the fabric of our society begins to collapse. We see this with systemic school failures, corruption in the church, dispersion of the nuclear family with divorce rates going up, etc.

To me, it seems obvious that humans aren’t broken—our coordination mechanisms are. Institutions are those mechanisms, and when they fail, everything else starts failing downstream.

Similar to institutions exist systems, and the purpose of a system is what it does: capitalism doesn’t reward connection, it rewards consumption; politics don’t reward nuance, they reward outrage; and online platforms don’t reward empathy, they reward engagement.

Let’s consider the problem of phone usage / screen time for a moment. Yes, in theory everyone should have unlimited freedom and be able to make decisions for themselves. However, some people have certain (addictive) tendencies: to drugs, drinking, their phones, gambling, etc.

Side note: I think it’s hilarious how the US is just allowed to advertise prescription medications on TV, and the national lottery is known to have by far some of the worst odds yet the government freely (and heavily) advertises that as well. As a basketball fan, all I’ll say is I have been just inundated with sports betting ads over the past few years, and now prediction markets are everywhere too.

Systems don’t care for us by default—they only care for outputs. And just as a parent has a responsibility to take care of and educate their children on certain things, I believe the government has a fiduciary responsibility as well. Freedom is not enough without protection, and individual choice is not enough without collective guardrails.

I go back and forth thinking about how resilient the systems and institutions we create are. Sometimes remarkably so, sometimes I have outright worry at their potential collapse.

But are “people” necessarily evil? Are we not all to some extent trapped in the context of our developmental, historical, and cultural context? Or is it that non-actors in systems and institutions sometimes (maybe often) yield bad outcomes. Of course, it’s easiest for us to direct our anger and frustration at our peers, though.

So what’s the answer? I don’t know. But I think about the following… if institutions transmit meaning across time, how do we design ones worth inheriting?

Meaning and agency are not just personal virtues—they are social obligations. I think doctors have their oath to do no harm because all life is sacred. And maybe as hard as it can be, we should strive to treat each other with kindness and meet each other where we are. And slowly hope that we can expect this of our peers as well.
`,
  },
  {
    title: "Praxis",
    subtitle: "Reflection #5",
    date: "Dec 2025",
    tags: ["Action", "Agency", "Discipline"],
    excerpt:
      "Praxis is where belief hardens into habit—through faster decisions, intentional preparation, and repeated action, we turn abstract freedom into a life we’re actively shaping.",
    content: `
Meaning, identity, consciousness—these are useless without praxis, as life is shaped less by what we believe than by what we actually do. Praxis is philosophy translated into action and serves as the bridge between intention and action.

Decision-Making as a Discipline

One of the strongest predictors of founders’ success in the startup world is their speed of decision-making. One heuristic that dominates my life is the idea of one-way vs. two-way doors: if a decision is hard to reverse (one-way door), you should deliberate on it for a decent amount of time as opposed to a two-way door/decision where you can just go through with it with low risk as it’s easily reversible.

What I’ll add to that is that most, if not all, decisions in life are actually two-way doors. We treat reversible decisions like irreversible ones when instead we should make decisions faster and iterate. We can always revert if needed—agility > perfection.

Roadmapping and Preparation

Rather than rushing into things, we should think deeply about the task at hand and what we want to accomplish. It’s better to take your time and put a disproportionate amount of time and effort into preparation; planning is half the battle, execution is just going through the motions of what you practiced.

Volume > Study

The player who shoots one free kick is better at it than the one who watched a video of 1,000 free kicks. There is a famous experiment where a professor assigns a photography task in two batches: one group is told to go for volume, while the other is just told to take one best picture. The volume group was dramatically better in overall quality and this goes to show that volume always wins—shoot your shot many times and get familiar with the task at hand.

Wants and Needs

To some degree, we are all trapped in the context of our upbringing, developmentally and socially/culturally. However, we should still strive to understand why we want what we want and differentiate this from what we actually need.

“Anxiety is the dizziness of freedom,” and there are two traps I want to note here. 1) You can be lost in the infinite, essentially ‘analysis paralysis,’ where one is overwhelmed by the number of possible outcomes and choices they can make. And 2) you can be lost in the finite, where we simply assimilate into our surroundings without question. “Imitation is social suicide.”

One of the most important qualities in life is individuality, and being unique is a virtue of sorts. Changing for other people is getting ‘lost in the finite,’ adhering to the crowd without questioning why. So don’t conform without questioning why.

Leap of Faith

As someone who grew up agnostic, I think a lot of atheists/agnostic folk misinterpret religion. Commitment is rationality, and taking a leap of faith is the ultimate act of reason. For example, imagine that you are told to write out your ideal life’s daily routine/schedule: drink enough water, work out, read, etc. We have this checklist of abc…xyz items and in theory, you would do them all every day.

However, despite knowing what we should be doing, we just don’t commit to them. Religion is just that same commitment to a set of ideals that pushes us to be faithful.

Desire

There is a paradox of sorts where we always seem to want more of what we can’t have, and maybe this is because our brain equates things that are harder to get with higher value, so something unavailable feels more rewarding than what’s already ours.

Drawing on Eastern philosophy, one grounding principle is that not wanting something is as good as having it. In this same way, I think there is a dialectic of love where you should be willing to die for the things you love, but also be able to live without them. A binary of sorts, where we don’t compromise on what we deeply, truly want.

Semi-Determinism

I used to be a hard determinist growing up, but now I have a heuristic of a semi-deterministic world that I rely on. Some longer-term things are more likely than not set in stone (e.g. the sun will rise tomorrow). However, on the shorter- and smaller-term scale, outcomes are more malleable, like whether I will have breakfast tomorrow or not. We can see that our agency exists in this near field and praxis turns possibility into reality.

A lot of the thoughts in this essay are shaped by the 19th- and 20th-century existentialists who sought to pair theory with practical advice on how to lead a fulfilling life. I think the freedom that we are born with in this life requires courage, clarity, and repetition. Praxis actualizes identity. We become what we choose, repeatedly. But that choice is also what makes life worth living.
`,
  },
  {
    title: "Perspective",
    subtitle: "Reflection #4",
    date: "Dec 2025",
    tags: ["Perception", "Language", "Consciousness"],
    excerpt:
      "Our perspective isn’t a clear window into reality, but a lens built from socialization, language, and consciousness. This reflection explores how those forces quietly construct the worlds we live in.",
    content: `
Statement: Our view of the world is not a neutral observation, but a constructed lens shaped by socialization, language, and consciousness.

Socialization

The primary agents of socialization in order of influence are as follows:

1.	The dinner table: family culture is where we get our earliest worldviews, and identity and values are transmitted informally.

2.	School: this is where we first encounter norms, hierarchy, and shared learning, and how we learn socially acceptable behavior and thought.

3.	Church: (religious) institutions shape our morality, truth, and tradition, with belief systems being inherited before they are chosen.

Although there are other factors in play as well (e.g. media, workplace, technology), most early socialization is shaped by these three mechanisms.

Language

We think because we have language, not just speak because we think. Language is primarily an expression of thought rather than a means of efficient communication. If you think about it, you may “think” in your native language, but that doesn’t quite nail down the nature of thought itself.

Side note: I sometimes hear people say that we should all have one unifying language, like the concept of a lingua franca, that facilitates communication across cultures. But there was such a language, Proto-Indo-European, and the nature of language is to branch off into several different sub-structures because the people, by nature of living in different parts of the world and developing different cultures, encode a different worldview into the words they use to communicate with each other. This divergence from a shared origin leads to new realities being created, with each language encoding a different worldview.

Language defines what we can name, and therefore what we can know. And our reality is filtered by these linguistic categories.

Perspective

People harp on this point a lot, but there is no accessible objective reality, and no view from nowhere—only viewpoints conditioned by experience. By virtue of each of us having our own unique perspectives, we each hold multiple truths rather than a single inaccessible, shared truth.

Social identity theory, particularly the in/out-group theory, highlights how groups define the self and the “other,” and this belonging is tied to a shared worldview. We have a protective instinct of group identity, and bias, prejudice, community, and culture are organized around it.

Consciousness

If you’ve heard of the thought experiment of a 2-dimensional creature trying to visualize a 3-dimensional world (impossible), think of an ant’s frame of reference relative to a human in terms of “level” of consciousness. There is a gradient of awareness and complexity, with each step allowing for a broader perception of reality.

This allows us to imagine futures and reflect on the past; consciousness expands our meaning-making capacity. Taking the analogy a step further, it’s not hard to imagine going from a human’s level of consciousness to a superintelligent AI’s and, going back to the topic of language, imagining that they would develop a “higher” form of communication, in line with their level of consciousness.

It’s also been heavily emphasized how institutions shape our thoughts, with schools, media, religion, and the government serving as mental architects. Together, they shape how we interpret the world before we question it.

Existence

Let’s define the following terms as follows:

“Existence”: physically exist (think an apple)

“Absist”: conceptually exist (think mathematical concepts like numbers, the Pythagorean theorem, a perfect circle: these are conceptually possible, but impossible to actually find in the real world of physical existence)

“Subsist”: perceived existence (think Harry Potter: even though he’s not “real,” there is a near infinite number of conceptions of Harry Potter; for example, the sum of J.K. Rowling’s written words about him; the movie depictions of him; my conception of him; your conception of him; and every other reader’s as well, etc.)

There are versions of ourselves that only live in others’ minds. We never know the inner life of another directly, and instead, we relate through mental models and assumptions. This ties back to the idea that there is no objective reality (no objective “us” / static personal identity), and we instead relate through mental models and assumptions.

World-construction

Together, consciousness + socialization + language produce our worldviews, and meaning is ultimately a constructed lens. Through this shared reality we live in, society only works because we agree to believe together, and reality is built collectively, not discovered individually.

Hegel would say that our choices and perspective are limited and determined by our historic-cultural context. Yet Kierkegaard would say that our choices are ours and we should take responsibility for them.

Once we understand that perception is constructed, we gain the ability to reshape that frame.
`,
  },
  {
    title: "Social Faith",
    subtitle: "Reflection #3",
    date: "Nov 2025",
    tags: ["Relationships", "Human Nature", "Connection"],
    excerpt:
      "In a world of infinite choice, connection demands faith. Social faith is the belief that meaning isn’t found in isolation but made through the fragile, enduring bonds between family, love, and friendship.",
    content: `
“I think society’s emphasis on family forces us into relationships that are otherwise unhealthy. Sure, a long time ago, when people lived miles from civilization, family was all you had. There was a very practical purpose to sticking together. But now I have six million people in my backyard. Why should I be wasting time with someone I don’t like just because they have the same last name as me?”

“Humans do everything they can to try to forget they are animals. We create these institutions and customs that deny our animal nature. Take our relationships with our parents, for example. No other animal keeps a relationship with its parents after it’s been raised. It’s not natural. Yet we insist, because we think that’s what makes us human. Think of the people you know. Are they happy when they go visit their parents? Is it something they naturally want to do? No. They bitch about it. But then they go anyway. Because that’s what makes them feel human.”

Mar 24, 2014 (Humans of New York)

If family is humanity’s first social covenant, perhaps it remains the one most misunderstood.

What the New Yorker says is absolutely right—the majority of people used to live their whole lives in the city that they were born in; now, we meet an order of magnitude more people than we did in the past. A rough back of the envelope estimate suggests that an average person meets 80,000 people in a lifetime, and although Dunbar’s number has since been challenged, it once suggested that humans could only maintain about 150 close relationships. How do we bridge this disconnect in our lives? Through what I call social faith, we can open ourselves up to meaningful connections via shared responsibility and understanding. Social faith is the belief that even in an age of infinite choice, it’s worth choosing to connect—to believe in others without guarantee of reciprocity. It’s what binds our fragmented networks into something human again.

Family: The First Social Construct

Dawkins argued that rather than the individual, genes are the fundamental unit of evolution. From this lens, I believe that having kids is the most important decision that any one person can make in their life—there is an inherent social contract that you must be willing to do anything for your kid, and understandably so, that level of responsibility isn’t for everyone. But at the same time, it is the same reason why some people do not want to adopt. The understanding that you are a literal, living extension of your parents is powerful, and the nuclear family has arguably been the strongest living institution throughout human history because of it.

But family, for most, is not chosen. So what happens when we begin to choose our families?

Romantic Relationships: Chosen Family

I’ve seen a number thrown around that any one person has a potential of 50,000 soulmates in a lifetime. Given this perspective, I believe it becomes easier to see that soulmates are made, not found—you could date any one of these 50,000 people and have it turn into the perfect marriage, but what ultimately matters is the effort you put in to build a lasting connection. I hear a lot of people throw around the idea of polyamory as a post-traditional pursuit, but 86% of people still believe in true love. Perhaps because of our belief in the sacredness of institutions like the nuclear family, we hold on to the idea of monogamy—and to the faith that true love exists.

And then there are the relationships that ask for nothing.

Friendship: The Third Family

A popular meme going around these days I see is the one mocking the idea that you do not owe anyone anything in your life. It is, of course, a more optimistic view that we hold certain obligations to each other and reciprocate kind actions, but friendships are unique in that you truly don’t owe each other anything—and that freedom is what makes them so enduring. A lot of my friends don’t have expectations of each other, but at the same time, open themselves up to draw each other into our respective lives.

I’ve also seen talk about whether it’s okay to have “bum” friends, or if it’s okay to cut your “day ones” off. That’s of course up to you, and I believe friendship is the purest relationship in a way because it survives without obligation—a quiet act of mutual recognition. Granovetter’s ‘weak tie theory’ shows that acquaintances often shape our lives more than close friends—through the ideas, opportunities, and information they pass along. In that sense, friendship—and even acquaintance, illustrates the power of social faith: we trust that even small, transient connections can carry unexpected meaning.

What Makes Relationships Last

A different version of myself subsists in all my relationships’ minds as a mental / conceptual concept. Some may know me as funny, some may know me as quiet—they are all “real”, but they are not the “real” me as I view myself. Let me present an analogy before we proceed:

I made a Spotify playlist of my 100 favorite songs (yah). This is a very tight playlist where each song sounds “special” to me and is unique in its own way. I then made a second playlist of my next 100 favorite songs (yeh) and what I noticed is that the sound got “looser”, less specific and more broad.

The version of myself that I conceptualize in my head is yah—this is my truest expression and it is very tight and neatly packed. But the version of myself that I present to others is closer to yeh, a more broad, wide-ranging number of personalities and affects.

Those who allow ourselves to be the most authentic, truest version of ourselves build the strongest connections. Because in reality, the playlist that best describes me is not yeh or even yah, but rather nah, which has close to 3,000 songs. And yet, every person I meet only ever hears a handful of these songs. Relationships, then, are the act of building playlists together—curating which songs we reveal, which ones others discover, and which remain private tracks.

Similarity and reciprocity are subsets of authentic being and allow us to build stronger relationships because they allow ourselves to be more authentic; we like what we like so we click with those who like the same music as us, and reciprocity is what keeps us listening—it’s the act of being heard and choosing to listen back.

Ultimately, I think relationships are a core tenet of life because there is something sacred about being human. Compare talking with your good friend to ChatGPT for example; any of us would take talking to a person over AI.

The human brain is the most complex known object in the universe, as far as we know. There are many reasons why humans are social (biological, psychological, cultural), but focusing on Maslow’s hierarchy of needs, they provide us emotional support and validation, along with a sense of identity and purpose.

Humans share 98.8% of our DNA with chimpanzees—we are all more alike than we think. Our devotion to family, monogamy, and societal norms often conflicts with our natural instincts, yet it is through these very constructs that we define our humanity. Though many of our social institutions contradict evolutionary logic, they endure because they give meaning, structure, and moral coherence to human life, showing that what makes us human is not instinct but the choice to transcend it. Perhaps social faith is what lets us transcend instinct: the quiet conviction that meaning isn’t found in isolation, but made in the spaces between us.
`,
  },
{
    title: "Be Different",
    subtitle: "Reflection #2",
    date: "Nov 2025",
    tags: ["Identity", "Culture", "Miami"],
    excerpt:
      "Difference isn’t a burden to hide but a strength to embrace. By owning what sets us apart, uniqueness becomes both a source of belonging and a way to thrive.",
    content: `
Growing up in Miami felt like playing life on hard mode—being different wasn’t a choice; it was necessary to navigate racism, cultural distance, and not fully belonging. Over time, though, that difference became a strength, and embracing uniqueness taught me how to thrive wherever I found myself in life.

I spent my summers as a kid in South Korea, spending up to two months at a time there and even attending school some years. This number slowly dwindled down to two weeks as my sister and I got busier and found it harder to make time to travel. At home, though, I would get my dose of Korean culture by watching Korean TV shows at the dinner table and listening to K-pop (mostly BIGBANG). I met few Asian students in school and even fewer Koreans, and our family would have to drive up to an hour to eat at the closest Korean restaurant. Language was the biggest barrier for me, though, as I found it difficult to communicate as well as I wanted to with my parents and even my piano teacher, which made me feel disconnected at times.

There was definitely more of an Asian community at Yale, and I took three Korean language classes, which dramatically improved my speaking skills and helped me connect with my parents on a deeper level. I moved back to Miami post-grad, where I had definitely had my fair share of racist remarks thrown my way growing up—and still do to this day—but felt much more secure this time around. I’m grateful to have grown up in such a diverse environment and now understand that home is where you feel most comfortable. My parents moved to New Jersey, where they’ve made new friends and there’s a Koreatown nearby, and I think we’ve both learned to make our home our home.

Korea, to me, represents the epitome of late-stage capitalism, largely due to America’s investment and military presence in the country post-war, which helped turn it into the cultural and economic powerhouse it is today. From the little time I’ve spent in the country, some notes and observations I have are: 1) there’s massive wealth inequality, 2) political polarization is one of the country’s most pressing issues, and 3) people are hyper-materialistic and obsessed with status chasing—where did X go to school, what job does X work, what car does X drive. What stands out most, though, is the cultural homogeneity—if you walk into a classroom, all of the boys will be rocking whatever hairstyle is trending at the time; everyone is very well dressed, too, but they all have the same fashion sense, etc.

I say this to note that Miami isn’t so different regarding points 1–3; however, Miami is incredibly diverse and anything but homogeneous. I grew up hanging out with a lot of Jewish and Hispanic friends and was lucky to have had people accept me for who I am.

Being unique is always a strength. And for me, I don’t mean being Korean made me unique—what I mean is that growing up as a Korean in Miami made me so. I think anyone who knows me will say that I’m different in some regard, hopefully in a good way. But that was shaped by my lived experiences, largely in Miami.

I think too many people want to fit in, especially if they find themselves out of their comfort zone. But I’ve learned that home isn’t a place; rather, it’s something you create by owning who you are. Being unique makes you interesting and endearing to others. Yes, we should be true to ourselves, but we should also play to our strengths and strive to stand out. In a crowd full of boring, identical people, be yourself. And be different.
`,
  },
  {
  title: "On Meaning",
  subtitle: "Reflection #1",
  date: "Oct 2025",
  tags: ["Personal Growth", "Philosophy", "Mindset"],
  excerpt:
    "Meaning isn’t something we stumble upon—it’s something we build. Through effort, intention, and a belief in our own agency, the ordinary actions of daily life can become deeply significant.",
  content: `
Statement: Meaning isn’t discovered; rather, it’s created.

I have found myself, like many others, struggling with the notion of meaning, fulfillment, happiness—whatever you’d like to call it. And I could never get good, centralized feedback on how to bridge this gap in my life. In the following anecdotes, I’ll share my story and some heuristics that have helped me throughout my life.

1. More effort almost always yields better outcomes

Growing up, I never thought I was the smartest kid; I did think, however, that I put a lot of effort into whatever I set my mind to. Somewhere along the way, though, I realized that the opposite was true: intelligence didn’t matter anywhere near as much as the effort I put in—which, at times, was very little.

As a side note, I also think that nonchalance in today’s society is horrible. People should care about their relationships with others and about their passions, interests, and hobbies. Effort is cool, and it always will be—at least to me. I’ll always be the one to put in more if need be.

2. Manifestation / visualization

Whether it’s NBA superstars or practicing physicians, I consistently hear successful people use manifestation and/or visualization to help them realize their goals.

For me, it looks like this: if you are able to conceptualize the beginning of whatever story you are tackling, along with the end, you’ve already completed over half the battle. Filling out the in-between portion is just a matter of putting your head down and making things happen until enough time has passed and you’re done.

3. Personal identity

The two most important questions in life, to me, are: 1) Who am I? (What systems and heuristics work best for me? What do I derive pleasure from? What do I enjoy doing?) and 2) Where am I going? (What do I want?) Similar to the previous point, I think that not enough people spend enough time thinking deeply about what they want—whether it be in the short or long term. Once this is nailed down, again, making it happen is easy.

Additionally, something that has helped me, which I derived from a hiring assessment, is understanding the difference between how you view yourself versus how you think others view you. This delta says a lot about our personality—not necessarily in a good or bad way, but in a way that can be helpful.

4. Deconstruction

Being a student made it seem to me as though the world was very systematic and driven by a very specific set of rules—which can be true to some extent, but not entirely so. Understanding that there are no “rules” or objective truths can be freeing. An example from my college philosophy class: Hume said that just because something’s always happened before—like a ball falling due to gravity—doesn’t mean it must happen again; our belief that it will is habit, not logic.

Ultimately, perception is reality, and we should adopt systems and heuristics that make it easier to live our day-to-day lives.

5. Internal locus of control

I like thinking about the world in terms of fate, luck, or destiny to some degree. However, it is much more helpful to have an internal locus of control—adhering to the notion that our actions determine outcomes in our lives rather than determinism. It is essentially to say that we should hold the notion of free will dear to our hearts, and perhaps that is because…

What we ultimately want is agency—the feeling that I meaningfully exist, that I have influence over my life.

I want to feel as though I am acting on the world rather than the world acting on me.

In this way, our seemingly insignificant little actions, words, and decisions become meaningful.

At least, they have for me in my own lived experience.
`,
},
  {
    title: "The Dead Shall Be Praised",
    subtitle: "ENGL 120",
    date: "Nov 2018",
    excerpt:
      "Grove Street Cemetery's Egyptian pylon bears the inscription “THE DEAD SHALL BE RAISED.” Inside, New Haven's first chartered burial ground reframes death, memory, and the desire for permanence.",
    content: `The looming gateway to Grove Street Cemetery faces High Street. Inscribed on the lintel reads, “THE DEAD SHALL BE RAISED,” (1 Corinthians 15:52) to which Yale President Arthur Twining Hadley supposedly responded, “They certainly will be, if Yale needs the property.”

Architects Henry Austin and Hezekiah Augur designed this brownstone ancient Egyptian pylon during a wave of Egyptian Revival architecture that flourished from 1820-1850. In ancient Egypt, the two monumental towers on either side of the columns represented the hills between which the sun rose and set. While it's uncertain whether Austin and Augur knew of this, they nevertheless chose a symbol of eternal renewal and resurrection to mark the entrance.

Prior to the establishment of Grove Street Cemetery, New Haven residents buried their dead on the Green, the central block of the town's nine-square settlement plan. This changed when severe yellow fever epidemics devastated the city in 1794 and 1795: with almost five thousand buried over the past one hundred fifty years, the Green was much too crowded for any more skeletal occupants. New Haven residents and U.S. Senator James Hillhouse planned out a new graveyard on farmland to the north and two years later, Connecticut officially incorporated The New Burying Ground.

Over two hundred years later, the commotion of a bustling city and large university contrast the aura of peace coming from within the cemetery. An eight-foot brownstone wall surrounds three sides of the graveyard and obstructs everything from view, save a few trees and the most massive of headstones. Should you venture down Grove Street, a wrought iron fence provides a view into the graveyard. Immediately beyond the entrance lies a brick Victorian office topped with steep roofs that once served as a chapel so that service could be held in inclement weather; its sole decoration is a gilded butterfly symbolizing the soul's release from the body.

The cemetery greets me through its vast scale, with a seemingly infinite number of gray headstones populating the whopping eighteen acres. The grass is neatly trimmed and ancient oak trees shade the paths, which are wide enough for cars or horse-drawn carriages to pass through. Each road is named after a tree: Maple, Magnolia, and Cedar Avenue are each lined with their titular species – Hillhouse prized trees and initiated the extensive plantings that would give New Haven the nickname of “Elm City.”

As I look beyond the wall, buildings like the Center for Innovation and Design, Benjamin Franklin College, and Yale Health provide a refreshing contrast of color and style to the graveyard's beautiful, albeit monotonous green and gray. American flags honor veterans' headstones and wilting flowers adorn the walkways. A low hum can be heard in the distance as two men work diligently on maintaining the property amidst freezing temperatures; another man can be seen sitting alone in front of a grave marker, slowly taking drags of his cigarette.

One tourist carries a DSLR camera and takes photos of the headstones. “I'm actually from Ireland – my wife left to go shopping but I thought this place looked more interesting. It's very beautiful, I was just looking at the different ethnicities in the names.” His name is Killian, and he snaps a photo of me before we part ways. Another older visitor dressed in a suit strolls around with his daughter. I ask him why he's here, to which he responds, “It's very peaceful. Graveyards are a place for introspection and reflection – we're all going to end up in one, or something like it, one day.” As I listen to birds chirping freely, I agree with his sentiment.

The very notion of a cemetery, not just the first chartered burial ground in the United States, is revolutionary in itself. Some tens of thousands of years ago, humans stumbled upon the dual emergence of symbols and sentience due to the increasing complexity and growth of the brain, coupled with vocal cords. With these tools came the development of language and eventually, the creation of a symbolic reality. Mortuary rituals fit into this newfound ability to reminisce about the past and envision the future, to collaborate and think abstractly. Although there is no way for anthropologists to research language in this regard, graveyards leave behind a literal fossil to study.

Burials reflect a deeply spiritual and meaningful aspect of humans mourning past deaths and imagining their own in the future. And for a long time, deliberate interment was thought to be a practice unique to Homo sapiens, one of many factors seeming to distinguish us from other animals. However, fossils discovered in 2013 evidenced that Homo naledi also carried out burials, even though their brains were half as small as ours. Pinpointing what exactly separates us from the rest of nature is surprisingly difficult.

As the first private nonprofit cemetery in the world, Grove Street Cemetery redefined graveyards from the ground down. Whereas bodies used to be thrown into the ground wherever space was available, sections of the cemetery were allocated for certain families. Beyond this, land was specifically designated for church parishioners, out of town strangers, the indigent, persons of color, and Yale College.

These divisions become immediately apparent when touring the area. Plots like Number 2 Cedar Avenue are enclosed by an iron fence and host the family of Benjamin Silliman, a prominent American chemist and Yalie. Luminaries such as Roger Sherman, Noah Webster, and Eli Whitney exhibit well-crafted, elegant headstones; lofty obelisks seem to reach for the heavens, continuing the Egyptian motif found in the pylon.

On the other hand, comparatively tiny stone grave markers moved from the Green can be found lined up against the back wall in alphabetical order. No bigger than 2' x 1', they are the oldest relics that can be found here, dating back to the seventeenth century. Wear and tear has rendered some illegible, and one looks more like a rock than an ornament. Another simply reads, “IH AGE 79 1683,” in what could pass for a child's handwriting, with the word AGE sloping diagonally to avoid running out of space. Inscriptions recall the deaths of everyone from 5-week-old William to 93-year-old Decon.

Stone obviously isn't permanent, but on the scale of a human life, it is – our lives are too short for us to perceive the constant movement of plate tectonics and mountains eroding. Consequently, we build monuments like the Great Pyramids and carve statues out of stone because they will outlast us, effectively achieving immortality. Modern constructions of metal and glass are nothing more than stone refined through human ingenuity – collectively, they anchor a sense of continuity and permanence, the kind that we wish for ourselves. One headstone reads, “We all yearn for transcendence, for immortal life, to be part of the future.”

Looking at the grave markers, I realize their decay aligns with the enduring truth that like humans, stone is transitory. According to estimates by demographic researchers at the Population Reference Bureau, roughly 100 billion people have died before us. Yet, death stalks us in a trivial, ignorable way: an expiration date far in the future engenders a false sense of permanence and lulls us into complacency. There is always tomorrow, so why start today?

The opposite idea, that our days are numbered, is emboldening. Although failures and humiliations will be forgotten, great achievements may not. As I leave, I find a bench marked with the words of Pericles: “What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others.” From the fallen soldiers to the fourteen Yale presidents who lie here, the people interred at Grove Street Cemetery are immortal in this sense.

I have never seen leaves change color first-hand. I have seen red and orange leaves while traveling, but green leaves are a constant in my mind, like stone. Yet, for the first time, I am seeing the leaves change color in the cemetery.`,
    tags: ["Place Writing", "History", "Reflection"],
  },
  {
    title: "The Lessons We Take from Obstacles",
    subtitle: "Common App",
    date: "Nov 2017",
    excerpt:
      "From burnt fingers to broken machines, failure became less a setback and more a forge—a relentless process of refining ideas, pushing limits, and building something better.",
    content: `For eight glacially slow minutes, we performed our skit, featuring everything from pneumatic wings to a fully functional go-kart built from scratch. It was our fifth time at World Finals and in that stadium, all I could think about was how bizarre it was to watch your work blow up in front of you, literally.
    
I embarked on my venture with Odyssey of the Mind (OM) when I was in first grade. Alongside six teammates, I harbored a certain naiveté that made the whole experience seem more like glorified playtime than a creative problem-solving competition. We worked as diligently as our sub-four-foot-tall bodies would enable us and struggled to work with anything that weighed more than five pounds. Power tools were undoubtedly off limits per our parents' safety concerns, not that our juvenile hands could handle them anyway.

Over the years, we fashioned elaborate solutions to quirky challenges, producing a diverse selection of vehicles that could catalyze chemical reactions or disassemble and reassemble: a bootleg Transformers of sorts. I felt fiery nuts of steel drop into my lap and burn holes through my dearest pair of navy blue Nike basketball shorts. Neodymium magnets worked in tandem with rat traps to crush my hands: all part of the learning process. Whereas I had once been shy and trembled at the snap of dinky mousetraps, I now found myself featuring as a rapping grandma in our music videos and adrenalized to sit on exploding boxes.

My sophomore year marked the team's tenth anniversary: only three of the seven original team members remained, myself included, and whether or not to continue was a legitimate question. After collectively agreeing to another year, Home Depot became my third home again, right behind the coach's. Weekends meant OM work marathons wherein I could spend four hours testing the viability of a solution to meet problem limitations, just to spectacularly fail in a matter of seconds.

The engineering component of OM had largely been handled by my best friend and me every year, and this time was no different. Without a doubt, the single large car was the most difficult element of the problem we chose. I applied what little physics knowledge I possessed to get the job done; pressurized air tanks blew up in our faces and batteries shorted, but we eventually achieved our final product. The car worked in sync with an imaginative storyline to win us first place at the regional and state tournament, the latter of which would take us to Iowa for World Finals.

Even in the minutes leading up to the finale, our vehicle displayed undying loyalty to Murphy's law: the batteries exploded and set off the fire alarm, leaving bystanders stuck in the elevator and us with nothing but the ultimate stress test. After hurriedly repairing the flaming car, we came, we saw, but failed to conquer, placing eleventh overall. It was utter disillusionment to see that hundreds of hours of work was nothing but charcoal, crumbling into a pile of ashes rather than the diamond we had hoped to produce. I could all but hear the world laughing in my face, saying, "Your best wasn't good enough!"

Although blunt and severe, the realization that I couldn't have done better was liberating: in the face of the universe's stubborn silence, words like "deserve" and "fair" become indistinct – all we can do is constantly strive for something better. And there is real meaning and value to be created by pursuing projects in spite of, rather than because of incentives. Over the past decade, working with everything from amphibious cars to a makeshift eighty-gallon water trough shaped us into calculating risk-takers, ready to adapt to whatever challenge the future had to offer.

We returned to World Finals the following year to place second overall, and I still wear those navy blue shorts today.`,
    tags: ["Personal Growth", "Resilience", "Engineering"],
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
              <p className="text-sm text-muted-foreground">Written</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">Essays</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl text-pretty leading-relaxed">
              Thoughts and stories on life, learning, and everything in between.
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
                      {essay.content
                        .split(/\r?\n\s*\r?\n/)   // handles \n\n, \r\n\r\n, and blank lines with spaces
                        .filter(p => p.trim())
                        .map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line"
                          >
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
