import './App.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CaseStudy from './components/CaseStudy'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <Skills />
      <Projects />
      <CaseStudy />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
