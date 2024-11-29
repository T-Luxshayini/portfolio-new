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
      <section id="blogs" className="min-h-screen py-12">
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
      </section>
    );
  };
  
  export default Blogs;
  