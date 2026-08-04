import { useEffect, useState } from 'react'

export const PORTFOLIO_ROUTE = 'portfolio'
export const CMES_CASE_STUDY_ROUTE = 'cmes-case-study'

export const parsePortfolioRoute = (hash = '') => (
  hash.replace(/^#\/?/, '').replace(/\/$/, '') === CMES_CASE_STUDY_ROUTE
    ? CMES_CASE_STUDY_ROUTE
    : PORTFOLIO_ROUTE
)

export const usePortfolioRoute = () => {
  const [route, setRoute] = useState(() => parsePortfolioRoute(window.location.hash))

  useEffect(() => {
    const syncRoute = () => setRoute(parsePortfolioRoute(window.location.hash))
    window.addEventListener('hashchange', syncRoute)
    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])

  return route
}
