'use client'

import { motion } from 'framer-motion'

const works = [
    {
      titleJa: 'アイノカタチ',
      titleEn: '',
      tech: ['Unity', 'C#', '3D'],
      image: '/images/loveshape.png',
      link: 'https://unityroom.com/games/loveshape',
    },
    {
      titleJa: '秒速で逢いたいっ！',
      titleEn: '',
      tech: ['Unity', 'C#', '2D'],
      image: '/images/tanabata.png',
      link: 'https://unityroom.com/games/tanabata',
    },
    {
      titleJa: '雪跡',
      titleEn: '',
      tech: ['Unity', 'C#', '2D', 'Maze'],
      image: '/images/snowtrail.png',
      link: 'https://unityroom.com/games/snowtrail',
    },
    {
      titleJa: '',
      titleEn: 'Human Apex',
      tech: ['Unity', 'C#', 'MiniGame'],
      image: '/images/humanapex.png',
      link: 'https://unityroom.com/games/humanapex',
    },
  ]
  

export default function Works() {
  return (
    <section id="works" className="min-h-screen py-24 px-6 text-right font-mono">
      <h2 className="hud-title lang-en mb-12">WORKS</h2>

      <div className="mb-20" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {works.map((work, index) => (
          <motion.a
            key={index}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="hud-panel hover:shadow-[0_0_20px_#ffffff88] transition duration-300"
          >
            <img
              src={work.image}
              alt={work.titleEn || work.titleJa}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3
              className={`text-2xl font-bold mb-3 tracking-wide text-center ${
                work.titleJa ? 'lang-jp text-[#ffffff]' : 'lang-en text-[#ffffff]'
              }`}
            >
              {work.titleJa || work.titleEn}
            </h3>
            <div className="flex flex-wrap justify-center">
                {work.tech.map((tech) => (
                    <span
                    key={tech}
                    className="m-2 px-4 py-2 text-sm rounded-full bg-[#222] text-white border border-[#00f6ff] lang-en"
                    >
                    {tech}
                    </span>
                ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}