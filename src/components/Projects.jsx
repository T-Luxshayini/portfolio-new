import React from "react";
import { motion } from "framer-motion";
import image2 from "/home/uki-jaffna/Documents/Portfolio-Luxsha/portfolio/src/components/assets/images/app.png"
const Projects = () => {
  const projects = [
    {
      title: "Milk Subscription Web App",
      description:
        "A subscription-based web app for milk and milk products, featuring payment integration and user management.",
      image: image2, // Replace with your project image
      link: "https://milksubz-final-project-idc8vgz3i-luxshas-projects.vercel.app", // Replace with your project link
    },
    {
      title: "AI Chatbot Integration",
      description:
        "Implemented an AI chatbot for an e-commerce website to improve user experience and automate customer support.",
      image: "https://via.placeholder.com/400x300", // Replace with your project image
      link: "#", // Replace with your project link
    },
    {
      title: "Admin Panel Dashboard",
      description:
        "Developed an admin panel with user management, product management, and subscription handling.",
      image: "https://via.placeholder.com/400x300", // Replace with your project image
      link: "#", // Replace with your project link
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-[#0B1121] via-[#1C2A4A] to-[#2C3E50] text-white py-12 overflow-hidden"
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-cyan-500 rounded-full opacity-10"
            style={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24 relative z-10">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="flex flex-wrap justify-center mt-8 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1C2A4A] rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 max-w-sm"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated decorative elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          transition: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
        className="absolute top-0 right-10 lg:right-20 text-cyan-500"
      >
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Projects;
