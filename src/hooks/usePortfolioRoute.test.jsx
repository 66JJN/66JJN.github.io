import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
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
})
