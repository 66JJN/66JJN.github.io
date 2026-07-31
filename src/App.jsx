import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
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
