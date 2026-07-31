import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
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
})
