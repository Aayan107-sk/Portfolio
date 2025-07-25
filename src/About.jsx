import React from "react";
import  './App.css'

const About=()=>{
  return(
    <>
    {/* about Secation */}

    <section id="about" className="h-screen  bg-gray-900">
      <div className=" w-screen h-screen flex items-center justify-center ">
        <div className="  ml-30 h-120 w-120 flex justify-center items-center ">

          <div className="rounded-full bg-black h-80 w-80 flex justify-center items-center ">
            <img src="me.png" alt="img" className='mb-25 rounded-b-full'/>
          </div>
 

        </div>
        <div className=" mr-30 h-120 w-150  ml-20  ">
          <h1 className="text-4xl font-semibold text-yellow-300 ">About <span className="text-white">Me</span></h1>

          <h1 className="text-3xl text-white font-semibold mt-2">MERN Stack Web Developer..!</h1>

          <p className="text-white  mt-2 "><span className="text-yellow-300 mt-2">Hello! </span>
            I'm <span className="font-semibold">Aayan Shaikh</span>,
            a Full Stack Web Developer who enjoys turning simple ideas into powerful, responsive, and user-friendly web experiences. I work mainly with the MERN stack (MongoDB, Express.js, React.js, and Node.js) and love bringing clean designs to life using Tailwind CSS. 
           </p>
          <p className="text-white  mt-2">
            Coding for me isn’t just a skill it’s something I genuinely enjoy. I like solving problems, building cool stuff, and learning something new every day. Whether it’s the frontend or the backend, I enjoy working on both ends to create complete, functional products.
            
          </p> 
        
            <p className="text-white mt-2">Currently, I’m seeking an internship or entry-level full stack developer role where I can contribute, collaborate, and continue evolving in the tech world.</p>
        </div>

      </div>


    </section>
    
    
    </>

  );

};
export default About;