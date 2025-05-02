import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import GameAI from './components/GameAI'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <About />
      <Works />
      <GameAI />
      <Contact />
      <Footer />
    </main>
  )
}