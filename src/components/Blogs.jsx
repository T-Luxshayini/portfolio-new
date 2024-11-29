import React from 'react';
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
      className="min-h-screen bg-gradient-to-br from-[#0B1121] via-[#1C2A4A] to-[#2C3E50] text-white py-12"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{ padding: '15px' }} // Adding padding around the card
            >
              {/* Blog Image */}
              <div className="relative mb-4">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-60 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                  style={{ marginBottom: '15px' }} // Gap below the image
                />
              </div>

              {/* Content */}
              <div className="p-4 bg-[#1E293B] rounded-xl">
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
