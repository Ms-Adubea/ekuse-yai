import React from 'react';
import { motion } from 'framer-motion';
import { FaSearchPlus, FaTools, FaCog } from 'react-icons/fa';
import blackMan from '../../../assets/images/black-man.jpg';
import cuttingMetal from '../../../assets/images/cutting-metal-with-plasma-equipment-plant.jpg';
import portraitMan from '../../../assets/images/portrait-man.jpg';
import AnimatedSection from '../../../components/AnimatedSection';

const Showcase = () => {
  const showcaseItems = [
    {
      title: "GingerSlice Pro - Commercial",
      description: "Industrial-grade ginger processing solution",
      image: cuttingMetal,
      features: [
        "High-capacity Processing (10kg/hour)",
        "Industrial-grade Stainless Steel",
        "Semi-Automatic Operation",
        "Advanced Safety Features"
      ],
      category: "Industrial"
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
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-base text-[#CD7F32] font-semibold tracking-wide uppercase">
              Our Product
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Commercial GingerSlice Pro
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Industrial-grade ginger processing solution designed for commercial kitchens and food processing facilities
            </p>
          </div>
        </AnimatedSection>

        {/* Showcase Grid */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-96">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#CD7F32] text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg mb-6">{item.description}</p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <FaCog className="text-[#CD7F32] mr-3 h-6 w-6" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className="mt-8 w-full bg-[#CD7F32] text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center text-lg">
                  <FaSearchPlus className="mr-2" />
                  Request Quote
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <FaTools className="w-12 h-12 text-[#CD7F32] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-center">Professional Installation</h3>
              <p className="text-gray-600 text-center">Expert setup and configuration for your facility</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <FaCog className="w-12 h-12 text-[#CD7F32] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-center">Maintenance Support</h3>
              <p className="text-gray-600 text-center">Regular maintenance and quick repairs</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <FaSearchPlus className="w-12 h-12 text-[#CD7F32] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-center">Training Included</h3>
              <p className="text-gray-600 text-center">Comprehensive operator training provided</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Showcase;