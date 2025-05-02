'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Works', id: 'works' },
  { name: 'Contact', id: 'contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md px-6 py-4 transition-colors duration-300 ${scrolled ? 'bg-[#0a0a0acc]' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-lg font-bold tracking-widest text-[#ffffff] font-melete">PortFolio</span>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm font-semibold text-[#e6e6e6] hover:text-[#00f6ff] transition font-melete"
            >
              {section.name}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#ffffff] focus:outline-none lang-en"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-center bg-[#0a0a0a]/90 px-4 py-4 rounded-lg border border-[#ffffff]">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm font-semibold text-[#e6e6e6] hover:text-[#00f6ff] transition lang-en"
              onClick={() => setMenuOpen(false)}
            >
              {section.name}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  )
}