import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { CMESCaseStudy } from './components/CMESCaseStudy'
import { useScrollReveal } from './hooks/useScrollReveal'
import { CMES_CASE_STUDY_ROUTE, usePortfolioRoute } from './hooks/usePortfolioRoute'
import {
  About,
  Capabilities,
  Contact,
  EngineeringNotes,
  Footer,
  Header,
  Hero,
  LearningProject,
  SelectedWork,
} from './components/Portfolio'

const PortfolioPage = () => (
  <>
    <Header />
    <main id="main-content">
      <Hero />
      <SelectedWork />
      <LearningProject />
      <Capabilities />
      <EngineeringNotes />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
)

function App() {
  const route = usePortfolioRoute()
  useScrollReveal()

  return (
    <ThemeProvider>
      <LanguageProvider>
        {route === CMES_CASE_STUDY_ROUTE ? <CMESCaseStudy /> : <PortfolioPage />}
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
