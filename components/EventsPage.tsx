'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollAnimation, StaggerContainer, StaggerItem } from './ScrollAnimation'

interface Event {
  id: number
  date: string
  title: string
  description: string
  location?: string | null
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadEvents = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/events')
        if (!response.ok) {
          throw new Error('Failed to load events')
        }
        const data: Event[] = await response.json()
        if (isMounted) {
          setEvents(data)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unexpected error')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadEvents()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      {/* title */}
      <section className="w-full flex items-end pt-[20px] pb-[20px]">
        <div className="w-full text-center">
          <ScrollAnimation immediate>
            <h1>
              UPCOMING EVENTS
            </h1>
          </ScrollAnimation>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-16">
        <StaggerContainer className="mt-8 space-y-6" staggerDelay={0.15}>
          {loading && (
            <div className="text-gray-500">Loading events...</div>
          )}

          {error && (
            <div className="text-red-600">
              {error}. Please try refreshing the page.
            </div>
          )}

          {!loading && !error && events.length === 0 && (
            <div className="text-gray-600">No events scheduled right now. Check back soon!</div>
          )}

          {!loading && !error && events.map((event) => (
            <StaggerItem key={event.id}>
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

    </>
  )
}
