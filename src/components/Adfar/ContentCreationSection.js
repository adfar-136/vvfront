import React from 'react';
import { motion } from 'framer-motion';

const ContentCreationSection = () => {
  const stats = [
    { label: "Reels Created", value: "30+" },
    { label: "Followers", value: "5k+" },
    { label: "YouTube Videos", value: "70+" },
    { label: "Students Mentored", value: "5000+" },
    { label: "Placed Students", value: "200+" },
  ];

  return (
    <div id="content" className="py-20 px-5">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-100">
        Content Creation
      </h2>
      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-6xl font-extrabold text-gray-100">
              {stat.value}
            </div>
            <p className="text-lg mt-2 text-gray-100">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      {/* Links */}
      <div className="mt-12 flex justify-center space-x-6">
        <a 
          href="https://www.instagram.com/variableverse_with_adfar" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="py-2 px-6 bg-indigo-600 text-white font-medium rounded-full shadow-lg hover:bg-indigo-500 transition"
        >
          Check Instagram
        </a>
        <a 
          href="https://www.youtube.com/@variableverse" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="py-2 px-6 bg-indigo-600 text-white font-medium rounded-full shadow-lg hover:bg-indigo-500 transition"
        >
          Visit YouTube
        </a>
        <a 
          href="https://www.linkedin.com/in/adfar-rasheed/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="py-2 px-6 bg-indigo-600 text-white font-medium rounded-full shadow-lg hover:bg-indigo-500 transition"
        >
          Check LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContentCreationSection;
