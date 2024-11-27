import React from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <div className="relative text-white py-20 px-5 overflow-hidden flex flex-col md:flex-row items-center">
     {/* SVG Background */}

      {/* Left Section: Image */}
      <motion.div
        className="relative z-20 md:w-1/3 mb-8 md:mb-0 md:mr-8 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="images/adfa.jpg" // Replace with your actual image URL
          alt="Adfar's portrait"
          className="rounded-full w-60 h-60 object-cover shadow-lg border-4 border-white"
        />
      </motion.div>

      {/* Right Section: Content */}
      <motion.div
        className="relative z-20 md:w-1/2 text-center md:text-left px-6 md:px-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold">
          Hi, I'm Adfar
        </h1>
        <p className="text-lg md:text-2xl mt-4 mb-20 font-light">
          MERN Stack Developer | Educator | Content Creator
        </p>

        <div className="mt-8 space-y-4 text-lg md:text-xl leading-relaxed">
          <p>
            As the founder of <strong>VariableVerse</strong>, my mission is to democratize tech education. 
            I believe mentorship and guidance should be accessible to everyone, so I offer free live classes on MERN, 
            JavaScript, and more.
          </p>
          <p>
            With <strong>5k+ followers</strong> on Instagram, LinkedIn and a growing YouTube channel, I aim to reach more students globally, 
            delivering premium content at zero cost. Join me in this journey to make learning impactful and inclusive.
          </p>
          <p>
            Let's break barriers together—creating a world where tech education isn't a privilege but a right.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroSection;
