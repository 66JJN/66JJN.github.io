const clamp = (value) => Math.min(1, Math.max(0, value))

export const calculateTileOpacity = (progress, index, total) => {
  if (progress <= 0) return 1
  if (progress >= 1 || total <= 1) return 0
  const order = ((index * 7) % total) / (total - 1)
  return clamp(((1 - progress) * 1.7) - (order * 0.7))
}

export const calculateRevealProgress = ({ top, bottom }, viewportHeight) => {
  if (viewportHeight <= 0) return 1

  const enterStart = viewportHeight * 0.96
  const enterEnd = viewportHeight * 0.72
  const exitEnd = 0
  const exitStart = viewportHeight * 0.18

  if (top >= enterStart) return 0
  if (top > enterEnd) return clamp((enterStart - top) / (enterStart - enterEnd))
  if (bottom <= exitEnd) return 0
  if (bottom < exitStart) return clamp((bottom - exitEnd) / (exitStart - exitEnd))
  return 1
}
