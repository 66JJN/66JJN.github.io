import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { useScrollReveal } from './hooks/useScrollReveal'
import {
  About,
  Capabilities,
  Contact,
  EngineeringNotes,
  Footer,
  Header,
  Hero,
  SelectedWork,
} from './components/Portfolio'

function App() {
  useScrollReveal()

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <main id="main-content">
          <Hero />
          <SelectedWork />
          <Capabilities />
          <EngineeringNotes />
          <About />
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
