import { useEffect } from 'react'
import { calculateRevealProgress, calculateTileOpacity } from '../motion/scrollReveal'

const setRevealValues = (element, progress) => {
  const roundedProgress = Number(progress.toFixed(3))
  element.style.setProperty('--reveal-opacity', String(roundedProgress))
  element.style.setProperty('--reveal-y', `${((1 - roundedProgress) * 24).toFixed(2)}px`)
}

const setImageWipe = (element, progress) => {
  const tiles = [...element.querySelectorAll('[data-reveal-tile]')]
  tiles.forEach((tile, index) => {
    tile.style.opacity = String(Number(calculateTileOpacity(progress, index, tiles.length).toFixed(3)))
  })
}

export const useScrollReveal = () => {
  useEffect(() => {
    const root = document.documentElement
    const elements = [...document.querySelectorAll('[data-reveal]')]
    const imageElements = [...document.querySelectorAll('[data-image-reveal]')]
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      elements.forEach((element) => setRevealValues(element, 1))
      imageElements.forEach((element) => setImageWipe(element, 1))
      root.dataset.motion = 'reduced'
      return () => root.removeAttribute('data-motion')
    }

    let frameId = 0
    const update = () => {
      frameId = 0
      elements.forEach((element) => {
        const progress = calculateRevealProgress(element.getBoundingClientRect(), window.innerHeight)
        setRevealValues(element, progress)
      })
      imageElements.forEach((element) => {
        const progress = calculateRevealProgress(element.getBoundingClientRect(), window.innerHeight)
        setImageWipe(element, progress)
      })
    }
    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(update)
    }

    update()
    root.dataset.motion = 'ready'
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frameId) window.cancelAnimationFrame(frameId)
      root.removeAttribute('data-motion')
    }
  }, [])
}
