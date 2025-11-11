'use client'

import { useState, useEffect } from 'react'
import HomePage from '@/components/HomePage'
import AboutPage from '@/components/AboutPage'
import EventsPage from '@/components/EventsPage'
import ResourcesPage from '@/components/ResourcesPage'
import TeamPage from '@/components/TeamPage'
import ContactPage from '@/components/ContactPage'
import Navbar from '@/components/Navbar'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && ['home', 'about', 'events', 'resources', 'team', 'contact'].includes(hash)) {
      setCurrentPage(hash)
    }
  }, [])

  const handlePageChange = (page: string) => {
    setCurrentPage(page)
    window.history.pushState(null, '', `#${page}`)
    window.scrollTo(0, 0)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handlePageChange} />
      case 'about':
        return <AboutPage />
      case 'events':
        return <EventsPage />
      case 'resources':
        return <ResourcesPage />
      case 'team':
        return <TeamPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage onNavigate={handlePageChange} />
    }
  }

  return (
    <>
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
    </>
  )
}

