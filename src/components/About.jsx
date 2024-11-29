import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-[#0B1121] via-[#1C2A4A] to-[#2C3E50] text-white flex items-center justify-center overflow-hidden px-8"
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
      <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://via.placeholder.com/250" // Replace with your image URL
              alt="Luxshayini"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -top-4 -right-4 bg-cyan-500 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m-6 4l2-2m-2 0l2-2"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <h3 className="text-xl md:text-2xl text-cyan-400 font-semibold mb-6">
            A Passionate Developer Who Loves to Code
          </h3>
          <p className="mb-6 leading-relaxed">
            Hi! I'm <strong>Luxshayini Thevapalan</strong>, a passionate coder with a deep interest in full-stack development. 
            I started my journey at J/Vadamaradchy Hindu Girls' College and now explore web technologies, crafting solutions 
            with React, MongoDB, and Express. From Sri Lanka, I'm on a mission to create meaningful, user-friendly software.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <li>
              <strong>Name:</strong> Luxshayini Thevapalan
            </li>
            <li>
              <strong>Address:</strong> Jaffna, Sri Lanka
            </li>
            <li>
              <strong>Education:</strong> Full Stack Development
            </li>
            <li>
              <strong>Freelance:</strong> Available
            </li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg shadow-md">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
