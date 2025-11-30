'use client'

import { motion } from 'framer-motion'

interface HomePageProps {
  onNavigate?: (page: string) => void
}

const imgSuitHeart1 = "http://localhost:3845/assets/259a027ca82786d1f16d3c6cd673b9bccb53d2e8.png"
const imgSuitClub1 = "http://localhost:3845/assets/9e08bbd400706887ebe2d9669521db4893b1396f.png"
const imgSuitDiamond2 = "http://localhost:3845/assets/954ee3f218b83ad9d64c99e5cd6109f70fd1d3e9.png"
const imgSuitSpade2 = "http://localhost:3845/assets/0795d5c0441deded79bbff2b65c5fa6416d68519.png"

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      {/* Main Title Section */}
      <section className="w-full flex items-end justify-center p-[10px] py-[128px]">
        <div className="w-full max-w-[1440px] text-center">
          <div 
            className="font-[var(--font-montserrat)] font-semibold text-[96px] leading-normal text-center"
            style={{
              background: 'linear-gradient(to right, #000000 0%, #C84300 76.442%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'var(--font-montserrat), sans-serif',
            }}
          >
            <div style={{ marginBottom: 0 }}>PRINCETON</div>
            <div>GAME THEORY CLUB</div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="w-full flex items-center justify-center px-[60px] py-[46px]">
        <p 
          className="font-[var(--font-alegreya)] font-normal text-[32px] text-center text-black max-w-[1320px]"
          style={{
            fontFamily: 'var(--font-alegreya), serif'
          }}
        >
          Fostering a community built on a shared love of puzzles and strategy idk
        </p>
      </section>

      {/* Buttons Section */}
      <section className="w-full flex items-start justify-center gap-[29px] px-[10px] py-[20px]">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate?.('join')}
          className="bg-[#c84300] h-[45px] flex items-center justify-center px-[15px] py-[8px] rounded-[5px] cursor-pointer"
        >
          <p className="font-[var(--font-montserrat)] font-normal text-[24px] text-white whitespace-nowrap">
            Join Us
          </p>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate?.('about')}
          className="border border-[#c84300] border-solid h-[45px] flex items-center justify-center px-[15px] py-[8px] rounded-[5px] cursor-pointer bg-transparent"
        >
          <p className="font-[var(--font-montserrat)] font-normal text-[24px] text-[#c84300] whitespace-nowrap">
            Learn More
          </p>
        </motion.button>
      </section>

      {/* Suits Section */}
      <section className="w-full flex items-start justify-center gap-[10px] px-[10px] py-[20px]">
        <div className="h-[76px] w-[77px] relative">
          <img alt="Heart suit" className="w-full h-full object-contain pointer-events-none" src={imgSuitHeart1} />
        </div>
        <div className="h-[76px] w-[75px] relative">
          <img alt="Club suit" className="w-full h-full object-contain pointer-events-none" src={imgSuitClub1} />
        </div>
        <div className="h-[76px] w-[63px] relative">
          <img alt="Diamond suit" className="w-full h-full object-contain pointer-events-none" src={imgSuitDiamond2} />
        </div>
        <div className="h-[76px] w-[68px] relative">
          <img alt="Spade suit" className="w-full h-full object-contain pointer-events-none" src={imgSuitSpade2} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[rgba(200,67,0,0.12)] w-full flex flex-col items-center min-h-[380px] py-0 px-0">
        <div className="w-full flex items-end justify-center p-[10px] h-[132px]">
          <h2 className="font-[var(--font-montserrat)] font-semibold text-[64px] text-black text-center">
            Questions?
          </h2>
        </div>
        <div className="w-full flex items-center justify-center px-[150px] py-[10px] min-h-[189px]">
          <p 
            className="font-[var(--font-alegreya)] font-normal text-[32px] text-black text-center max-w-[1140px]"
            style={{
              fontFamily: 'var(--font-alegreya), serif'
            }}
          >
            Have questions about how to get a 4.0 gpa? Perfect! Please email us!
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate?.('contact')}
          className="bg-[#c84300] h-[59px] flex items-center justify-center px-[15px] py-[6px] rounded-[5px] w-[226px] cursor-pointer"
        >
          <p className="font-[var(--font-montserrat)] font-normal text-[24px] text-white whitespace-nowrap">
            Email Us
          </p>
        </motion.button>
      </section>
    </>
  )
}

