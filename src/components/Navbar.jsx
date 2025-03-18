import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NAVBAR_ITEMS } from "../constants/Navbar.constance";
import { FiMenu, FiX } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-white border-b border-gray-100 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-0 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          <img src={Logo} alt="Logo" height={30} width={60} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6" ref={dropdownRef}>
          {NAVBAR_ITEMS.map((navItem, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className="text-gray-700 hover:text-blue-600 flex items-center cursor-pointer"
              >
                {navItem.label}
                <motion.div
                  animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MdArrowDropDown />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute mt-2 w-72 bg-white shadow-lg rounded-lg py-2 border border-gray-200"
                  >
                    {navItem.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                        onClick={() => setActiveDropdown(null)} // Close dropdown on link click
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
          >
            <span>Login / Sign Up</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full md:w-1/2 h-full bg-white shadow-lg p-6 lg:hidden"
          >
            <div className="p-4 flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                <img src={Logo} alt="Logo" height={30} width={60} />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <FiX size={28} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            {NAVBAR_ITEMS.map((navItem, index) => (
              <div key={index} className="mb-4 p-2 mt-4">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-gray-700 text-lg w-full text-left flex items-center"
                >
                  {navItem.label}
                  <motion.div
                    animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MdArrowDropDown />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 mt-2"
                    >
                      {navItem.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="block px-2 py-1 text-gray-700 hover:bg-blue-50"
                          onClick={() => {
                            setActiveDropdown(null); // Close dropdown
                            setIsMobileMenuOpen(false); // Close mobile menu
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Mobile Buttons */}
            <Link
              to="/login"
              className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg my-2 hover:bg-blue-700 transition flex items-center justify-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu
            >
              <span>Login / Sign Up</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
