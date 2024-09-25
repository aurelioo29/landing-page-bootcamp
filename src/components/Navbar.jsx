import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  // Toggle Scroll-to-Top button visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top and navigate to home when the button is clicked
  const scrollToTopAndNavigate = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Navigate to home after a short delay to allow scrolling to finish
    setTimeout(() => {
      navigate("/"); // Redirect to the home page
    }, 300); // Adjust the delay if needed
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white drop-shadow-xl rounded-full mt-4 sm:mt-6 lg:mt-7 mx-3 sm:mx-10 md:mx-20 lg:mx-40 border-2 md:border-4 sticky top-0 z-50">
        <div className="container mx-auto p-3 sm:p-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold italic text-green-600">
              DataMastery Hub
            </h1>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {/* Icon for hamburger (menu icon) */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Links Section (Hidden on mobile, visible on larger screens) */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <Link to="/" className="text-gray-800 hover:text-green-600">
              Home
            </Link>
            <Link to="/#program" className="text-gray-800 hover:text-green-600">
              Programs
            </Link>
            <Link to="/#faq" className="text-gray-800 hover:text-green-600">
              FAQ
            </Link>
            <Link to="/#contact" className="text-gray-800 hover:text-green-600">
              Our Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown (Visible when isOpen is true) */}
        {isOpen && (
          <div className="md:hidden w-full max-w-xs mx-auto mt-2 rounded-md">
            <div className="flex flex-row items-center justify-center p-4 space-x-2">
              <a href="#home" className="text-gray-800">
                Home
              </a>
              <a href="#program" className="text-gray-800">
                Programs
              </a>
              <a href="#faq" className="text-gray-800">
                FAQ
              </a>
              <a href="#contact" className="text-gray-800 ">
                Our Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTopAndNavigate} // Use the new function
          className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-500 focus:outline-none z-50"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Navbar;
