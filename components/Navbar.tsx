'use client'

import { motion } from 'framer-motion'

interface NavbarProps {
  currentPage?: string
  onPageChange?: (page: string) => void
}

// Menu items matching Figma design
const menuItems = [
  { label: 'HOME', page: 'home' },
  { label: 'ABOUT', page: 'about' },
  { label: 'EVENTS', page: 'events' },
  { label: 'PUZZLES', page: 'resources' },
  { label: 'SUPPORT US', page: 'support-us' },
  { label: 'CONTACT', page: 'contact' },
  { label: 'JOIN', page: 'join' },
]

export default function Navbar({ currentPage = 'home', onPageChange }: NavbarProps) {
  const handleClick = (page: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onPageChange) {
      onPageChange(page)
    }
  }

  return (
    <nav className="bg-cream sticky top-0 z-50 w-full">
      <div className="w-full h-[85px] flex items-center justify-between pl-[20px]">
        {/* Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          onClick={(e) => handleClick('home', e)}
          className="h-[75px] w-[75px] relative shrink-0 cursor-pointer"
        >
          <img 
            alt="Princeton Game Theory Club Logo" 
            className="w-full h-full object-contain pointer-events-none" 
            src={"gtc_logo.png"} 
          />
        </motion.a>

        {/* Menu */}
        <div className="flex gap-[20px] items-center justify-end px-[20px]">
          {menuItems.map((item) => (
            <motion.a
              key={item.page}
              whileTap={{ scale: 0.98 }}
              href="#"
              onClick={(e) => handleClick(item.page, e)}
              className="navbar-link uppercase whitespace-nowrap px-[10px] py-[10px] cursor-pointer"
              style={{ 
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                fontStyle: 'normal',
                lineHeight: 'normal'
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  )
}

