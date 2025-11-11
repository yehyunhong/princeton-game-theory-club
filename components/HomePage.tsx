'use client'

import { motion } from 'framer-motion'
import { ScrollAnimation, StaggerContainer, StaggerItem } from './ScrollAnimation'

interface HomePageProps {
  onNavigate?: (page: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <section className="bg-gradient-to-br from-princeton-black to-gray-900 text-white py-24 text-center relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 143, 0, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 143, 0, 0.2) 0%, transparent 50%)',
          }}
        />
        
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 1.11, 0.81, 0.99] }}
            className="text-5xl font-bold mb-4"
          >
            Princeton Game Theory Club
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 1.11, 0.81, 0.99] }}
            className="text-xl mb-8 text-gray-300"
          >
            Exploring strategic thinking, decision-making, and rational behavior
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 1.11, 0.81, 0.99] }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate?.('about')}
            className="inline-block bg-princeton-orange text-white px-10 py-4 rounded-full font-bold transition-shadow hover:shadow-lg hover:shadow-princeton-orange/30 cursor-pointer"
          >
            Learn More
          </motion.button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-16">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange">
              What We Do
            </h2>
          </ScrollAnimation>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">Weekly Seminars</h3>
                <p className="text-gray-600 leading-relaxed">
                  Join us for engaging discussions on classical and modern game theory topics, from Nash equilibria to mechanism design.
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">Research Groups</h3>
                <p className="text-gray-600 leading-relaxed">
                  Collaborate with fellow students on original research projects in game theory, economics, and computational applications.
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">Guest Speakers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hear from leading academics and industry professionals about real-world applications of game theory.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </>
  )
}

