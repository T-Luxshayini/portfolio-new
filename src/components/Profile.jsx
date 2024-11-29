import React from 'react';
import image1 from '../../src/components/assets/images/luxdp.jpeg'
const Profile = () => {
  return (
    <section id="profile" className="flex flex-col items-center justify-center min-h-screen">
      <img
        src={image1}
        alt="Luxshayini"
        className="w-48 h-48 rounded-full shadow-lg"
      />
      <h1 className="mt-4 text-4xl font-bold">Luxshayini Thevapalan</h1>
      <p className="text-teal-400">&lt;/ Student Developer &gt;</p>
      <div className="mt-4 space-x-4">
        <a href="https://linkedin.com/in/luxshayini" className="text-2xl text-teal-400 hover:text-white">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/T-Luxshayini" className="text-2xl text-teal-400 hover:text-white">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://x.com/luxsha_t" className="text-2xl text-teal-400 hover:text-white">
          <i className="fa fa-twitter"></i>
        </a>
      </div>
    </section>
  );
};

export default Profile;
