import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0B1121] via-[#1C2A4A] to-[#2C3E50] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="text-center mb-12"
          {...fadeIn}
        >
          <h2 className="text-cyan-500 text-xl mb-2">Contact</h2>
          <h1 className="text-4xl font-bold sm:text-5xl xl:text-6xl/none">I Want to Hear from You</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-center space-x-6">
              <div className="bg-cyan-500 rounded-full p-4 w-16 h-16 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Address</h3>
                <p className="text-gray-300">Jaffna,Sri Lanka</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-6">
              <div className="bg-cyan-500 rounded-full p-4 w-16 h-16 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <p className="text-gray-300">luxshayini1203@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-6">
              <div className="bg-cyan-500 rounded-full p-4 w-16 h-16 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Phone</h3>
                <p className="text-gray-300">+94 706624447</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 rounded-md bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-300"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-md bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-300"
                />
              </div>
              <textarea
                placeholder="Write your message here"
                rows="6"
                className="w-full px-4 py-3 rounded-md bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-300"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Submit Now</span>
                <motion.div
                  className="inline-block"
                  initial={{ x: -5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
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

export default Contact;

