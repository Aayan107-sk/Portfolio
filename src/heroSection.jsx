import { useState, useRef } from "react";
import "./App.css";
import { Typewriter } from "react-simple-typewriter";
import CustomCursor from "./components/CustomCursor";

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import About from "./About";
import Myskills from "./Myskills";
import Contact from "./Contact";
import Projects from "./Projects";

const HeroSection = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <CustomCursor />
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-b from-black via-gray-900 to-black text-yellow-300 overflow-hidden  cursor-none"
      >
        {/* Left Text Section */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 sm:px-10 md:px-20 py-10 w-full md:w-1/2 z-10">
          <h1 className="text-2xl sm:text-3xl font-semibold">Hi there </h1>
          <h1 className="text-3xl sm:text-4xl mt-2 font-bold">
            I'm <span className="text-white">Aayan Shaikh</span>
          </h1>

          <h1 className="text-2xl sm:text-4xl mt-3 font-semibold">
            A{" "}
            <span className="text-white">
              <Typewriter
                words={["Web Developer...", "MERN Stack Developer...", ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="text-white mt-5 text-sm sm:text-base max-w-md leading-relaxed">
            A passionate Full Stack Developer who loves crafting elegant, scalable, and responsive web experiences using
            the MERN stack. I focus on writing clean, maintainable code and turning creative ideas into digital reality.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-6 flex-wrap gap-4">
            {[
              {
                icon: <FaWhatsapp />,
                href: "https://wa.me/919004208319",
              },
              {
                icon: <FaLinkedin />,
                href: "https://www.linkedin.com/in/aayan777",
              },
              {
                icon: <FaEnvelope />,
                href: "mailto:aayan.777107@gmail.com",
              },
              {
                icon: <FaInstagram />,
                href: "https://www.instagram.com/ayan___107",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-2 border-yellow-300 rounded-full w-11 h-11 flex items-center justify-center text-xl hover:bg-yellow-300 hover:text-black transition-all duration-300 shadow-md hover:shadow-yellow-400/40"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={handleScroll}
            className="mt-8 text-white border-2 border-yellow-300 bg-gradient-to-r from-yellow-300 to-transparent hover:from-yellow-400 hover:to-white hover:text-black px-8 py-2.5 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/40"
          >
            More About Me
          </button>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center items-center w-full md:w-1/2 py-8 md:py-0">
          <div className="relative group">
            <div className="h-52 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex justify-center items-center shadow-2xl shadow-purple-700/50 animate-float">
              <img
                src="me.png"
                alt="Aayan"
                className="rounded-b-full mb-10 sm:mb-14 w-58 sm:w-52 md:w-65 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 blur-3xl bg-purple-500 opacity-30 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-10 h-10 sm:w-16 sm:h-16 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-14 h-14 sm:w-24 sm:h-24 bg-pink-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-yellow-500 rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* Other Sections */}
      <About />
      <Myskills />
      <Projects />
      <Contact />
    </>
  );
};

export default HeroSection;
