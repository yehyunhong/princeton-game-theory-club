import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Princeton Game Theory Club',
  description: 'Exploring strategic thinking, decision-making, and rational behavior',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

