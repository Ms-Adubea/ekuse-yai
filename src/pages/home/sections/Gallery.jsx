import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaExpand } from 'react-icons/fa';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

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
      image: "https://images.pexels.com/photos/2882603/pexels-photo-2882603.jpeg",
      description: "High-efficiency cassava processing equipment"
    },
    {
      id: 2,
      name: "Palm Kernel Cracker",
      category: "industrial",
      image: "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg",
      description: "Industrial-grade palm kernel processing machine"
    },
    {
      id: 3,
      name: "Corn Mill",
      category: "agricultural",
      image: "https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg",
      description: "Advanced corn milling solution"
    },
    {
      id: 4,
      name: "Metal Gates",
      category: "domestic",
      image: "https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg",
      description: "Custom-designed security gates"
    },
    {
      id: 5,
      name: "Industrial Mixer",
      category: "industrial",
      image: "https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg",
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

  return (
    <div id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-base text-[#CD7F32] font-semibold tracking-wide uppercase">
            Our Portfolio
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Product Gallery
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore our diverse range of metal engineering solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
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

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
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
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <div className="mt-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#CD7F32]">
                      {categories.find(cat => cat.id === product.category).name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.name}</h3>
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