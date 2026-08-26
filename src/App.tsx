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

    const revealElements = [
      ...document.querySelectorAll<HTMLElement>('[data-reveal]'),
      ...(window.matchMedia('(max-width: 1023px)').matches
        ? document.querySelectorAll<HTMLElement>('[data-mobile-reveal]')
        : []),
    ]
    revealElements.forEach((element) => element.classList.add('reveal-pending'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
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
