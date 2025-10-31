import React from "react";
import CustomCursor from "./components/CustomCursor";

const Projects = () => {
  const projectData = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind CSS to showcase my skills, projects, and contact info.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "Imagify",
      description:
        "An AI-powered text-to-image generator built using the MERN stack, turning your imagination into stunning visuals with just a few words.",
      tech: ["reactJS", "TailwindCSS", "MongoDB", "Express.js", "Node.js"],
      link: "https://aazo-frontend.vercel.app/",
    },
    {
      title: "E-Commerce Web",
      description:
        "Developed a full-stack e-commerce platform using modern web technologies.",
      tech: ["MongoDB", "Express.js", "NextJS", "Node.js"],
      link: "https://github.com/Aayan107-sk/E-commerce",
    },
    {
      title: "Weather Website",
      description:
        "Developed full stack application with the help of local API to provide weather forecast for a week.",
      tech: ["Next.js", "TailwindCSS", "api"],
      link: "https://github.com/Aayan107-sk/Weather-App-Project",
    },
    {
      title: "Notepad Website",
      description:
        "A minimal and responsive online notepad app built with React, allowing users to create, edit, and manage notes seamlessly in the browser.",
      tech: ["Next.js", "TailwindCSS"],
      link: "https://notepad-git-main-aayan107-sks-projects.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-16 sm:py-20 px-4 sm:px-8 md:px-12 border-b-2 border-black"
    >
       <CustomCursor />

      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-yellow-400">Projects</span>
        </h1>
        <p className="text-gray-300 mb-10 text-sm sm:text-base max-w-2xl mx-auto">
          Here are some of the projects I've worked on using modern web
          technologies.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-yellow-400/20 flex flex-col"
            >
              {/* Project Content */}
              <div className="p-6 sm:p-8 text-left flex flex-col flex-grow">
                <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-yellow-400 px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-yellow-400 font-medium hover:underline text-sm sm:text-base"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;