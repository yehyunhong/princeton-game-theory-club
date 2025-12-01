'use client'

import { motion } from 'framer-motion'
import { ScrollAnimation } from './ScrollAnimation'

interface HomePageProps {
  onNavigate?: (page: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      {/* Club name */}
      <section className="w-full flex items-end pt-[20px] pb-[20px]">
        <div className="w-full text-center">
          <ScrollAnimation immediate>
            <h1>
              PRINCETON <br />GAME THEORY CLUB
            </h1>
          </ScrollAnimation>
        </div>
      </section>

      {/* Club blurb */}
      <section className="w-full pb-[40px] px-[50px]">
        <ScrollAnimation immediate delay={0.1}>
          <p style={{ fontSize: '28px' }}>
          Exploring strategic thinking, decision-making, and rational behavior.
          </p>
        </ScrollAnimation>
      </section>

      {/* Suits Section */}
      <section className="pb-[40px]">
        <ScrollAnimation immediate delay={0.2}>
          <div className="w-full h-[75px] flex items-end justify-center gap-[10%]">
            <img alt="Heart suit" className="h-full" src="suit_heart.png" />
            <img alt="Heart suit" className="h-full" src="suit_club.png" />
            <img alt="Heart suit" className="h-full" src="suit_diamond.png" />
            <img alt="Heart suit" className="h-full" src="suit_spade.png" />
          </div>
        </ScrollAnimation>
      </section>

      {/* Who We Are */}
      <section className="section-content pb-[40px]">
        <ScrollAnimation immediate delay={0.3}>
          <h2>WHO WE ARE</h2>
        </ScrollAnimation>
        <ScrollAnimation immediate delay={0.4}>
          <p style={{ fontSize: '24px', textAlign: 'left' }}>
            The Princeton Game Theory Club is a community of students passionate about strategic thinking, decision-making, and rational behavior. We explore the fascinating world of game theory through discussions, puzzles, and collaborative problem-solving. Whether you're a seasoned strategist or just curious about how people make decisions, you'll find a welcoming environment to learn and grow.
          </p>
        </ScrollAnimation>
      </section>

      {/* Weekly Meetings */}
      <section className="section-content pb-[40px]">
        <ScrollAnimation immediate delay={0.5}>
          <h2>WEEKLY MEETINGS</h2>
        </ScrollAnimation>
        <ScrollAnimation immediate delay={0.6}>
          <p style={{ fontSize: '24px', textAlign: 'left' }}>
            Join us every week for engaging discussions, strategic puzzles, and collaborative learning. Our meetings are open to all Princeton students, regardless of experience level. We cover topics ranging from classic game theory concepts to modern applications in economics, politics, and everyday decision-making.
          </p>
        </ScrollAnimation>
      </section>

      {/* Join Us */}
      <section className="section-content pb-[40px]">
        <ScrollAnimation immediate delay={0.7}>
          <h2>JOIN US</h2>
        </ScrollAnimation>
        <ScrollAnimation immediate delay={0.8}>
          <p style={{ fontSize: '24px', textAlign: 'left' }}>
            Interested in joining our community? We welcome students from all backgrounds and experience levels. No prior knowledge of game theory is required—just bring your curiosity and enthusiasm for strategic thinking!
          </p>
        </ScrollAnimation>
      </section>
    </>
  )
}

