import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', img: '/path/to/htmlt.png' },
    { name: 'CSS', img: '/path/to/CSS.png' },
    { name: 'Bootstrap', img: '/path/to/bootstrap7.svg' },
    { name: 'Tailwind', img: '/path/to/tailwind.jpeg' },
    { name: 'Git', img: '/path/to/git.png' },
    { name: 'GitHub', img: '/path/to/github.png' },
  ];

  return (
    <section
      id="skills"
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

      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24 relative z-10">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <div className="flex flex-wrap justify-center mt-8 space-x-6">
          {skills.map((skill) => (
            <div key={skill.name} className="text-center">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-20 h-20 mx-auto"
              />
              <p className="mt-2">{skill.name}</p>
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

export default Skills;
