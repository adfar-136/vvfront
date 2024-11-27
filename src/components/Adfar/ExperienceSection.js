import React from "react";

const ExperienceRoadmap = () => {
  const experiences = [
    {
      role: "Backend Developer",
      company: "98thPercentile",
      logo: "/images/98thlogo.jpeg", // Example path to logo
      duration: "May 2021 - Sep 2021",
      description:
        "Started my career as a Backend Developer. Despite challenges and setbacks, this role was a stepping stone to learning backend development.",
    },
    {
      role: "Coding Instructor",
      company: "CodeVidhya & Emeritus",
      logo: "/images/emeritus.jpg", // Example path to logo
      duration: "Nov 2021 - july 2022",
      description:
        "Taught JavaScript and Python globally, helping kids understand coding basics while improving my own teaching skills.",
    },
    {
      role: "Technical Associate & Web Lead",
      company: "Geekster",
      logo: "/images/geekster.jpeg", // Example path to logo
      duration: "Mar 2022 - Apr 2023",
      description:
        "Contributed as a Web Lead and Technical Associate while mastering the MERN stack and gaining hands-on experience.",
    },
    {
        role: "Full-time Instructor",
        company: "Newton School",
        logo: "/images/newtonschool.jpeg", // Example path to logo
        duration: "May 2023 - Sep 2023",
        description:
          "Focused on mentoring students in advanced development concepts during my time as a full-time instructor.",
      },
    {
      role: "MERN Instructor",
      companies: "Newton School, Upgrad, Blackbucks, LPU (Offline)",
      logo: "/images/lpu.png", // Example path to logo
      duration: "May 2022 - Present",
      description:
        "Delivered quality training to online and offline batches focusing on full-stack development and interview preparation.",
    },
    
    {
      role: "Founder",
      companies: "LaMiCons & EduPiSchool (VariableVerse)",
      logo: "/logo.png", // Example path to logo
      duration: "May 2023 - Present",
      description:
        "Founded two startups focused on education: LaMiCons for outsourcing educators and EduPiSchool for providing free education.",
    },
    {
      role: "Senior Mern Stack Instructor",
      companies: "Cuvette, Crio",
      logo: "/images/cuvette.jpeg", // Example path to logo
      duration: "Mar 2024 - Present",
      description:
        "Taking advanced batches and mentoring students by helping them secure jobs and assisting them with projects.",
    },
  ];

  return (
    <section id="roadmap" className="py-20 text-gray-100 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-100 mt-24 mb-4">My 4-Year Journey in Tech</h2>
          <p className="text-lg text-gray-100">
            From being a nobody to teaching globally and starting my own ventures, here's a timeline of my tech journey.
          </p>
        </div>

        {/* Roadmap */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Connector Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full"></div>

                {/* Experience Content */}
                <div
                  className={`relative w-full max-w-md p-6 rounded-lg shadow-lg bg-gradient-to-br ${
                    index % 2 === 0
                      ? "ml-10 text-left from-indigo-600 to-indigo-800"
                      : "mr-10 text-right from-indigo-700 to-indigo-900"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    {/* Company Logo */}
                    <img
                      src={exp.logo}
                      alt={`${exp.company || exp.companies} logo`}
                      className="w-10 h-10 rounded-full shadow-md mr-4"
                    />
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <p className="text-sm font-medium text-indigo-200 mb-1">
                    {exp.company || exp.companies}
                  </p>
                  <p className="text-sm text-indigo-300 mb-3">{exp.duration}</p>
                  <p className="text-indigo-100">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceRoadmap;
