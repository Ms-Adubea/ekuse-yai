import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaExpand, FaTimes } from 'react-icons/fa'; // Added FaTimes for the close button
import blackMan from '../../../assets/images/black-man.jpg';
import cuttingMetal from '../../../assets/images/cutting-metal-with-plasma-equipment-plant.jpg';
import portraitMan from '../../../assets/images/portrait-man.jpg';
import slider5 from '../../../assets/images/slider5.jpg';
import ginEquipment from '../../../assets/images/gin-equipment.jpg';
import AnimatedSection from '../../../components/AnimatedSection';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'agricultural', name: 'Agricultural' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'domestic', name: 'Domestic' }
  ];

  const products = [
    {
      id: 1,
      name: "Cassava Grater",
      category: "agricultural",
      image: blackMan,
      description: "High-efficiency cassava processing equipment"
    },
    {
      id: 2,
      name: "Palm Kernel Cracker",
      category: "industrial",
      image: cuttingMetal,
      description: "Industrial-grade palm kernel processing machine"
    },
    {
      id: 3,
      name: "Corn Mill",
      category: "agricultural",
      image: portraitMan,
      description: "Advanced corn milling solution"
    },
    {
      id: 4,
      name: "Metal Gates",
      category: "domestic",
      image: slider5,
      description: "Custom-designed security gates"
    },
    {
      id: 5,
      name: "Industrial Mixer",
      category: "industrial",
      image: ginEquipment,
      description: "Large-scale mixing equipment"
    },
    {
      id: 6,
      name: "Agricultural Sprayer",
      category: "agricultural",
      image: "https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg",
      description: "Precision farming equipment"
    },
    {
      id: 7,
      name: "Security Doors",
      category: "domestic",
      image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      description: "High-security metal doors"
    },
    {
      id: 8,
      name: "Industrial Conveyor",
      category: "industrial",
      image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
      description: "Automated material handling system"
    },
    {
      id: 9,
      name: "Metal Fencing",
      category: "domestic",
      image: "https://images.pexels.com/photos/1462012/pexels-photo-1462012.jpeg",
      description: "Decorative and security fencing solutions"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredProducts.length - 5 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredProducts.length - 5 : prevIndex - 1
    );
  };

  const visibleProducts = filteredProducts.length <= 5 
    ? filteredProducts 
    : [...filteredProducts.slice(currentIndex), ...filteredProducts.slice(0, currentIndex)].slice(0, 5);

  return (
    <div id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-base text-[#CD7F32] font-semibold tracking-wide uppercase">
              Our Portfolio
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Products Gallery
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Explore our diverse range of metal engineering solutions
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentIndex(0);
                }}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#CD7F32] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection>
          <div className="relative">
            {/* Carousel Navigation */}
            {filteredProducts.length > 5 && (
              <div className="absolute top-1/2 w-full flex justify-between -mt-8 z-10 px-2">
                <button 
                  onClick={prevSlide}
                  className="bg-white p-3 rounded-full shadow-md hover:bg-[#CD7F32] hover:text-white transition-colors duration-300"
                >
                  <FaArrowLeft />
                </button>
                <button 
                  onClick={nextSlide}
                  className="bg-white p-3 rounded-full shadow-md hover:bg-[#CD7F32] hover:text-white transition-colors duration-300"
                >
                  <FaArrowRight />
                </button>
              </div>
            )}

            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="overflow-hidden py-8"
            >
              <div className="flex space-x-6">
                {visibleProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex-none w-64"
                  >
                    <div className="relative group">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                          onClick={() => setSelectedImage(product)}
                          className="p-3 bg-white rounded-full text-[#CD7F32] hover:bg-[#CD7F32] hover:text-white transition-colors duration-300"
                        >
                          <FaExpand className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{product.name}</h3>
                      <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#CD7F32]">
                        {categories.find(cat => cat.id === product.category).name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Carousel indicators */}
        {filteredProducts.length > 5 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.min(filteredProducts.length, 5) }).map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentIndex === index ? 'bg-[#CD7F32]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full text-gray-600 hover:bg-gray-100 transition-colors duration-300 z-50"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="flex-1 overflow-y-auto p-4">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.name}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
              </div>

              {/* Details */}
              <div className="p-6 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.name}</h3>
                <div className="mb-3">
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#CD7F32]">
                    {categories.find(cat => cat.id === selectedImage.category).name}
                  </span>
                </div>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;