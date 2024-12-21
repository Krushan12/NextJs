import Projects from '@/components/Projects'
import Hero from '../components/Hero'
import Skills from '@/components/Skills'
import Contact from './contact/page'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}