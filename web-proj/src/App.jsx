import './App.css'
import {Navbar} from './components/Navbar'
import {Home} from './Pages/Home'
import {Reserve} from './Pages/Reserve'
import {About} from './Pages/About'
import {ContactUs} from './Pages/ContactUs'
import {Log_in} from './Pages/Log_In'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookcourt" element={<Reserve />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Log_in />} />
      </Routes>
      
      
      

    </>
  )
}

export default App
