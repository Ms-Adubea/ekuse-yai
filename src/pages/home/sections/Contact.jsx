import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import contactBg from '../../../assets/images/welding.jpeg';
import AnimatedSection from '../../../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div id="contact" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundAttachment: 'fixed'
        }}>
        <div className="absolute inset-0 bg-opacity-75"></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-base text-[#CD7F32] font-semibold tracking-wide uppercase">
                Get In Touch
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Contact Us
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
                Have questions? We're here to help and provide the support you need.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection className="bg-inherit bg-opacity-10 backdrop-blur-lg p-8 rounded-xl">
              {/* Contact Information */}
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="bg-[#CD7F32] p-3 rounded-full">
                      <FiPhone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-white">Phone</p>
                    <a href="tel:+233547850760" className="text-gray-300 hover:text-[#CD7F32]">
                      +233 54 785 0760
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="bg-[#CD7F32] p-3 rounded-full">
                      <FiMail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-white">Email</p>
                    <a href="mailto:davidksam32@gmail.com" className="text-gray-300 hover:text-[#CD7F32]">
                      davidksam32@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="bg-[#CD7F32] p-3 rounded-full">
                      <FiMapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-white">Location</p>
                    <p className="text-gray-300">
                      Winneba, Central Region, Ghana
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <p className="text-lg font-medium text-white mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#CD7F32] p-3 rounded-full text-white hover:bg-orange-700 transition-colors">
                    <FaFacebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#CD7F32] p-3 rounded-full text-white hover:bg-orange-700 transition-colors">
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a href="https://wa.me/+233547850760" className="bg-[#CD7F32] p-3 rounded-full text-white hover:bg-orange-700 transition-colors">
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#CD7F32] p-3 rounded-full text-white hover:bg-orange-700 transition-colors">
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31752.155504000595!2d-0.6396799843749962!3d5.351010300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf7a8495d3d2e7%3A0xb2a79e4ce8626582!2sWinneba!5e0!3m2!1sen!2sgh!4v1650438023296!5m2!1sen!2sgh"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </AnimatedSection>

            <AnimatedSection className="bg-transparent bg-opacity-10 backdrop-blur-lg p-8 rounded-xl">
              {/* Contact Form */}
              <h3 className="text-2xl font-bold text-white mb-8">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent placeholder-gray-400 text-gray-900 focus:border-[#CD7F32] focus:ring-[#CD7F32] sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent placeholder-gray-400 text-gray-900 focus:border-[#CD7F32] focus:ring-[#CD7F32] sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent placeholder-gray-400 text-gray-900 focus:border-[#CD7F32] focus:ring-[#CD7F32] sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent placeholder-gray-400 text-gray-900 focus:border-[#CD7F32] focus:ring-[#CD7F32] sm:text-sm"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#CD7F32] hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CD7F32]"
                >
                  <FiSend className="mr-2" />
                  Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;