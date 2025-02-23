import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaTools, FaUser, FaStar, FaEnvelope } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import logo from "../assets/images/ekusemelogo.png"; // Ensure your logo is in this path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-whitesmoke text-[#CD7F32] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left side - Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="flex items-center hover:text-yellow-400">
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <a href="#products" className="flex items-center hover:text-yellow-400">
              <FaTools className="mr-2" /> Product
            </a>
          </li>
          <li>
            <a href="#innovator" className="flex items-center hover:text-yellow-400">
              <FaUser className="mr-2" /> Innovator
            </a>
          </li>
        </ul>

        {/* Center - Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Ekuse Metal Engineering" className="h-12 md:h-16 w-auto" />
        </div>

        {/* Right side - Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#showcase" className="flex items-center hover:text-yellow-400">
              <FaTools className="mr-2" /> Showcase
            </a>
          </li>
          <li>
            <a href="#testimonials" className="flex items-center hover:text-yellow-400">
              <FaStar className="mr-2" /> Testimonials
            </a>
          </li>
          <li>
              <a href="#gallery" className="flex items-center hover:text-yellow-400">
                <GrGallery className="mr-2" /> Gallery
              </a>
            </li>
          <li>
            <a href="#contact" className="flex items-center hover:text-yellow-400">
              <FaEnvelope className="mr-2" /> Contact
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
        <div className="md:hidden bg-[#3B2F2F] text-white p-4 mt-2 rounded shadow-lg">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link to="/" className="flex items-center hover:text-yellow-400">
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <a href="#products" className="flex items-center hover:text-yellow-400">
                <FaTools className="mr-2" /> Product
              </a>
            </li>
            <li>
              <a href="#innovator" className="flex items-center hover:text-yellow-400">
                <FaUser className="mr-2" /> Innovator
              </a>
            </li>
            <li>
              <a href="#showcase" className="flex items-center hover:text-yellow-400">
                <FaTools className="mr-2" /> Showcase
              </a>
            </li>
            <li>
              <a href="#testimonials" className="flex items-center hover:text-yellow-400">
                <FaStar className="mr-2" /> Testimonials
              </a>
            </li>
            <li>
              <a href="#gallery" className="flex items-center hover:text-yellow-400">
                <GrGallery className="mr-2" /> Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center hover:text-yellow-400">
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
