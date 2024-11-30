import React from 'react';
import { motion } from 'framer-motion';
import { VideoIcon } from 'lucide-react';
import image7 from '../../src/components/assets/images/data-frames-in-python-banner_cgzjxy.jpeg';
import image8 from '../../src/components/assets/images/luxdp.jpeg';
import image9 from '../../src/components/assets/images/images.jpeg';
import image10 from '../../src/components/assets/images/1_yDcqWU6UMaN5MV7XNwJpOQ.png';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding Data Frames: A Quick Guide",
      image: image7,
      categories: ["Technology"],
      readTime: "2 mins read",
      author: {
        name: "Luxsha",
        avatar: image8,
        date: "12 Sep 2024"
      },
      hasVideo: true,
      link: "https://medium.com/@luxshayini1203/understanding-data-frames-a-quick-guide-5fd6a84856a7"
    },
    {
      id: 2,
      title: "Introduction to Data Visualization in Python",
      image: image10,
      categories: ["Technology"],
      readTime: "2 mins read",
      author: {
        name: "Luxsha",
        avatar: image8,
        date: "12 Sep 2024"
      },
      hasVideo: true,
      link: "https://medium.com/@luxshayini1203/introduction-to-data-visualization-in-python-2f389a321f39"
    },
    {
      id: 3,
      title: "Revolutionizing Industries with Passive IoT: Key Insights from Dr. Sabesan Sithamparanathan",
      image: image9,
      categories: ["Tech", "Business"],
      readTime: "1 mins read",
      author: {
        name: "Luxsha",
        avatar: image8,
        date: "04 Sep 2024"
      },
      hasVideo: false,
      link: "https://medium.com/@luxshayini1203/revolutionizing-industries-with-passive-iot-key-insights-from-dr-sabesan-sithamparanathan-3ada29f758ae"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0B1121] via-[#1C2A4A] to-[#2C3E50] py-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-cyan-500 text-xl mb-2">Our Blog</h2>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Latest Articles</h1>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              className="bg-[#0B1121] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <div className="relative">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                />
                {blog.hasVideo && (
                  <motion.div 
                    className="absolute top-4 right-4 bg-black/50 p-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <VideoIcon className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  {blog.categories.map((category, i) => (
                    <motion.span 
                      key={i} 
                      className="text-cyan-500 text-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      #{category}
                    </motion.span>
                  ))}
                  <span className="text-gray-400 text-sm ml-auto">
                    {blog.readTime}
                  </span>
                </div>

                <a href={blog.link} className="block">
                  <h3 className="text-xl font-semibold text-white mb-4 hover:text-cyan-500 transition-colors">
                    {blog.title}
                  </h3>
                </a>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={blog.author.avatar}
                      alt={blog.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white font-medium">{blog.author.name}</p>
                      <p className="text-gray-400 text-sm">{blog.author.date}</p>
                    </div>
                  </div>
                  <a href={blog.link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                      Read more
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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

export default Blogs;
