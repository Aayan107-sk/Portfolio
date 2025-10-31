import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaUnity,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiDjango,
} from "react-icons/si";

// Skills Array
const skills = [
  { name: "HTML", icon: <FaHtml5 size={30} /> },
  { name: "CSS", icon: <FaCss3Alt size={30} /> },
  { name: "JavaScript", icon: <FaJsSquare size={30} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={30} /> },
  { name: "React", icon: <FaReact size={30} /> },
  { name: "Node.js", icon: <FaNodeJs size={30} /> },
  { name: "Express.js", icon: <SiExpress size={30} /> },
  { name: "MongoDB", icon: <SiMongodb size={30} /> },
  { name: "Python", icon: <FaPython size={30} /> },
  { name: "Django", icon: <SiDjango size={30} /> },
  { name: "Unity", icon: <FaUnity size={30} /> },
  { name: "Git & GitHub", icon: <FaGithub size={30} /> },
];
import CustomCursor from "./components/CustomCursor";

const Myskills = () => {
  return (
    <section
      id="MySkills"
      className="min-h-screen cursor-none bg-gray-900 text-white flex flex-col justify-center items-center border-b-2 border-black py-12 px-4"
    >
       <CustomCursor />
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-yellow-400">Skills</span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-6 rounded-xl shadow-md text-center font-semibold flex flex-col items-center border-2 border-transparent hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <div className="mb-2 text-4xl text-yellow-400">{skill.icon}</div>
            <div className="text-lg">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Myskills;
