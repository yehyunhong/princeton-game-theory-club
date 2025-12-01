import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Alegreya } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-alegreya',
})

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
    <html lang="en" className={`${montserrat.variable} ${alegreya.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}

