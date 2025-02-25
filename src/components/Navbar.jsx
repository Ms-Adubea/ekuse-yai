import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaTools, FaUser, FaStar, FaEnvelope, FaBuilding } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import logo from "../assets/images/newemelogo.png"; // Ensure your logo is in this path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-[#CD7F32] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left side - Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#hero" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400">
              About Us
            </a>
          </li>
          <li>
            <a href="#innovator" className="hover:text-yellow-400">
              Innovator
            </a>
          </li>
        </ul>

        {/* Center - Logo */}
        <div className="flex-shrink-0">
          <a href="#hero">
            <img src={logo} alt="Ekuse Metal Engineering" className="h-12 md:h-16 w-auto" />
          </a>
        </div>

        {/* Right side - Links */}
        <ul className="hidden md:flex space-x-6">
        <li>
            <a href="#product" className="hover:text-yellow-400">
              Product
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-yellow-400">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-yellow-400">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-[#CD7F32] text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#CD7F32] text-white p-4 mt-2 rounded shadow-lg">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="#hero" 
                onClick={handleClick}
                className="flex items-center hover:text-yellow-400"
              >
                <FaHome className="mr-2" /> Home
              </a>
            </li>
            <li>
              <a href="#about" 
                onClick={handleClick}
                className="flex items-center hover:text-yellow-400"
              >
                <FaBuilding className="mr-2" /> About Us
              </a>
            </li>
            <li>
              <a href="#innovator" 
                onClick={handleClick}
                className="flex items-center hover:text-yellow-400"
              >
                <FaUser className="mr-2" /> Innovator
              </a>
            </li>
            <li>
              <a href="#product" 
                onClick={handleClick}
                className="flex items-center hover:text-yellow-400"
              >
                <FaTools className="mr-2" /> Product
              </a>
            </li>
            <li>
              <a href="#testimonials" 
                onClick={handleClick}
                className="flex items-center hover:text-yellow-400"
              >
                <FaStar className="mr-2" /> Testimonials
              </a>
            </li>
            <li>
              <a href="#gallery" 
                onClick={handleClick}
                className="flex items-center hover:text-yellow-400"
              >
                <GrGallery className="mr-2" /> Gallery
              </a>
            </li>
            <li>
              <a href="#contact" 
                onClick={handleClick}
                className="flex items-center hover:text-yellow-400"
              >
                <FaEnvelope className="mr-2" /> Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
