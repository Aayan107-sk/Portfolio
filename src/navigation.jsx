import { useState } from 'react'
import './App.css'

 const Navegiation=()=> {


  return (
    <>
   
     {/* <!--Navigation--> */}

    <nav className="fixed top-0 w-full z-50 bg-grey-900 bg-opacity-90 backdrop-blur-sm border-b border-grey-800">
        <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-amber-300">Portfolio</div>        
                <div className="text-white md: flex space-x-8">
                    <a href="#home" className="hover:text-amber-300 transition-colors duration-300">Home</a>
                    <a href="#about" className="hover:text-amber-300 transition-colors duration-300">About</a>
                    <a href="#MySkills" className="hover:text-amber-300 transition-colors duration-300">Skills</a>
                    <a href="#contact" className="hover:text-amber-300 transition-colors duration-300">Contact</a>
                </div>
              
            </div>
        </div>

                
    </nav>
    </>
  )
}

export default Navegiation;