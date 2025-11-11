'use client'

import { motion } from 'framer-motion'
import { ScrollAnimation, StaggerContainer, StaggerItem } from './ScrollAnimation'

export default function EventsPage() {
  const events = [
    {
      date: 'November 8, 2025 • 7:00 PM • Friend Center 101',
      title: 'Introduction to Nash Equilibria',
      description: 'A beginner-friendly workshop covering the fundamentals of Nash equilibria with interactive examples. Perfect for new members!',
    },
    {
      date: 'November 15, 2025 • 6:30 PM • McCosh 50',
      title: 'Guest Lecture: Prof. Sarah Chen on Algorithmic Game Theory',
      description: 'Join us for an exciting talk on the intersection of computer science and game theory, featuring Professor Chen from the CS department.',
    },
    {
      date: 'November 22, 2025 • 7:00 PM • Friend Center 101',
      title: 'Game Night: Prisoner\'s Dilemma Tournament',
      description: 'Compete in our annual iterated prisoner\'s dilemma tournament! Bring your strategy or code your own bot.',
    },
    {
      date: 'December 1, 2025 • 4:00 PM • Robertson Hall',
      title: 'Research Symposium',
      description: 'Club members present their semester research projects. Topics include auction theory, voting systems, and evolutionary game theory.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-16">
        <ScrollAnimation direction="up">
          <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange">
            Upcoming Events
          </h2>
        </ScrollAnimation>
        
        <StaggerContainer className="mt-8 space-y-6" staggerDelay={0.15}>
          {events.map((event, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-princeton-orange hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-princeton-orange font-bold text-sm mb-2">{event.date}</div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  )
}

