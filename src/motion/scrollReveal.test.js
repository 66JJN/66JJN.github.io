import { describe, expect, it } from 'vitest'
import { calculateRevealProgress, calculateTileOpacity } from './scrollReveal'

describe('calculateRevealProgress', () => {
  const viewportHeight = 1000

  it('keeps an element hidden while it is below the entry band', () => {
    expect(calculateRevealProgress({ top: 980, bottom: 1180 }, viewportHeight)).toBe(0)
  })

  it('returns partial progress while an element enters the viewport', () => {
    expect(calculateRevealProgress({ top: 840, bottom: 1040 }, viewportHeight)).toBeCloseTo(0.5)
  })

  it('keeps an element fully visible through the reading area', () => {
    expect(calculateRevealProgress({ top: 400, bottom: 600 }, viewportHeight)).toBe(1)
  })

  it('fades an element out after it passes the top edge', () => {
    expect(calculateRevealProgress({ top: -200, bottom: 0 }, viewportHeight)).toBe(0)
  })
})

describe('calculateTileOpacity', () => {
  it('covers images before reveal and clears every tile at full progress', () => {
    expect(calculateTileOpacity(0, 12, 24)).toBe(1)
    expect(calculateTileOpacity(1, 12, 24)).toBe(0)
  })

  it('reveals tiles in a staggered deterministic order', () => {
    expect(calculateTileOpacity(0.5, 0, 24)).toBeGreaterThan(calculateTileOpacity(0.5, 23, 24))
  })
})
