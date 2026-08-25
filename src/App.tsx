import './App.css'
import LandingPage from './components/LandingPage'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    if (prefersReducedMotion.matches) return

    let cancelled = false
    const animationFrame = window.requestAnimationFrame(() => {
      void import('aos').then(({ default: AOS }) => {
        if (cancelled) return

        AOS.init({
          duration: 750,
          once: true,
          easing: 'ease-out-cubic',
          offset: 80,
        })
      })
    })

    return () => {
      cancelled = true
      window.cancelAnimationFrame(animationFrame)
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
