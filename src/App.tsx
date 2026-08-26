import './App.css'
import LandingPage from './components/LandingPage'
import { useLandingMotion } from './hooks/useLandingMotion'

function App() {
  useLandingMotion()
  return <LandingPage />
}

export default App
