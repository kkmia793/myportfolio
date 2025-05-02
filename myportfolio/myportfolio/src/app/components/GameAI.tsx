'use client'

import { motion } from 'framer-motion'

const gameAIProjects = [
  {
    titleJa: '影響マップを用いたゲームAI',
    titleEn: 'Influence Map AI',
    tech: ['Unity', 'C#', 'AI'],
    image: '/images/influencemap.png',
    link: 'https://www.youtube.com/watch?v=E_SrKRpUfeQ', 
  },
  {
    titleJa: 'コースを自動クリアするゲームAI',
    titleEn: 'Genetic Algorithm',
    tech: ['Python','Java','AI'],
    image: '/images/ga.png', 
    link: 'https://github.com/kkmia793/MarioAI', 
  },
]

export default function GameAI() {
  return (
    <section id="gameai" className="min-h-screen py-24 px-6 text-left font-mono">
      <h2 className="hud-title lang-en mb-12">GAME AI</h2>

        <div className="mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto px-4 md:px-0">


        {gameAIProjects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="hud-panel hover:shadow-[0_0_20px_#ffffff88] transition duration-300"
          >
            <img
              src={project.image}
              alt={project.titleEn || project.titleJa}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3
              className={`text-2xl font-bold mb-3 tracking-wide text-center ${
                project.titleJa ? 'lang-jp text-[#ffffff]' : 'lang-en text-[#ffffff]'
              }`}
            >
              {project.titleJa || project.titleEn}
            </h3>
            <div className="flex flex-wrap justify-center">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="m-3 px-4 py-2 text-sm rounded-full bg-[#222] text-white border border-[#00f6ff] lang-en"
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
