'use client'

import { motion } from 'framer-motion'
import { TbBrandCSharp } from 'react-icons/tb'
import { SiUnity, SiCplusplus } from 'react-icons/si'

const skills = [
  { name: 'C#', icon: <TbBrandCSharp size={64} color="#ffffff" /> },
  { name: 'Unity', icon: <SiUnity size={64} color="#ffffff" /> },
  { name: 'C++', icon: <SiCplusplus size={64} color="#ffffff" /> },
]

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 px-6 font-mono">
      <h2 className="hud-title lang-en mb-12 text-center">ABOUT ME</h2>

      <div className="mb-15" />

      <div className="max-w-4xl mx-auto px-4 md:px-0 text-left">
        <p className="mb-16 text-[#bbbbbb] leading-loose text-lg lang-jp">
          非情報系の専攻ながら、独学でゲーム開発・プログラミングを学んできました。<br />
          現在は C# / Unity / C++ を中心に、ユーザー目線でより面白いゲームをとことん追求しています。
        </p>
      </div>

      {/* スキルアイコン */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto my-24 text-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            {skill.icon}
            <p className="mt-4 text-base text-[#bbbbbb] lang-en">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      {/* 保有資格 & インターンシップ 経験 */}
      <div className="max-w-4xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-[#bbbbbb]">
        {/* インターンシップ経験 */}
        <div>
          <h3 className="text-xl font-bold mb-4 lang-jp">インターンシップ経験</h3>
          <ul className="list-disc list-inside space-y-2 lang-jp">
            <li>株式会社ライフイズテック Unityメンター</li>
            <li>株式会社Cygames ゲームエンジニアインターンシップ</li>
          </ul>
        </div>

        {/* 保有資格 */}
        <div className="md:pl-32">
          <h3 className="text-xl font-bold mb-4 lang-jp">保有資格</h3>
          <ul className="list-disc list-inside space-y-2 lang-jp">
            <li>基本情報技術者試験 合格</li>
            <li>応用情報技術者試験 合格</li>
            <li>TOEIC 810点</li>
            <li>AtCoder 水色レート</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
