import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { LanguageProvider } from '../contexts/LanguageContext'
import { ThemeProvider } from '../contexts/ThemeContext'
import { CMESCaseStudy } from './CMESCaseStudy'

const renderPage = () => render(
  <ThemeProvider>
    <LanguageProvider>
      <CMESCaseStudy />
    </LanguageProvider>
  </ThemeProvider>,
)

describe('CMES Case Study', () => {
  it('shows a concise overview, three cases, evidence, AI use, and limitations', () => {
    const { container } = renderPage()

    expect(screen.getByRole('heading', { level: 1, name: /จากคิวบนหน้าเว็บ/ })).toBeInTheDocument()
    expect(container.querySelectorAll('.case-study-card')).toHaveLength(3)
    expect(container.querySelectorAll('.case-study-evidence li')).toHaveLength(4)
    expect(screen.getByText(/AI-ASSISTED DEVELOPMENT/i)).toBeInTheDocument()
    expect(screen.getByText(/enterprise SLA/)).toBeInTheDocument()
    expect(container.querySelectorAll('details')).toHaveLength(3)
  })

  it('switches every Case Study section to English', async () => {
    const user = userEvent.setup()
    renderPage()

    await user.click(screen.getByRole('button', { name: 'เปลี่ยนภาษาเป็นอังกฤษ' }))

    expect(screen.getByText('Recoverable realtime queue')).toBeInTheDocument()
    expect(screen.getByText('Using AI for speed without outsourcing ownership')).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
  })
})
