import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section
      id="contact"
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
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>

        {/* Contact Form */}
        <div className="mt-8 max-w-2xl mx-auto">
          <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-2 rounded-md transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
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

      {/* Floating Circle */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-0 left-10 lg:left-20"
      >
        <div className="h-4 w-4 rounded-full bg-cyan-500" />
      </motion.div>
    </section>
  );
};

export default Contact;
