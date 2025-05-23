import React from "react";
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#EF6503] font-serif">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-sm font-semibold text-[#FFF3E0] tracking-wider uppercase">Ekuse Metal Engineering</h3>
            <p className="mt-4 text-base text-white">
              Revolutionizing efficiency with innovative metal engineering solutions. 
              Made in Ghana, designed for the world.
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="https://www.facebook.com/share/1AyriFF8qA/" target="_blank" className="text-[#FFF3E0] hover:text-yellow-400">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@user8612852865311?is_from_webapp=1&sender_device=pc" target="_blank" className="text-[#FFF3E0] hover:text-yellow-400">
                <FaTiktok className="h-6 w-6" />
              </a>
              <a href="https://wa.me/+233547850760" target="_blank" className="text-[#FFF3E0] hover:text-yellow-400">
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/ekuse_metal_engineering/" target="_blank" className="text-[#FFF3E0] hover:text-yellow-400">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#FFF3E0] tracking-wider uppercase">Contact</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <FiPhone className="h-5 w-5 text-[#FFF3E0] mr-2" />
                <a href="tel:+233547850760">
                <span className="text-white hover:text-yellow-400">+233 54 783 0760</span>
                </a>
              </div> 

              <div className="flex items-center">
                <FiMail className="h-5 w-5 text-[#FFF3E0] mr-2" />
                <a href="mailto:ekusemetalengineering@gmail.com">
                <span className="text-white hover:text-yellow-400">ekusemetalengineering@gmail.com</span>
                </a>
              </div>

              <div className="flex items-center">
                <FiMapPin className="h-5 w-5 text-[#FFF3E0] mr-2" />
                <span className="text-white">Winneba, Central Region, Ghana</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#FFF3E0] tracking-wider uppercase">Quick Links</h3>
            <div className="mt-4 space-y-4">
              <a href="#product" className="block text-base text-white hover:text-yellow-400">Products</a>
              <a href="#innovator" className="block text-base text-white hover:text-yellow-400">About Innovator</a>
              <a href="#gallery" className="block text-base text-white hover:text-yellow-400">Gallery</a>
              <a href="#contact" className="block text-base text-white hover:text-yellow-400">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-[#FFF3E0] pt-8">
          <p className="text-base text-[#FFF3E0] text-center">
            © 2025 Ekuse Metal Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;