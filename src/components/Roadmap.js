import React from "react";

const Roadmap = () => {
  const stages = [
    {
      title: "HTML & CSS",
      description: "The building blocks of the web.",
      details: [
        "HTML Semantics: Structure your pages correctly.",
        "CSS Basics: Styling with selectors and properties.",
        "Flexbox & Grid: Responsive layouts made easy.",
        "Media Queries: Building for different devices.",
        "CSS Animations: Adding life to your designs.",
      ],
    },
    {
      title: "Capstone Project 1: Responsive Portfolio Website",
      description: "Build a responsive portfolio website showcasing your skills.",
      details: [
        "HTML Semantics and Accessibility",
        "CSS Flexbox and Grid Layouts",
        "Responsive Design with Media Queries",
        "CSS Animations for interactive elements",
      ],
    },
    {
      title: "JavaScript",
      description: "Master programming fundamentals and DOM manipulation.",
      details: [
        "Variables and Data Types",
        "Functions and Scope",
        "DOM Manipulation and Events",
        "ES6 Features (Arrow Functions, Destructuring, etc.)",
        "Asynchronous JS: Promises and Async/Await",
      ],
    },
    {
      title: "Capstone Project 2: Interactive Quiz App",
      description: "Create a quiz app using JavaScript and DOM manipulation.",
      details: [
        "Dynamic Questions with Randomized Options",
        "User Interaction Handling (Click Events)",
        "Scoring System and Results Display",
        "LocalStorage for Saving Scores",
      ],
    },
    {
      title: "React",
      description: "Learn component-based architecture and state management.",
      details: [
        "Components and JSX",
        "Props and State",
        "Lifecycle Methods",
        "React Hooks (useState, useEffect)",
        "Routing with React Router",
      ],
    },
    {
      title: "Capstone Project 3: Task Manager App",
      description: "Build a React app for managing tasks with CRUD functionality.",
      details: [
        "Dynamic UI with React Components",
        "State Management for Task Handling",
        "React Router for Page Navigation",
        "LocalStorage for Persistence",
      ],
    },
    {
      title: "Node.js",
      description: "Build backend APIs with Node and Express.",
      details: [
        "Introduction to Node.js",
        "Working with File System and Streams",
        "Building REST APIs",
        "Middleware and Routing",
        "Connecting to Databases",
      ],
    },
    {
      title: "Express.js",
      description: "Create scalable server-side logic.",
      details: [
        "Setting up Express Applications",
        "Middleware Functions",
        "Routing and Controllers",
        "Error Handling",
        "Building Authentication Systems",
      ],
    },
    {
      title: "MongoDB",
      description: "Manage data with a powerful NoSQL database.",
      details: [
        "Introduction to MongoDB",
        "CRUD Operations",
        "Working with Mongoose",
        "Data Relationships",
        "Indexing and Performance Optimization",
      ],
    },
    {
      title: "Capstone Project 4: Blog App (MERN)",
      description: "Develop a full-stack MERN blog application.",
      details: [
        "React Frontend for Blog Post Creation and Display",
        "Node/Express Backend for API Handling",
        "MongoDB Database for Post Storage",
        "JWT Authentication for User Login",
      ],
    },
    {
      title: "Capstone Project 5: E-Commerce Platform (MERN)",
      description: "Build an e-commerce platform with a full MERN stack.",
      details: [
        "Frontend with React for Product Browsing and Cart",
        "Node/Express Backend for Order Management",
        "MongoDB for Product and User Data",
        "Payment Integration (e.g., Stripe or Razorpay)",
      ],
    },
    {
      title: "Advanced Topics",
      description: "Explore advanced web development topics.",
      details: [
        "Web Services: REST and GraphQL",
        "WebSockets: Real-time Communication",
        "Server-Side Rendering with Next.js",
        "Unit Testing with Jest and React Testing Library",
        "Microservices Architecture and Deployment",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 flex flex-col justify-center items-center px-6 py-16 pt-18">
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-16">
  <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl pt-16">
    Join the Free MERN Stack Batch by <span className="inline-block text-indigo-600 font-bold text-4xl sm:text-5xl overflow-hidden border-r-2 border-black animate-typewriter">
    VariableVerse
  </span>

  </h1>
  <p className="mt-4 text-black-600 text-lg sm:text-xl pt-16">
    Want to learn premium MERN but have no money? Don’t worry—we’ve got you covered.  
  </p>
  <p className="mt-6 text-black-600 text-lg sm:text-xl pt-16">
    Your fees? Just dedication, hard work, and time. Let us help you build skills and find a job first.
  </p>
</div>


      {/* Roadmap Section */}
      <div className="mt-12 w-full max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-12 sm:text-4xl">
          MERN Stack Roadmap
        </h2>

        {/* Roadmap Items */}
        <div className="space-y-16">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`relative flex items-start ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Icon/Node */}
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-indigo-600 text-white text-2xl font-bold rounded-full shadow-lg">
                {index + 1}
              </div>

              {/* Content */}
              <div className="w-full sm:w-1/2 px-8">
                <h3 className="text-2xl font-bold text-gray-800">{stage.title}</h3>
                <p className="mt-2 text-gray-600">{stage.description}</p>

                {/* Details List */}
                <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                  {stage.details.map((detail, i) => (
                    <li key={i} className="text-sm sm:text-base">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
