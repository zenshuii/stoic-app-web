import './App.css'
import LandingPage from './components/LandingPage'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
      return
    }

    const sectionRevealElements = [
      ...document.querySelectorAll<HTMLElement>('[data-reveal]'),
    ]
    const previewRevealElements =
      document.documentElement.classList.contains('reveal-ready') &&
      window.matchMedia('(max-width: 1023px)').matches
      ? [...document.querySelectorAll<HTMLElement>('[data-mobile-reveal]')]
      : []
    const revealElements = [...sectionRevealElements, ...previewRevealElements]
    revealElements.forEach((element) => element.classList.add('reveal-pending'))
    document.documentElement.classList.remove('reveal-ready')

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

    const sectionObserver = createRevealObserver(sectionRevealElements, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
    })
    const previewObserver = createRevealObserver(previewRevealElements, {
      rootMargin: '0px 0px 120px 0px',
      threshold: 0.01,
    })

    return () => {
      sectionObserver.disconnect()
      previewObserver.disconnect()
      revealElements.forEach((element) => {
        element.classList.remove('reveal-pending', 'reveal-visible')
      })
    }
  }, [])

  return (
    <>
      <div>
        <LandingPage />
      </div>
    </>
  )
}

export default App
