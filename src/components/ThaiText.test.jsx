import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { segmentHeadline } from '../text/segmentHeadline'
import { ThaiText } from './ThaiText'

describe('ThaiText', () => {
  it('keeps protected portfolio terms in one segment', () => {
    expect(segmentHeadline('ทักษะที่ใช้จริงในโปรเจกต์')).toContain('โปรเจกต์')
  })

  it('keeps compound words from the hero heading together', () => {
    const segments = segmentHeadline('สร้างเว็บตั้งแต่หน้าจอไปจนถึงระบบหลังบ้าน')

    expect(segments).toContain('หน้าจอ')
    expect(segments).toContain('หลังบ้าน')
  })

  it('renders a protected Thai term as one non-breaking word', () => {
    render(<h2><ThaiText>ทักษะที่ใช้จริงในโปรเจกต์</ThaiText></h2>)

    expect(screen.getByText('โปรเจกต์')).toHaveAttribute('data-thai-word', 'โปรเจกต์')
  })
})
