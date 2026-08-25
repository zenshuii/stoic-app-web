import './App.css'
import LandingPage from './components/LandingPage'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    AOS.init({
      disable: prefersReducedMotion.matches,
      duration: 750,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
    })
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
