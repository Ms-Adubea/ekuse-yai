import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import contactBg from '../../../assets/images/portrait-man.jpg';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mdkennel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully. We will get back to you soon.',
          confirmButtonColor: '#EF6503'
        });

        // Reset form after successful submission
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send message. Please try again later.',
          confirmButtonColor: '#EF6503'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'An error occurred. Please check your internet connection and try again.',
        confirmButtonColor: '#EF6503'
      });
    }
  };

  return (
    <section id="contact" className="relative">
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
              <h2 className="text-base text-[#EF6503] font-semibold tracking-wide uppercase">
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
                    <div className="bg-[#EF6503] p-3 rounded-full">
                      <FiPhone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-white">Phone</p>
                    <a href="tel:+233547850760" className="text-gray-300 hover:text-[#EF6503]">
                      +233 54 785 0760
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="bg-[#EF6503] p-3 rounded-full">
                      <FiMail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-white">Email</p>
                    <a href="mailto:ekusemetalengineering@gmail.com" className="text-gray-300 hover:text-[#EF6503]">
                      ekusemetalengineering@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="bg-[#EF6503] p-3 rounded-full">
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
                  <a href="https://www.facebook.com/share/1AyriFF8qA/" target="_blank" className="bg-[#EF6503] p-3 rounded-full text-white hover:bg-orange-700 transition-colors">
                    <FaFacebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.tiktok.com/@user8612852865311?is_from_webapp=1&sender_device=pc" target="_blank" className="bg-[#EF6503] p-3 rounded-full text-white hover:bg-orange-700 transition-colors">
                    <FaTiktok className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/ekuse_metal_engineering/" target="_blank" className="bg-[#EF6503] p-3 rounded-full text-white hover:bg-orange-700 transition-colors">
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

            {/* Contact Form with Adjusted Element Sizes */}
            <AnimatedSection className="bg-inherit bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-xl">
              {/* Contact Form */}
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Type your full name"
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 block w-full py-3 px-4 rounded-md bg-white bg-opacity-20 border-transparent 
                      placeholder-gray-400 text-white focus:border-[#EF6503] focus:ring-[#EF6503] 
                      text-base transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Type your email address"
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full py-3 px-4 rounded-md bg-white bg-opacity-20 border-transparent 
                      placeholder-gray-400 text-white focus:border-[#EF6503] focus:ring-[#EF6503] 
                      text-base transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200">
                    Phone Number
                  </label>
                  <input
                    placeholder="Type your phone number (optional)"
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 block w-full py-3 px-4 rounded-md bg-white bg-opacity-20 border-transparent 
                      placeholder-gray-400 text-white focus:border-[#EF6503] focus:ring-[#EF6503] 
                      text-base transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Type your message here..."
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 block w-full py-3 px-4 rounded-md bg-white bg-opacity-20 border-transparent 
                      placeholder-gray-400 text-black focus:border-[#EF6503] focus:ring-[#EF6503] 
                      text-base transition-colors"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="px-8 py-2 border border-transparent 
                      text-base font-medium rounded-md text-white bg-[#EF6503] 
                      hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EF6503]
                      transition-all duration-200 mx-auto w-1/2"
                  >
                    <FiSend className="inline mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;