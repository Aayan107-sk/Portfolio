import { useState,useRef } from 'react'
import './App.css'
import { Typewriter } from 'react-simple-typewriter';


import { FaWhatsapp, FaInstagram,FaLinkedin,FaEnvelope    } from 'react-icons/fa'; //add a labry for icons
import About from './About';



const HeroSection=()=> {
     const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };




  return (
    <>
    {/* HeroSection */}
    <section id='home' className='h-screen flex bg-black'>
      <div className="h-screen w-screen text-yellow-300  font-semibold flex items-center justify-center  bg-black ">
        <div className=" h-100 w-130 mr-20 ">
          <h1 className='text-3xl  '>Hi there !</h1>
          <h1 className='text-4xl mt-2'>I'm <span className='text-white ' >Aayan Shaikh</span></h1>

          <h1 className='text-4xl mt-2'>
            A{' '}
          <span className="text-white ">
            <Typewriter
              words={['Web Developer...', 'MERN Stack Developer...']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            /> </span></h1>

          <p className='text-white mt-5'>A Full Stack Web Developer skilled in the MERN stack and tools like Tailwind CSS, Git, and Firebase. I love building responsive, user-friendly apps and writing clean, efficient code. </p>

          {/* icon and contact likns */}
          <div className="flex   mt-4 ">
            <h1 className='rounded-full border-2 border-yellow-300 w-10 h-10  mt-4 mr-2 hover:bg-yellow-300 hover:border-white'>
              <a
                  href="https://wa.me/919004208319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex justify-center items-center pt-1.5 hover:text-black text-2xl"
                >
                  <FaWhatsapp />
              </a>
            </h1>
            <h1 className='rounded-full  border-2 border-yellow-300  w-10 h-10 mt-4 mr-2 hover:bg-yellow-300 hover:border-white'>
              <a
                href="https://www.linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex justify-center items-center pt-1.5 hover:text-black text-2xl"
              >
                <FaLinkedin />
              </a>
            </h1>
            <h1 className='rounded-full  border-2 border-yellow-300  w-10 h-10 mt-4 mr-2 hover:bg-yellow-300 hover:border-white'>
              <a
                href="mailto:aayan.777107@gmail.com"
                className="text-white flex justify-center items-center pt-1.5 hover:text-black text-2xl"
              >
                <FaEnvelope />
              </a>
            </h1>
          
            <h1 className='rounded-full border-2 border-yellow-300 w-10 h-10 mt-4 mr-2 hover:bg-yellow-300 hover:border-white '>
             <a 
                  href="https://www.instagram.com/ayan___107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex justify-center items-center pt-1.5 hover:text-black text-2xl"
              >
                <FaInstagram />
              </a>

            </h1>
        </div>
        {/* <button className='bg-yellow-300 text-xl text-white pl-2  pb-1 pr-2  text-center mt-6  border-2 border-white rounded-full w-45 h-10'>About me</button> */}
        <button onClick={handleScroll} className=" mt-6 text-white   border-2 border-yellow-300 bg-gradient-to-r from-yellow-300 to-black hover:from-yellow-400 hover:to-white hover:text-black px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-glow  ">More About Me
                </button>

                
            
      </div>


      <div className=" h-64 w-64 ml-20  flex justify-center items-center rounded-full bg-purple-500">
        <img src="me.png" alt="img" className='mb-20 rounded-b-full'/>
      </div>
      </div>
     

      {/* floating element */}
       <div className="absolute to-20 left-10 w-16 h-16  bg-purple-500 rounded-full opacity-20 float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24  bg-pink-500 rounded-full opacity-20 animation-pulse float"></div>
        <div className="absolute top-1/2  left-20  w-8 h-8  bg-blue-500 rounded-full opacity-30 animation-ping float"></div>
        <div  className="absolute bottom-1/3 right-1/4 w-12 h-12  bg-yellow-500 rounded-full opacity-20 animation-bounce float"></div>
        
    </section>

      
    </>
  )
}

export default HeroSection;