import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS, showcasing my projects, skills, and experience. It also includes a contact form and integrates with a backend for real-time updates.",
    link1: "https://github.com/adfar-136/vvfront",
    link2: "https://www.variableverse.com/who-am-i",
    image: "/images/portfolio.png",
  },
  {
    name: "EduPiSchool",
    description: "EduPiSchool is an initiative to start a tech campaign in Kashmir to help students find better jobs and quality tech education. This project was created with Node.js and templating engines.",
    link1: "https://github.com/adfar-136/edupiMain",
    link2: "https://edupischool.onrender.com/",
    image: "/images/edupischool.png", 
  },
  {
    name: "VariableVerse",
    description: "VariableVerse is an educational platform aimed at providing free tech education to students globally. It offers live classes, mentorship, project-based learning, and interview preparation, with a focus on MERN stack and other tech domains.",
    link1: "https://github.com/adfar-136/vvbackend",
    link2: "https://www.variableverse.com",
    image: "images/vv.png",
  }  
];

const ProjectsRoadmap = () => {
  return (
    <div className=" py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-indigo-400 drop-shadow-lg">
          Projects Roadmap
        </h2>
        <div className="relative">
          {/* Center Vertical Line (only visible on large screens and above) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 w-1 h-full z-0 hidden lg:block"></div>

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Connector Circle (hidden on small and medium screens) */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 w-10 h-10 rounded-full z-10 border-4 border-gray-900 shadow-lg hidden lg:block"
                style={{ top: "50%" }}
              ></div>

              {/* Project Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`relative w-full max-w-lg mx-8 bg-gradient-to-br from-indigo-700/40 via-purple-700/40 to-gray-700/30 backdrop-blur-md p-6 rounded-3xl shadow-xl ${
                  index % 2 === 0 ? "ml-16" : "mr-16"
                }`}
              >
                {/* Image Container */}
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                {/* Card Content */}
                <div className="mt-6">
                  <h3 className="text-3xl font-semibold text-white drop-shadow-lg">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-gray-300 leading-relaxed">{project.description}</p>
                  <div className="mt-6 flex space-x-4">
                    <a
                      href={project.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 text-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                      View on GitHub
                    </a>
                    <a
                      href={project.link2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 text-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                      Live Preview
                    </a>
                  </div>
                 
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsRoadmap;
