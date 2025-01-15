import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-20">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-6">
        Discover amazing projects and learn more about what I do.
      </p>
      <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
