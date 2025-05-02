'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { SiQiita } from 'react-icons/si'

const contacts = [
  {
    label: 'GitHub',
    href: 'https://github.com/kkmia793',
    icon: <FaGithub size={24} />,
    color: '#e6e6e6',
  },
  {
    label: 'Twitter',
    href: 'https://x.com/kkmia793',
    icon: <FaXTwitter size={24} />,
    color: '#00f6ff',
  },
  {
    label: 'Qiita',
    href: 'https://qiita.com/kkmia793',
    icon: <SiQiita size={24} />,
    color: '#55ff66', 
  },
]

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 text-center font-mono">
      <h2 className="hud-title lang-en mb-12">CONTACT</h2>

      <p className="mb-20 text-[#bbbbbb] text-lg lang-jp">
        ご連絡・投稿記事は以下からご覧いただけます。
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="hud-button flex items-center justify-center gap-2 lang-en min-w-[160px]"
            style={{
              borderColor: contact.color,
              color: contact.color,
              boxShadow: `0 0 6px ${contact.color}44`,
              background: 'rgba(255, 255, 255, 0.02)',
            }}
          >
            {contact.icon}
            {contact.label}
          </motion.a>
        ))}
      </div>
    </section>
  )
}
