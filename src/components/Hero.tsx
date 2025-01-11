import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Excellence in Legal Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Dedicated to providing exceptional legal representation with integrity, professionalism, and commitment to our clients' success.
          </p>
          <div className="space-x-4">
            <a 
              href="#contact" 
              className="bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-800 transition duration-300"
            >
              Free Consultation
            </a>
            <a 
              href="#practice-areas" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;