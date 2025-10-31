import React from "react";
import "./App.css";
import CustomCursor from "./components/CustomCursor";

const About = () => {
  return (
    <>
     <CustomCursor />
      {/* About Section */}
      <section
        id="about"
        className="h-auto pt-10 min-h-screen bg-gray-900 border-b-2 border-black cursor-none flex flex-col justify-center items-center"
      >

        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-10 gap-10 md:gap-40">

          {/* Image Section */}
          <div className="flex justify-center items-center">
            <div className="rounded-full bg-black h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 flex justify-center items-center">
              <img
                src="me.png"
                alt="img"
                className="rounded-b-full mb-18 sm:mb-6 md:mb-25 object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-yellow-300">
              About <span className="text-white">Me</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl text-white font-semibold mt-3">
              MERN Stack Web Developer..!
            </h2>

            <p className="text-white mt-3 leading-relaxed text-sm sm:text-base">
              <span className="text-yellow-300">Hello! </span>
              I'm <span className="font-semibold">Aayan Shaikh</span>, a Full Stack Web Developer who enjoys turning simple ideas into powerful, responsive, and user-friendly web experiences. I work mainly with the MERN stack (MongoDB, Express.js, React.js, and Node.js) and love bringing clean designs to life using Tailwind CSS.
            </p>

            <p className="text-white mt-3 leading-relaxed text-sm sm:text-base">
              Coding for me isn’t just a skill — it’s something I genuinely enjoy. I like solving problems, building cool stuff, and learning something new every day. Whether it’s the frontend or the backend, I enjoy working on both ends to create complete, functional products.
            </p>

            <p className="text-white mt-3 leading-relaxed text-sm sm:text-base">
              Currently, I’m seeking an entry-level full stack developer role where I can contribute, collaborate, and continue evolving in the tech world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
