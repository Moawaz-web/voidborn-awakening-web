import React from 'react';

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-purple-900 via-black to-black">
      <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4 animate-fade-in">VOIDBORN</h1>
      <p className="text-xl md:text-2xl text-gray-300 animate-fade-in delay-500">Awakening of the Eye</p>
    </section>
  );
};

export default HeroSection;
