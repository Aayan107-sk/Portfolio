import { useState } from 'react'
import './App.css'
import Navegiation from './navigation'
import HeroSection from './heroSection'
import About from './About'
import Myskills from './Myskills'
import Contact from './Contact'
import { Routes, Route,useLocation } from 'react-router-dom'
import Projects from './Projects'



function App() {

      

  return (
    <>
    <Navegiation/>
    <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Myskills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
        
      </Routes>
      
    </>
  )
}

export default App
