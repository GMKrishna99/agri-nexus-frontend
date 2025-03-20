import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NAVBAR_ITEMS } from "../constants/Navbar.constance";
import { FiMenu, FiX } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { HiOutlineShoppingCart, HiUserCircle } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Logo from "../assets/logo.png";
import CartSheet from "@/components/CartSheet";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Organic Fertilizer",
      price: 15.99,
      image: "/images/fertilizer.jpg",
    },
    {
      id: 2,
      name: "High-Quality Seeds",
      price: 8.49,
      image: "/images/seeds.jpg",
    },
  ]);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }

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

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
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
                    className="absolute mt-2 w-72 bg-white shadow-lg rounded-lg py-2 border border-gray-200 z-50"
                  >
                    {navItem.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                        onClick={() => setActiveDropdown(null)}
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

        {/* User Profile & Buttons */}
        <div className="hidden lg:flex space-x-4 items-center">
          {user ? (
            <div className="relative">
              <button
                onClick={() => toggleDropdown("profile")}
                className="text-gray-700 hover:text-blue-600 flex items-center cursor-pointer"
              >
                <HiUserCircle className="w-8 h-8 mr-2" />
                <span>{user.name}</span>
                <motion.div
                  animate={{ rotate: activeDropdown === "profile" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MdArrowDropDown />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeDropdown === "profile" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute mt-2 w-60 bg-white shadow-lg rounded-lg py-2 border border-gray-200 z-50"
                  >
                    <div className="px-4 py-2 text-gray-700 font-semibold">
                      {user.email}
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      View Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 w-full text-left"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Button className={"bg-green-600"} asChild>
              <Link to="/sign-in">Login / Sign Up</Link>
            </Button>
          )}
          <CartSheet cartItems={cartItems} removeItem={removeItem}></CartSheet>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full md:w-1/2 h-full bg-white shadow-lg p-6 lg:hidden z-50"
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
                  <MdArrowDropDown />
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
                          className="block px-2 py-1 text-gray-700"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
