import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../../src/components/assets/images/1_0aVRHCof0Ut38-BGx9Vkyw.webp';
import image2 from '../../src/components/assets/images/1_5iJjqJFCtxQ4pAvf8GHelQ.webp';
import image3 from '../../src/components/assets/images/1_kWvnsRT6BLubM9eSO7dxOA.webp';

const Blogs = () => {
  const blogs = [
    {
      title: 'Apple Vision Pro: Exploring the Cutting Edge',
      link: 'https://medium.com/@luxshayini1203/apple-vision-pro-exploring-the-cutting-edge-be94d878c0de',
      img: image1,
      tags: ['#Technology', '#Apple'],
      author: 'Luxshayini',
      date: '25 Nov 2024',
      readTime: '3 mins read',
    },
    {
      title: '5G Technology',
      link: 'https://medium.com/@luxshayini1203/5g-network-technology-101be0eb2d14',
      img: image2,
      tags: ['#Networking', '#5G'],
      author: 'Luxshayini',
      date: '15 Nov 2024',
      readTime: '4 mins read',
    },
    {
      title: 'JSON Web Tokens (JWT)',
      link: 'https://medium.com/@luxshayini1203/introduction-to-json-web-tokens-jwt-e82cd18f5850',
      img: image3,
      tags: ['#Programming', '#JWT'],
      author: 'Luxshayini',
      date: '05 Nov 2024',
      readTime: '5 mins read',
    },
  ];

  return (
    <section
      id="blogs"
      className="relative min-h-screen bg-gradient-to-br from-[#0B1121] via-[#1C2A4A] to-[#2C3E50] text-white py-12 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2 }}
      >
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-500 rounded-full opacity-10"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Blogs Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Blog Image */}
              <div className="p-4">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-60 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Tags */}
                <div className="flex space-x-2 mb-4 text-sm text-teal-300">
                  {blog.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white hover:text-teal-400 transition-colors duration-300 mb-4">
                  {blog.title}
                </h3>

                {/* Metadata */}
                <div className="flex items-center text-sm text-gray-400 space-x-3">
                  <span className="flex items-center space-x-2">
                    <img
                      src={`https://ui-avatars.com/api/?name=${blog.author}&background=0D8ABC&color=fff&rounded=true`}
                      alt={blog.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{blog.author}</span>
                  </span>
                  <span>·</span>
                  <span>{blog.date}</span>
                  <span>·</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
