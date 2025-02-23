import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const images = [
  "/src/assets/images/black-man.jpg",
  "/src/assets/images/cutting-metal-with-plasma-equipment-plant.jpg",
  "/src/assets/images/black-man.jpg",
  "/src/assets/images/portrait-man.jpg",
  "/src/assets/images/slider5.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-orange-900 h-screen flex items-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <img
          src={images[currentImage]}
          alt="Metal Engineering Workshop"
          className="w-full h-full object-cover opacity-40 transition-all duration-1000"
        />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ekuse Metal Engineering Solutions
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Delivering innovative, high-quality metal engineering solutions that exceed customer expectations, while maintaining a commitment to safety, sustainability, and excellence in everything we do.
        </p>
        <a
          href="#products"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#CD7F32] hover:bg-orange-700"
        >
          Explore Our Products
          <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
