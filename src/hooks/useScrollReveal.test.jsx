import { render, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useScrollReveal } from './useScrollReveal'

const Probe = () => {
  useScrollReveal()
  return <div data-reveal="probe">Readable content</div>
}

afterEach(() => {
  vi.restoreAllMocks()
  document.documentElement.removeAttribute('data-motion')
})

describe('useScrollReveal', () => {
  it('writes reveal variables from the current viewport geometry', async () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      top: 300,
      bottom: 500,
      height: 200,
      left: 0,
      right: 300,
      width: 300,
      x: 0,
      y: 300,
      toJSON: () => {},
    })

    const { getByText } = render(<Probe />)

    await waitFor(() => expect(document.documentElement).toHaveAttribute('data-motion', 'ready'))
    expect(getByText('Readable content').style.getPropertyValue('--reveal-opacity')).toBe('1')
    expect(getByText('Readable content').style.getPropertyValue('--reveal-y')).toBe('0.00px')
  })

  it('shows content immediately when reduced motion is requested', async () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true })
    const { getByText } = render(<Probe />)

    await waitFor(() => expect(document.documentElement).toHaveAttribute('data-motion', 'reduced'))
    expect(getByText('Readable content').style.getPropertyValue('--reveal-opacity')).toBe('1')
  })
})
