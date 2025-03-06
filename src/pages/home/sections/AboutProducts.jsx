import React, { useState } from 'react';
import { FaCheckCircle, FaSearchPlus, FaTools, FaCog, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ginEquipment from '../../../assets/images/ginger-slicer.jpg';
import gingerMachine from '../../../assets/images/ginger-slicer2.jpg';
import gingerVideo from '../../../assets/videos/ginger-slicing-video.mp4'; // Import the video
import AnimatedSection from '../../../components/AnimatedSection';

const AboutProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('images'); // State to manage active tab

  const features = [
    {
      title: "High-capacity Processing",
      description: "Process up to 10kg of ginger per hour, perfect for commercial operations"
    },
    {
      title: "Industrial-grade Build",
      description: "Constructed with high-quality stainless steel for durability and food safety"
    },
    {
      title: "Semi-Automatic Operation",
      description: "Efficient operation with minimal manual intervention required"
    },
    {
      title: "Advanced Safety Features",
      description: "Built-in safety mechanisms protect operators during use"
    }
  ];

  const benefits = [
    "Increased productivity in food preparation",
    "Consistent slice thickness for better cooking results",
    "Reduced physical strain and fatigue",
    "Cost-effective solution for businesses",
    "Easy to clean and maintain"
  ];

  const additionalServices = [
    {
      icon: <FaTools className="w-12 h-12 text-[#CD7F32] mx-auto mb-4" />,
      title: "Professional Installation",
      description: "Expert setup and configuration for your facility"
    },
    {
      icon: <FaCog className="w-12 h-12 text-[#CD7F32] mx-auto mb-4" />,
      title: "Maintenance Support",
      description: "Regular maintenance and quick repairs"
    },
    {
      icon: <FaSearchPlus className="w-12 h-12 text-[#CD7F32] mx-auto mb-4" />,
      title: "Training Included",
      description: "Comprehensive operator training provided"
    }
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="product" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-base text-[#CD7F32] font-semibold tracking-wide uppercase">
              Our Recent Innovation
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              GingerSlice Pro - Commercial
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Industrial-grade ginger processing solution designed for commercial kitchens and food processing facilities
            </p>
          </div>
        </AnimatedSection>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection>
            {/* Product Image */}
            <div className="relative">
              <img
                src={ginEquipment}
                alt="GingerSlice Pro"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto" // Resized image
              />
              <div className="absolute top-4 right-4 bg-[#CD7F32] text-white px-3 py-1 rounded-full text-sm">
                Industrial Grade
              </div>
              {/* View More Button with Pulsing Effect */}
              <button
                onClick={openModal}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#CD7F32] text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center text-lg animate-pulse hover:animate-none"
              >
                <FaSearchPlus className="mr-2" />
                View More
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            {/* Product Description */}
            <div>
              <p className="text-lg text-gray-600 mb-8">
                The GingerSlice Pro addresses a critical challenge in food preparation: 
                the time-consuming process of manually slicing ginger. 
                This innovative device combines efficiency with safety, making it an essential 
                tool for commercial kitchens and food processing facilities.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow border-b-amber-600">
                    <h4 className="text-lg font-semibold text-[#CD7F32] mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Benefits List */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <FaCheckCircle className="text-[#CD7F32] mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Additional Services Section */}
        <AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-md">
                {service.icon}
                <h3 className="text-lg font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Impact Section */}
        {/* <AnimatedSection>
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Making a Difference
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#CD7F32] mb-2">75%</div>
                <p className="text-gray-600">Time Saved in Food Preparation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#CD7F32] mb-2">100%</div>
                <p className="text-gray-600">Made in Ghana</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#CD7F32] mb-2">50+</div>
                <p className="text-gray-600">Satisfied Users</p>
              </div>
            </div>
          </div>
        </AnimatedSection> */}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        {/* <div className="fixed inset-0 flex items-center justify-center z-50 p-4"> */}
          <div className="bg-white rounded-lg w-full max-w-2xl overflow-y-auto max-h-[90vh] relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#CD7F32] mb-6">Product Gallery</h2>

              {/* Tabs */}
              <div className="flex space-x-4 border-b border-gray-200 mb-6">
                <button
                  onClick={() => setActiveTab('images')}
                  className={`pb-2 px-4 ${
                    activeTab === 'images'
                      ? 'border-b-2 border-[#CD7F32] text-[#CD7F32]'
                      : 'text-gray-600'
                  }`}
                >
                  Images
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`pb-2 px-4 ${
                    activeTab === 'videos'
                      ? 'border-b-2 border-[#CD7F32] text-[#CD7F32]'
                      : 'text-gray-600'
                  }`}
                >
                  Videos
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'images' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img
                    src={ginEquipment}
                    alt="GingerSlice Pro"
                    className="rounded-lg shadow-xl w-full"
                  />
                  <img
                    src={gingerMachine}
                    alt="GingerSlice Pro"
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              )}

              {activeTab === 'videos' && (
                <div className="w-full">
                  <video controls className="rounded-lg shadow-xl w-full">
                    <source src={gingerVideo} type="video/mp4" /> {/* Use the imported video */}
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutProducts;