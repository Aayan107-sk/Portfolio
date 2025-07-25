import { useState } from 'react'
import './App.css'
import Navegiation from './navigation'
import HeroSection from './heroSection'
import About from './About'
import Myskills from './Myskills'
import Contact from './Contact'

function App() {


  return (
    <>
    <Navegiation/>
    <HeroSection/>
    <About/>
    <hr />
    <Myskills/>
    <hr />
    <Contact/>
    
      
    </>
  )
}

export default App
