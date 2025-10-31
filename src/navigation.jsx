import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ Added useLocation
import "./App.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ✅ Get current route path

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // ✅ Helper function to check active link
  const isActive = (path) =>
    location.pathname === path
      ? "text-amber-300" // Active color
      : "text-white hover:text-amber-300"; // Normal + hover color

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold text-amber-300">
              Portfolio
            </div>

            {/* Hamburger Button (Mobile Only) */}
            <button
              onClick={toggleMenu}
              className="text-white md:hidden focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-sm sm:text-base font-medium">
              <Link to="/" onClick={closeMenu} className={`${isActive("/")} transition-colors duration-300`}>
                Home
              </Link>
              <Link to="/about" onClick={closeMenu} className={`${isActive("/about")} transition-colors duration-300`}>
                About
              </Link>
              <Link to="/skills" onClick={closeMenu} className={`${isActive("/skills")} transition-colors duration-300`}>
                Skills
              </Link>
              <Link to="/project" onClick={closeMenu} className={`${isActive("/project")} transition-colors duration-300`}>
                Projects
              </Link>
              <Link to="/contact" onClick={closeMenu} className={`${isActive("/contact")} transition-colors duration-300`}>
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="flex flex-col items-center py-4 space-y-4 text-sm sm:text-base font-medium">
              <Link to="/" onClick={closeMenu} className={`${isActive("/")} transition-colors duration-300`}>
                Home
              </Link>
              <Link to="/about" onClick={closeMenu} className={`${isActive("/about")} transition-colors duration-300`}>
                About
              </Link>
              <Link to="/skills" onClick={closeMenu} className={`${isActive("/skills")} transition-colors duration-300`}>
                Skills
              </Link>
              <Link to="/project" onClick={closeMenu} className={`${isActive("/project")} transition-colors duration-300`}>
                Projects
              </Link>
              <Link to="/contact" onClick={closeMenu} className={`${isActive("/contact")} transition-colors duration-300`}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
