import React from 'react';
import { motion } from 'framer-motion';
import { FaSearchPlus, FaTools, FaCog } from 'react-icons/fa';
import blackMan from '../../../assets/images/black-man.jpg';
import cuttingMetal from '../../../assets/images/cutting-metal-with-plasma-equipment-plant.jpg';
import portraitMan from '../../../assets/images/portrait-man.jpg';

const Showcase = () => {
  const showcaseItems = [
    {
      title: "GingerSlice Pro - Standard",
      description: "Perfect for home kitchens and small restaurants",
      image: blackMan,
      features: ["Compact Design", "Manual Operation", "2kg/hour capacity"],
      category: "Consumer"
    },
    {
      title: "GingerSlice Pro - Commercial",
      description: "Ideal for large-scale food processing",
      image: cuttingMetal,
      features: ["Industrial Grade", "Semi-Automatic", "10kg/hour capacity"],
      category: "Industrial"
    },
    {
      title: "GingerSlice Pro - Premium",
      description: "Advanced features for professional kitchens",
      image: portraitMan,
      features: ["Premium Finish", "Enhanced Safety", "5kg/hour capacity"],
      category: "Professional"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div id="showcase" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-[#CD7F32] font-semibold tracking-wide uppercase">
            Our Products
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Product Showcase
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover our range of innovative ginger processing solutions designed for different scales of operation
          </p>
        </div>

        {/* Showcase Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-[#CD7F32] text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <FaCog className="text-[#CD7F32] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button className="mt-6 w-full bg-[#CD7F32] text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center">
                  <FaSearchPlus className="mr-2" />
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <FaTools className="w-12 h-12 text-[#CD7F32] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored to your specific needs</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <FaCog className="w-12 h-12 text-[#CD7F32] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Installation Support</h3>
              <p className="text-gray-600">Professional setup and training</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <FaSearchPlus className="w-12 h-12 text-[#CD7F32] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">After-Sales Service</h3>
              <p className="text-gray-600">Dedicated support team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;