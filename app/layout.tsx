import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
})

const body = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-body',
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
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
