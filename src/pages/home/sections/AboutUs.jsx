import React from 'react';
import { FaHistory, FaEye, FaBullseye } from 'react-icons/fa';
import AnimatedSection from '../../../components/AnimatedSection';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-base text-[#CD7F32] font-semibold tracking-wide uppercase">
              About Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Journey
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Building excellence in metal engineering since 2020
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* History */}
          <AnimatedSection>
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <div className="flex items-center justify-center w-12 h-12 bg-[#CD7F32] rounded-full mb-6">
                <FaHistory className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our History</h3>
              <p className="text-gray-600">
                Established in 2020, Ekuse Metal Engineering emerged from a vision to revolutionize 
                food processing in Ghana. Starting with innovative solutions for ginger processing, 
                we've grown to become a trusted name in industrial food processing equipment.
              </p>
              <p className="mt-4 text-gray-600">
                Our journey began with the development of the GingerSlice Pro, addressing the 
                critical need for efficient ginger processing in commercial kitchens and food 
                processing facilities.
              </p>
            </div>
          </AnimatedSection>

          {/* Mission */}
          <AnimatedSection>
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <div className="flex items-center justify-center w-12 h-12 bg-[#CD7F32] rounded-full mb-6">
                <FaBullseye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide innovative, high-quality metal engineering solutions that enhance 
                productivity and efficiency in the food processing industry. We are committed to:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#CD7F32] mr-2">•</span>
                  Delivering excellence in product quality
                </li>
                <li className="flex items-start">
                  <span className="text-[#CD7F32] mr-2">•</span>
                  Ensuring customer satisfaction
                </li>
                <li className="flex items-start">
                  <span className="text-[#CD7F32] mr-2">•</span>
                  Contributing to local industry growth
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Vision */}
          <AnimatedSection>
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <div className="flex items-center justify-center w-12 h-12 bg-[#CD7F32] rounded-full mb-6">
                <FaEye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading manufacturer of innovative food processing equipment in 
                West Africa, recognized for:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#CD7F32] mr-2">•</span>
                  Technological innovation
                </li>
                <li className="flex items-start">
                  <span className="text-[#CD7F32] mr-2">•</span>
                  Sustainable manufacturing
                </li>
                <li className="flex items-start">
                  <span className="text-[#CD7F32] mr-2">•</span>
                  Industry leadership
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Additional Info */}
        <AnimatedSection>
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl font-bold text-[#CD7F32]">3+</div>
                <p className="mt-2 text-gray-600">Years of Excellence</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#CD7F32]">50+</div>
                <p className="mt-2 text-gray-600">Satisfied Clients</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#CD7F32]">100%</div>
                <p className="mt-2 text-gray-600">Made in Ghana</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutUs;