import { useEffect, useRef } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
const MOBILE_VIEWPORT_QUERY = '(max-width: 1023px)'

const createRevealObserver = (
  elements: HTMLElement[],
  options: IntersectionObserverInit
) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return

      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    })
  }, options)

  elements.forEach((element) => observer.observe(element))
  return observer
}

export function useLandingMotion() {
  const mobilePreviewRevealEnabled = useRef(false)

  useEffect(() => {
    const root = document.documentElement

    if (!root.classList.contains('hero-motion-pending')) return

    let frameId: number | undefined
    let cancelled = false
    const startHeroMotion = () => {
      frameId = window.requestAnimationFrame(() => {
        if (!cancelled) root.classList.remove('hero-motion-pending')
      })
    }

    if ('fonts' in document) {
      void document.fonts.ready.then(startHeroMotion, startHeroMotion)
    } else {
      startHeroMotion()
    }

    return () => {
      cancelled = true
      if (frameId !== undefined) window.cancelAnimationFrame(frameId)
    }
  }, [])

  useEffect(() => {
    if (
      window.matchMedia(REDUCED_MOTION_QUERY).matches ||
      !('IntersectionObserver' in window)
    ) {
      return
    }

    const root = document.documentElement
    const sectionRevealElements = [
      ...document.querySelectorAll<HTMLElement>('[data-reveal]'),
    ]
    const isMobileViewport = window.matchMedia(MOBILE_VIEWPORT_QUERY).matches

    if (isMobileViewport && root.classList.contains('reveal-ready')) {
      mobilePreviewRevealEnabled.current = true
    }

    const previewRevealElements =
      isMobileViewport && mobilePreviewRevealEnabled.current
        ? [...document.querySelectorAll<HTMLElement>('[data-mobile-reveal]')]
        : []
    const revealElements = [...sectionRevealElements, ...previewRevealElements]

    revealElements.forEach((element) => element.classList.add('reveal-pending'))
    root.classList.remove('reveal-ready')

    const sectionObserver = createRevealObserver(sectionRevealElements, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
    })
    const previewObserver =
      previewRevealElements.length > 0
        ? createRevealObserver(previewRevealElements, {
            rootMargin: '0px 0px 120px 0px',
            threshold: 0.01,
          })
        : null

    return () => {
      sectionObserver.disconnect()
      previewObserver?.disconnect()
    }
  }, [])
}
