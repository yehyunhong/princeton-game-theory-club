'use client'

import { ScrollAnimation, StaggerContainer, StaggerItem } from './ScrollAnimation'

export default function HomePage() {
  return (
    <div className="bg-gtc-cream">
      <section id="home" className="px-6 pt-12 pb-10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gtc-brown/60">Homepage</p>
          <ScrollAnimation immediate>
            <h1 className="mt-6 font-display text-4xl md:text-5xl text-gtc-brown tracking-[0.08em]">
              PRINCETON
              <span className="block text-princeton-orange">GAME THEORY CLUB</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation immediate delay={0.1}>
            <p className="mt-4 text-lg text-gtc-ink/80">
              We solve real card games with game theory, probability, and a lot of spirited debate.
            </p>
          </ScrollAnimation>
          <ScrollAnimation immediate delay={0.2}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-gtc-beige shadow-sm">
              <img
                src="/IMG_0171.JPG"
                alt="Students gathered for a club meeting"
                className="h-64 w-full object-cover md:h-80"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation immediate delay={0.3}>
            <div className="mt-6 flex justify-center gap-6 text-2xl text-princeton-orange/70">
              <img alt="Heart suit" className="h-6 w-6" src="/suit_heart.png" />
              <img alt="Club suit" className="h-6 w-6" src="/suit_club.png" />
              <img alt="Diamond suit" className="h-6 w-6" src="/suit_diamond.png" />
              <img alt="Spade suit" className="h-6 w-6" src="/suit_spade.png" />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <ScrollAnimation direction="up">
            <h2 className="font-display text-3xl text-gtc-brown tracking-[0.08em]">WHO WE ARE</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-gtc-ink/80">
              We&apos;re a community of students who love strategic thinking, decision-making, and rational play. Our goal is
              to solve fun and niche card games using probability, statistics, and game theory. The game we&apos;re currently
              focused on is Fish (also known as Literature), and we explore it through discussion, puzzles, and
              collaborative problem-solving. Whether you&apos;re a seasoned strategist or brand new, you&apos;ll find a welcoming
              place to learn and build.
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation direction="fade" delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-gtc-beige shadow-sm">
            <img
              src="/IMG_0242.JPG"
              alt="A student holding a hand of cards"
              className="h-72 w-full object-cover"
            />
          </div>
        </ScrollAnimation>
      </section>

      <section id="events" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <ScrollAnimation direction="fade">
          <div className="overflow-hidden rounded-2xl border border-gtc-beige shadow-sm md:order-none order-2">
            <img
              src="/IMG_0182.JPG"
              alt="Students collaborating in a classroom"
              className="h-72 w-full object-cover"
            />
          </div>
        </ScrollAnimation>
        <div className="md:order-none order-1">
          <ScrollAnimation direction="up">
            <h2 className="font-display text-3xl text-gtc-brown tracking-[0.08em]">WEEKLY MEETINGS</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-gtc-ink/80">
              We meet weekly for open play, live-team Fish games, and strategy sessions that introduce the rules,
              probability tools, and equilibrium ideas behind the game. Meetings are open to all experience levels,
              and we split time between learning concepts and actually playing the game together.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section id="puzzles" className="max-w-6xl mx-auto px-6 py-16">
        <ScrollAnimation direction="up">
          <h2 className="font-display text-3xl text-gtc-brown tracking-[0.08em]">PUZZLES</h2>
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-gtc-ink/80 max-w-3xl">
            We learn game theory by playing it. Expect friendly competitions, puzzle nights, and hands-on challenges
            that build intuition for optimal play and strategic reasoning.
          </p>
        </ScrollAnimation>
        <StaggerContainer className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Live Fish games with open discussion',
            'Strategy and probability mini-lessons',
            'Tournament prep and matchup practice',
          ].map((item) => (
            <StaggerItem key={item}>
              <div className="rounded-xl border border-gtc-beige bg-white/60 p-6 text-sm text-gtc-ink/80 shadow-sm">
                {item}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section id="support" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <ScrollAnimation direction="up">
            <h2 className="font-display text-3xl text-gtc-brown tracking-[0.08em]">SUPPORT US</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-gtc-ink/80">
              Help us host bigger tournaments, bring speakers, and grow our strategy and development work. We appreciate
              event sponsorships, prize support, and connections with faculty, alumni, and departments interested in
              game theory.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-princeton-orange">
              Reach us at gametheory@princeton.edu
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation direction="fade" delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-gtc-beige shadow-sm">
            <img
              src="/IMG_0345.JPG"
              alt="Club members chatting after a game night"
              className="h-72 w-full object-cover"
            />
          </div>
        </ScrollAnimation>
      </section>

      <section id="join" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="md:order-none order-2">
          <ScrollAnimation direction="fade">
            <div className="overflow-hidden rounded-2xl border border-gtc-beige shadow-sm">
              <img
                src="/IMG_0354.JPG"
                alt="Club members celebrating together"
                className="h-72 w-full object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
        <div className="md:order-none order-1">
          <ScrollAnimation direction="up">
            <h2 className="font-display text-3xl text-gtc-brown tracking-[0.08em]">JOIN US!</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-gtc-ink/80">
              We&apos;re open to all Princeton students—whether you want to play, learn strategy, or help build tools.
              Join the Strategy Team (rulebook + theory) or the Development Team (simulator + engine), or just drop by
              for a game night.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://groupme.com/join_group/109934993/NQGWcUoD"
                className="inline-flex items-center gap-2 rounded-full border border-princeton-orange px-6 py-2 text-sm uppercase tracking-[0.3em] text-princeton-orange transition-colors hover:bg-princeton-orange hover:text-white"
              >
                Join the GroupMe
              </a>
              <a
                href="https://www.instagram.com/gtc_princeton"
                className="text-sm uppercase tracking-[0.3em] text-gtc-brown/70 transition-colors hover:text-princeton-orange"
              >
                Follow on Instagram
              </a>
              <a
                href="mailto:gametheory@princeton.edu?subject=Join%20the%20Club"
                className="text-sm uppercase tracking-[0.3em] text-gtc-brown/70 transition-colors hover:text-princeton-orange"
              >
                Email us
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
