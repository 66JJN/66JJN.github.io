import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  CMES_CASE_STUDY_ROUTE,
  PORTFOLIO_ROUTE,
  parsePortfolioRoute,
  usePortfolioRoute,
} from './usePortfolioRoute'

describe('portfolio hash routing', () => {
  afterEach(() => {
    window.history.replaceState(null, '', '/#/')
  })

  it('maps the case-study hash and falls back safely', () => {
    expect(parsePortfolioRoute('#/cmes-case-study')).toBe(CMES_CASE_STUDY_ROUTE)
    expect(parsePortfolioRoute('#/unknown')).toBe(PORTFOLIO_ROUTE)
    expect(parsePortfolioRoute('')).toBe(PORTFOLIO_ROUTE)
  })

  it('reacts to browser hash changes', () => {
    window.history.replaceState(null, '', '/#/')
    const { result } = renderHook(() => usePortfolioRoute())

    act(() => {
      window.location.hash = '#/cmes-case-study'
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    })

    expect(result.current).toBe(CMES_CASE_STUDY_ROUTE)
  })

  it('returns to the top when navigating between portfolio pages', () => {
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    window.history.replaceState(null, '', '/#/')
    renderHook(() => usePortfolioRoute())
    scrollTo.mockClear()

    act(() => {
      window.location.hash = '#/cmes-case-study'
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    })

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'auto' })
    scrollTo.mockRestore()
  })
})
