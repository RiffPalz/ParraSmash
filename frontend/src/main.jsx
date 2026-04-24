import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.jsx'
import './index.css'

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: false,       // animate every time (scroll up & down)
  mirror: true,      // reverse animation when scrolling back up
  offset: 80,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)