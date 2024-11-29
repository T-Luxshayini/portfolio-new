import React from 'react';
import { motion } from 'framer-motion';

const Blogs = () => {
  const blogs = [
    {
      title: 'Bootstrap',
      link: 'https://medium.com/@luxshayini1203/bootstrap-beginners-guide-26b1333b6a20',
      img: '/path/to/bootmedium.png',
    },
    {
      title: '5G Technology',
      link: 'https://medium.com/@luxshayini1203/5g-network-technology-101be0eb2d14',
      img: '/path/to/5g.jpg',
    },
    {
      title: 'Introverts',
      link: 'https://medium.com/@luxshayini1203/understanding-introverts-embracing-the-power-of-quiet-strength-2979d06925f2',
      img: '/path/to/introvert.png',
    },
  ];

  return (
    <section
      id="blogs"
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
        <h2 className="text-3xl font-bold text-center">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {blogs.map((blog) => (
            <div key={blog.title} className="p-4 bg-gray-800 rounded-lg">
              <img src={blog.img} alt={blog.title} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-bold">{blog.title}</h3>
              <a href={blog.link} className="mt-2 inline-block text-teal-400">
                Read more
              </a>
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

export default Blogs;
