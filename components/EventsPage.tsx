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

      <div className="w-full flex justify-center pt-[30px] pb-[100px] px-[50px]">
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&showTitle=0&showTabs=0&showCalendars=0&showTz=0&title&src=Y18yNzFjNjlkZTI0MzAxMmQ3OGZiM2EzZDYyNmExZTVmYmNhMTNhNTE5ODY0M2NlMzFiNzBiOWZjZjcyMjgzMWViQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23f6bf26" 
          width="800" 
          height="600" 
          frameBorder="0" 
          scrolling="no"
        ></iframe>
      </div>
    </>
  )
}
