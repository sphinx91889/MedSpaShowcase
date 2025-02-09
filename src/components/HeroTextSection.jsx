import React from 'react';

const HeroTextSection = () => {
  return (
    <section 
      className="relative py-24 bg-cover bg-center" 
      style={{ backgroundImage: "url('https://example.com/luxurious-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-yellow-400 mb-6 drop-shadow-lg">
          Unleash Your Radiance
        </h1>
        <p className="text-2xl md:text-3xl text-white italic mb-0">
          Where beauty meets innovation.
        </p>
      </div>
    </section>
  );
};

export default HeroTextSection;
