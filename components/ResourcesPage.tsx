'use client'

import { motion } from 'framer-motion'
import { ScrollAnimation, StaggerContainer, StaggerItem } from './ScrollAnimation'

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-16">
        <ScrollAnimation direction="up">
          <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange">
            Resources
          </h2>
        </ScrollAnimation>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <StaggerItem>
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">📚 Recommended Reading</h3>
              <p className="font-semibold mb-2">Beginners:</p>
              <ul className="list-disc list-inside mb-4 text-gray-600 space-y-1">
                <li>&quot;Game Theory: A Very Short Introduction&quot; by Ken Binmore</li>
                <li>&quot;The Art of Strategy&quot; by Dixit & Nalebuff</li>
              </ul>
              <p className="font-semibold mb-2 mt-4">Advanced:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>&quot;Game Theory&quot; by Drew Fudenberg & Jean Tirole</li>
                <li>&quot;Algorithmic Game Theory&quot; edited by Nisan et al.</li>
              </ul>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">🎓 Online Courses</h3>
              <p className="text-gray-600 leading-relaxed">
                • Stanford&apos;s Game Theory Course (Coursera)<br />
                • MIT OpenCourseWare: Game Theory<br />
                • Yale&apos;s Game Theory Course (Open Yale)<br />
                • Princeton&apos;s own ORF 411/MAT 385
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">🔧 Tools & Software</h3>
              <p className="text-gray-600 leading-relaxed">
                • Gambit: Game theory analysis software<br />
                • Python libraries: Nashpy, Axelrod<br />
                • R package: gtree<br />
                • GTE: Game Theory Explorer (web-based)
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        <ScrollAnimation direction="up" delay={0.3}>
          <div className="mt-12">
            <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange">
              Past Presentations
            </h2>
            <ScrollAnimation direction="up" delay={0.4}>
              <p className="text-lg text-gray-600 mb-6">
                Access slides and materials from previous club meetings and workshops.
              </p>
            </ScrollAnimation>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">📁 Archive</h3>
              <p className="text-gray-600">
                • Spring 2025: Mechanism Design Workshop<br />
                • Fall 2024: Evolutionary Game Theory Series<br />
                • Spring 2024: Auction Theory Deep Dive<br />
                • Contact us for access to our Google Drive repository
              </p>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

