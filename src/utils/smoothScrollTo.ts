export const smoothScrollTo = (targetY: number, baseDuration = 1000) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.scrollTo(0, targetY)
    return
  }

  const startY = window.scrollY
  const diff = targetY - startY

  if (diff === 0) {
    return
  }

  const duration = Math.min(Math.max(Math.abs(diff) * 0.8, 700), baseDuration)
  let start: number | null = null

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  const step = (timestamp: number) => {
    if (!start) start = timestamp
    const elapsed = timestamp - start
    const progress = Math.min(elapsed / duration, 1)
    const ease = easeInOutCubic(progress)
    window.scrollTo(0, startY + diff * ease)

    if (elapsed < duration) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}
