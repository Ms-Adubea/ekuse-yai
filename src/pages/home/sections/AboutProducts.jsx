import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutProducts = () => {
  const features = [
    {
      title: "Efficient Slicing",
      description: "Reduces ginger preparation time by up to 75%, enabling quick and consistent slicing"
    },
    {
      title: "Versatile Design",
      description: "Suitable for both domestic kitchens and commercial food preparation facilities"
    },
    {
      title: "Safety Features",
      description: "Built-in safety mechanisms protect users during operation"
    },
    {
      title: "Durable Construction",
      description: "Made from high-quality stainless steel for longevity and food safety"
    }
  ];

  const benefits = [
    "Increased productivity in food preparation",
    "Consistent slice thickness for better cooking results",
    "Reduced physical strain and fatigue",
    "Cost-effective solution for businesses",
    "Easy to clean and maintain"
  ];

  return (
    <div id="product" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-base text-[#CD7F32] font-semibold tracking-wide uppercase">
            Innovation
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            GingerSlice Pro
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            A revolutionary solution transforming the way we process ginger in both domestic and commercial kitchens.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <img
              src="/src/assets/images/gin-equipment.jpg" // Make sure to add your product image
              alt="GingerSlice Pro"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#CD7F32] text-white px-6 py-2 rounded-full">
              Patent Pending
            </div>
          </div>

          {/* Product Description */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Revolutionizing Ginger Processing
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              The GingerSlice Pro addresses a critical challenge in food preparation: 
              the time-consuming and potentially hazardous process of manually slicing ginger. 
              This innovative device combines efficiency with safety, making it an essential 
              tool for both home cooks and professional chefs.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
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
        </div>

        {/* Impact Section */}
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
      </div>
    </div>
  );
};

export default AboutProducts;