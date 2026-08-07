import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'
import { translations } from './contexts/LanguageContext'

describe('portfolio content', () => {
  it('spells the candidate name correctly in both languages', () => {
    expect(translations.th.hero.name).toBe('ศุภกร แซ่พ่าน')
    expect(translations.en.hero.name).toBe('Suphakon Saephan')
  })

  it('publishes CMES and AirSafeTH with accurate public links', () => {
    expect(translations.th.projects.map(({ id }) => id)).toEqual(['cmes', 'airsafeth'])
    expect(translations.en.projects[0].status).toContain('Prototype/Pilot')
    expect(translations.en.projects[1].links.live).toBe('https://air-safe-th.vercel.app/')
  })

  it('keeps FAST FOOD separate from completed work and honest about its learning status', () => {
    const thai = translations.th.learningProject
    const english = translations.en.learningProject

    expect(translations.th.projects.map(({ id }) => id)).toEqual(['cmes', 'airsafeth'])
    expect(thai.github).toBe('https://github.com/66JJN/FAST-FOOD')
    expect(english.github).toBe('https://github.com/66JJN/FAST-FOOD')
    expect(thai).not.toHaveProperty('live')
    expect(english).not.toHaveProperty('live')
    expect(thai.image.src).toBe('/projects/fast-food.png')
    expect(thai.limitation).toContain('TypeScript')
    expect(english.limitation).toContain('TypeScript')
  })

  it('provides a concise bilingual CMES case-study contract', () => {
    const thai = translations.th.cmesCaseStudy
    const english = translations.en.cmesCaseStudy

    expect(translations.th.selectedWork.viewCaseStudy).toBe('อ่านกรณีศึกษา')
    expect(translations.en.selectedWork.viewCaseStudy).toBe('Read case study')
    expect(thai.cases).toHaveLength(3)
    expect(english.cases).toHaveLength(3)
    expect(thai.evidence.items).toHaveLength(4)
    expect(english.evidence.items).toHaveLength(4)
    expect(Object.keys(english).sort()).toEqual(Object.keys(thai).sort())
    expect(thai.limitations.body).toContain('60')
    expect(english.limitations.body).toContain('60')
  })
})

describe('portfolio experience', () => {
  it('shows the Full-stack position, selected work, and Resume action', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'เมนูหลัก' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'สร้างเว็บตั้งแต่หน้าจอไปจนถึงระบบหลังบ้าน' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'CMES' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'AirSafeTH' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'ดาวน์โหลด Resume' })[0]).toHaveAttribute('href', '/Resume_Suphakon_Saephan.pdf')
    expect(screen.getByText('การศึกษา')).toBeInTheDocument()
    expect(screen.getAllByRole('list', { name: 'เทคโนโลยีที่ใช้' })).toHaveLength(2)
  })

  it('shows FAST FOOD as a separate learning project with GitHub only', () => {
    const { container } = render(<App />)
    const section = container.querySelector('.learning-project')

    expect(section).toBeInTheDocument()
    expect(within(section).getByRole('heading', { name: 'FAST FOOD' })).toBeInTheDocument()
    expect(within(section).getByText('กำลังศึกษา · ยังไม่สมบูรณ์')).toBeInTheDocument()
    expect(within(section).getByRole('link', { name: 'ดู GitHub' })).toHaveAttribute('href', 'https://github.com/66JJN/FAST-FOOD')
    expect(section.querySelectorAll('a')).toHaveLength(1)
  })

  it('removes only the optional FAST FOOD image when it is unavailable', () => {
    const { container } = render(<App />)
    const section = container.querySelector('.learning-project')
    const image = within(section).getByRole('img', { name: 'หน้าโปรเจกต์ FAST FOOD สำหรับค้นหาร้านอาหาร' })

    expect(image).toHaveAttribute('src', '/projects/fast-food.png')
    fireEvent.error(image)
    expect(within(section).queryByRole('img')).not.toBeInTheDocument()
    expect(section).toHaveClass('learning-project--no-media')
    expect(within(section).getByRole('heading', { name: 'FAST FOOD' })).toBeInTheDocument()
  })

  it('switches every visible section to English from the header', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'เปลี่ยนภาษาเป็นอังกฤษ' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Building web products from interface to backend' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Projects that show how I think and build' })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
  })

  it('defaults to light and persists a theme change', async () => {
    const user = userEvent.setup()
    render(<App />)
    const lamp = screen.getByRole('button', { name: 'เปลี่ยนเป็นโหมดมืด' })
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(lamp).toHaveAttribute('aria-pressed', 'false')
    await user.click(lamp)
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('portfolio-theme')).toBe('dark')
  })

  it('keeps the lamp cord and handle in one continuous pull group', () => {
    const { container } = render(<App />)
    const lamp = screen.getByRole('button', { name: 'เปลี่ยนเป็นโหมดมืด' })
    const pullGroup = container.querySelector('.lamp__pull-group')
    expect(lamp.querySelector('svg')).toBeInTheDocument()
    expect(pullGroup?.querySelector('.lamp__cord')).toBeInTheDocument()
    expect(pullGroup?.querySelector('.lamp__handle')).toBeInTheDocument()
  })

  it('uses protected Thai word boundaries in large portfolio headings', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { name: 'โปรเจกต์ที่แสดงวิธีคิดและการลงมือทำของผม' })

    expect(heading.querySelector('[data-thai-word="โปรเจกต์"]')).toBeInTheDocument()
  })

  it('marks complete reading groups as scroll reveal targets', () => {
    const { container } = render(<App />)

    expect(container.querySelector('.section-heading')).toHaveAttribute('data-reveal')
    expect(container.querySelector('.project__body')).toHaveAttribute('data-reveal')
    expect(container.querySelectorAll('.capability-grid article[data-reveal]')).toHaveLength(4)
    expect(container.querySelectorAll('.engineering-card[data-reveal]')).toHaveLength(3)
  })

  it('adds a decorative 24-tile wipe to every project image', () => {
    const { container } = render(<App />)
    const wipes = [...container.querySelectorAll('.project-shot .image-wipe')]

    expect(wipes.length).toBeGreaterThan(0)
    wipes.forEach((wipe) => {
      expect(wipe).toHaveAttribute('aria-hidden', 'true')
      expect(wipe.querySelectorAll('[data-reveal-tile]')).toHaveLength(24)
    })
  })

  it('marks CMES links by visual column instead of child position', () => {
    render(<App />)
    const caseStudyLink = screen.getByRole('link', { name: 'อ่านกรณีศึกษา' })
    const links = caseStudyLink.closest('.project-links')

    expect(links).toHaveClass('project-links--cmes')
    expect(screen.getByRole('link', { name: 'Admin' })).toHaveClass('project-link--left')
    expect(screen.getByRole('link', { name: 'User' })).toHaveClass('project-link--right')
  })
})

describe('CMES Case Study navigation', () => {
  afterEach(() => {
    window.history.replaceState(null, '', '/#/')
  })

  it('opens the Case Study from the CMES project and returns to the portfolio', async () => {
    const user = userEvent.setup()
    window.history.replaceState(null, '', '/#/')
    render(<App />)

    await user.click(screen.getByRole('link', { name: 'อ่านกรณีศึกษา' }))

    expect(window.location.hash).toBe('#/cmes-case-study')
    expect(screen.getByRole('heading', { level: 1, name: /จากคิวบนหน้าเว็บ/ })).toBeInTheDocument()

    await user.click(screen.getAllByRole('link', { name: /กลับ Portfolio/ })[0])

    expect(screen.getByRole('heading', { level: 1, name: 'สร้างเว็บตั้งแต่หน้าจอไปจนถึงระบบหลังบ้าน' })).toBeInTheDocument()
  })

  it('falls back to the portfolio for an unknown hash', () => {
    window.history.replaceState(null, '', '/#/missing')
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: 'สร้างเว็บตั้งแต่หน้าจอไปจนถึงระบบหลังบ้าน' })).toBeInTheDocument()
  })
})
