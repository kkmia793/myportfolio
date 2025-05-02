'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center px-4 bg-noise bg-hud-overlay"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-melete text-white text-[3.5rem] md:text-[5rem] tracking-[0.03em] leading-tight"
      >
        KOTA KIMURA
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-3/4 max-w-sm h-[2px] bg-gradient-to-r from-[#00f6ff] to-[#ff00c8] my-6 rounded-full shadow-[0_0_10px_#00f6ff]"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-lg md:text-xl text-[#cccccc] lang-en tracking-wide"
      >
        GAME ENGINEER
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-10 hud-button lang-en"
        onClick={() => {
          const about = document.getElementById('about')
          about?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        ENTER
      </motion.button>
    </section>
  )
}