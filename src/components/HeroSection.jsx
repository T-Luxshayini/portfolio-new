// import React, { useState } from "react";
// import heroImage from "../../src/components/assets/images/luxdp.jpeg";

// const Hero = () => {
//   return (
//     <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-5xl text-center">
//         <h2 className="text-xl font-semibold text-teal-400">Hello Everyone!</h2>
//         <h1 className="mt-2 text-5xl font-bold text-white">
//           I'm <span className="text-teal-400">Luxshayini</span>
//         </h1>
//         <p className="mt-4 text-lg text-gray-300">
//           I use coding as a tool to solve problems, simplify tasks, and build innovative
//           projects. Let's explore development together!
//         </p>

//         {/* Email Input & Subscribe Button */}
//         <div className="mt-6 flex justify-center">
//           <input
//             type="email"
//             placeholder="Type your email address..."
//             className="w-72 px-4 py-2 text-gray-900 rounded-l-lg focus:outline-none"
//           />
//           <button className="px-4 py-2 bg-teal-400 text-gray-900 font-bold rounded-r-lg hover:bg-teal-500">
//             Subscribe →
//           </button>
//         </div>
//       </div>

//       {/* Hero Image */}
//       <div className="absolute right-6 bottom-6 hidden md:block">
//         <img
//           src={heroImage}
//           alt="Luxshayini"
//           className="w-64 rounded-full shadow-lg"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../../src/components/assets/images/lux4-removebg-preview.png';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0B1121] via-[#1C2A4A] to-[#2C3E50] text-white overflow-hidden">
      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 px-4 sm:px-6 md:px-8">
            <motion.p
              className="text-cyan-500 text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello Everyone!
            </motion.p>

            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm <span className="text-cyan-500">Luxshayini Thevapalan</span>
            </motion.h1>

            <motion.p
              className="text-gray-400 text-sm sm:text-base md:text-lg max-w-full md:max-w-[600px]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A passionate full stack developer dedicated to creating seamless web applications and enhancing user experiences. Let's build something amazing together!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row sm:items-center max-w-full space-y-4 sm:space-y-0 sm:space-x-2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <input
                className="flex-grow bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 w-full sm:w-auto"
                placeholder="Type your email address"
                type="email"
              />
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-2 rounded-md transition duration-300 ease-in-out w-full sm:w-auto">
                Subscribe
              </button>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center">
            <motion.img
              src={image1}
              alt="Hero"
              className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] rounded-lg shadow-2xl relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

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

            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute bottom-0 left-10 lg:left-20"
            >
              <div className="h-4 w-4 rounded-full bg-cyan-500" />
            </motion.div>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Hero;
