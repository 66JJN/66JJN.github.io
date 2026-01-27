import './App.css'
import Hero from './components/Hero'
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
    <div className="app">
      <Hero />
      <WhyFrontend />
      <TechStack />
      <Projects />
      <ProblemSolving />
      <About />
      <Learning />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
