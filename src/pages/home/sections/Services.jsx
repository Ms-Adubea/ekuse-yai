import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft, FaQuoteRight, FaTools, FaIndustry, FaHammer, FaCogs } from 'react-icons/fa';

const Services = () => {
  // Service and testimonial data
  const services = [
    { id: 1, name: 'Metal Fabrication', description: 'Custom metal structures, welding, and repairs.', icon: <FaHammer /> },
    { id: 2, name: 'Machine Manufacturing', description: 'High-quality industrial and agricultural machinery.', icon: <FaIndustry /> },
    { id: 3, name: 'Repairs & Maintenance', description: 'Expert maintenance of industrial machines and tools.', icon: <FaCogs /> },
    { id: 4, name: 'Custom Engineering Solutions', description: 'Tailored engineering services for various industries.', icon: <FaTools /> },
  ];

  const testimonials = [
    { id: 1, name: 'John Doe', role: 'Agricultural Entrepreneur', comment: 'Their equipment transformed our production!', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Jane Smith', role: 'Industrial Manager', comment: 'Top-notch engineering and reliability!', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Section */}
        <div className="text-center mb-12">
          <h2 className="text-base text-[#EF6503] font-semibold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Services</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">We provide top-tier metal engineering solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              
              {/* Motion Icon with Hover Animation */}
              <motion.div 
                className="text-[#EF6503] text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
              <p className="text-gray-500 mt-2">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        {/* <div className="text-center mb-8">
          <h2 className="text-base text-[#EF6503] font-semibold tracking-wide uppercase">Client Feedback</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Testimonials</p>
        </div>
        
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                  <div className="relative">
                    <FaQuoteLeft className="text-gray-300 absolute -top-2 left-0" />
                    <p className="text-gray-600 italic mb-6 px-6">{testimonial.comment}</p>
                    <FaQuoteRight className="text-gray-300 absolute -bottom-2 right-0" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider> */}
      </div>
    </section>
  );
};

export default Services;
