import React from "react";
import { FaHistory, FaEye, FaBullseye } from "react-icons/fa";
import AnimatedSection from "../../../components/AnimatedSection";
import bgImage from "../../../assets/images/newemelogo.png"; // Import the background image

const AboutUs = () => {
  return (
    // <section
    //   id="about"
    //   className="py-20 bg-cover bg-no-repeat bg-fixed relative"
    //   style={{ backgroundImage: `url(${bgImage})` }}
    // >
    <section
  id="about"
  className="py-20 bg-cover bg-no-repeat md:bg-fixed relative"
  style={{ 
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center'
  }}
>
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-[#CD7F32] uppercase tracking-wider">
              About Us
            </h2>
            <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Crafting Excellence in Metal Engineering
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-700 mx-auto">
              Transforming ideas into high-quality metal works and machinery since 2020.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* History */}
          <AnimatedSection>
            <div className="bg-white/70 shadow-lg rounded-xl p-8 h-full transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center w-14 h-14 bg-[#CD7F32] rounded-full mb-6">
                <FaHistory className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our History</h3>
              <p className="text-gray-700">
                Established in 2020, Ekuse Metal Engineering was founded to redefine
                metal fabrication and machine manufacturing in Ghana.
              </p>
              <p className="mt-4 text-gray-700">
                From our pioneering GingerSlice Pro to a range of industrial solutions,
                we are committed to precision, innovation, and quality craftsmanship.
              </p>
            </div>
          </AnimatedSection>

          {/* Mission */}
          <AnimatedSection>
            <div className="bg-white/70 shadow-lg rounded-xl p-8 h-full transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center w-14 h-14 bg-[#CD7F32] rounded-full mb-6">
                <FaBullseye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver cutting-edge metal engineering solutions that enhance efficiency across industries.
              </p>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#CD7F32] mr-3">•</span> Innovation in machine and metal fabrication
                </li>
                <li className="flex items-start">
                  <span className="text-[#CD7F32] mr-3">•</span> Commitment to customer satisfaction
                </li>
                <li className="flex items-start">
                  <span className="text-[#CD7F32] mr-3">•</span> Driving industrial growth in Ghana
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Vision */}
          <AnimatedSection>
            <div className="bg-white/70 shadow-lg rounded-xl p-8 h-full transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center w-14 h-14 bg-[#CD7F32] rounded-full mb-6">
                <FaEye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading provider of innovative metal engineering solutions in West Africa.
              </p>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#CD7F32] mr-3">•</span> Excellence in engineering and craftsmanship
                </li>
                <li className="flex items-start">
                  <span className="text-[#CD7F32] mr-3">•</span> Sustainability in manufacturing
                </li>
                <li className="flex items-start">
                  <span className="text-[#CD7F32] mr-3">•</span> Leadership in industrial innovation
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Achievements */}
        <AnimatedSection>
          <div className="mt-20 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-8 bg-white/70 shadow-md rounded-lg">
                <div className="text-5xl font-bold text-[#CD7F32]">3+</div>
                <p className="mt-3 text-gray-700">Years of Excellence</p>
              </div>
              <div className="p-8 bg-white/70 shadow-md rounded-lg">
                <div className="text-5xl font-bold text-[#CD7F32]">50+</div>
                <p className="mt-3 text-gray-700">Satisfied Clients</p>
              </div>
              <div className="p-8 bg-white/70 shadow-md rounded-lg">
                <div className="text-5xl font-bold text-[#CD7F32]">100%</div>
                <p className="mt-3 text-gray-700">Made in Ghana</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutUs;
