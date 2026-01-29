import './App.css'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import HeroNew from './components/HeroNew'
import WhyFrontend from './components/WhyFrontend'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import ProblemSolving from './components/ProblemSolving'
import About from './components/About'
import Learning from './components/Learning'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <HeroNew />
        <div id="why-frontend">
          <WhyFrontend />
        </div>
        <div id="tech-stack">
          <TechStack />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="problem-solving">
          <ProblemSolving />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="learning">
          <Learning />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
