import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaTools, FaUser, FaStar, FaEnvelope, FaBuilding } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import logo from "../assets/images/newemelogo.png"; // Ensure your logo is in this path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (sectionId) => {
    setMenuOpen(false);
    setActiveLink(sectionId);
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + (window.innerHeight / 3);
    
    console.log("Checking sections at scroll position:", scrollPosition);
    
    sections.forEach((section) => {
      const sectionId = section.getAttribute("id");
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      console.log(`Section ${sectionId}: top=${sectionTop}, height=${sectionHeight}`);
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        console.log(`Setting active link to: ${sectionId}`);
        setActiveLink(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Initial call to set active section on page load
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-[#EF6503] p-4 shadow-md font-serif">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left side - Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a 
              href="#home" 
              onClick={() => handleClick("home")}
              className={`hover:text-yellow-400 ${activeLink === "home" ? "text-yellow-400 border-b-2 border-yellow-400" : ""}`}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={() => handleClick("about")}
              className={`hover:text-yellow-400 ${activeLink === "about" ? "text-yellow-400 border-b-2 border-yellow-400" : ""}`}
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="#innovator" 
              onClick={() => handleClick("innovator")}
              className={`hover:text-yellow-400 ${activeLink === "innovator" ? "text-yellow-400 border-b-2 border-yellow-400" : ""}`}
            >
              Innovator
            </a>
          </li>
        </ul>

        {/* Center - Logo */}
        <div className="flex-shrink-0">
          <a href="#home">
            <img src={logo} alt="Ekuse Metal Engineering" className="h-12 md:h-16 w-auto" />
          </a>
        </div>

        {/* Right side - Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a 
              href="#product" 
              onClick={() => handleClick("product")}
              className={`hover:text-yellow-400 ${activeLink === "product" ? "text-yellow-400 border-b-2 border-yellow-400" : ""}`}
            >
              Product
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              onClick={() => handleClick("services")}
              className={`hover:text-yellow-400 ${activeLink === "services" ? "text-yellow-400 border-b-2 border-yellow-400" : ""}`}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#gallery" 
              onClick={() => handleClick("gallery")}
              className={`hover:text-yellow-400 ${activeLink === "gallery" ? "text-yellow-400 border-b-2 border-yellow-400" : ""}`}
            >
              Gallery
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={() => handleClick("contact")}
              className={`hover:text-yellow-400 ${activeLink === "contact" ? "text-yellow-400 border-b-2 border-yellow-400" : ""}`}
            >
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
              <a 
                href="#home" 
                onClick={() => handleClick("home")}
                className={`flex items-center hover:text-yellow-400 ${activeLink === "home" ? "text-yellow-400" : ""}`}
              >
                <FaHome className="mr-2" /> Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={() => handleClick("about")}
                className={`flex items-center hover:text-yellow-400 ${activeLink === "about" ? "text-yellow-400" : ""}`}
              >
                <FaBuilding className="mr-2" /> About Us
              </a>
            </li>
            <li>
              <a 
                href="#innovator" 
                onClick={() => handleClick("innovator")}
                className={`flex items-center hover:text-yellow-400 ${activeLink === "innovator" ? "text-yellow-400" : ""}`}
              >
                <FaUser className="mr-2" /> Innovator
              </a>
            </li>
            <li>
              <a 
                href="#product" 
                onClick={() => handleClick("product")}
                className={`flex items-center hover:text-yellow-400 ${activeLink === "product" ? "text-yellow-400" : ""}`}
              >
                <FaTools className="mr-2" /> Product
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={() => handleClick("services")}
                className={`flex items-center hover:text-yellow-400 ${activeLink === "services" ? "text-yellow-400" : ""}`}
              >
                <FaStar className="mr-2" /> Services
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                onClick={() => handleClick("gallery")}
                className={`flex items-center hover:text-yellow-400 ${activeLink === "gallery" ? "text-yellow-400" : ""}`}
              >
                <GrGallery className="mr-2" /> Gallery
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={() => handleClick("contact")}
                className={`flex items-center hover:text-yellow-400 ${activeLink === "contact" ? "text-yellow-400" : ""}`}
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