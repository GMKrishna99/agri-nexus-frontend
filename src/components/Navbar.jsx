import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiUser,
  FiLogOut,
  FiSearch,
} from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../assets/logo.png";
import useAuthStore from "@/store/authStore";
import useCartStore from "@/store/cartStore";
import { CartSheet } from "./CartSheet";
import MobileNavbar from "./MobileNavbar";
import SearchComponent from "./SearchComponent";
import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  const { items, setIsCartOpen } = useCartStore();
  const dropdownRef = useRef(null);

  // Dummy search data
  const dummyProducts = [
    {
      id: 1,
      name: "Organic Wheat Seeds",
      category: "Seeds & Crops",
      path: "/marketplace/seeds-crops/wheat",
    },
    {
      id: 2,
      name: "NPK Fertilizer",
      category: "Fertilizers & Pesticides",
      path: "/marketplace/fertilizers-pesticides/npk",
    },
    {
      id: 3,
      name: "Drip Irrigation Kit",
      category: "Farming Equipment",
      path: "/marketplace/equipment/drip-irrigation",
    },
    {
      id: 4,
      name: "Government Subsidy Guide",
      category: "Resources",
      path: "/resources/guides/subsidy",
    },
    {
      id: 5,
      name: "Agricultural Loan Application",
      category: "Financial Services",
      path: "/financial-services/apply-loan",
    },
  ];

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

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
    navigate("/");
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setSearchResults([]);

    setTimeout(() => {
      const results = dummyProducts.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 800);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  const navigationItems = [
    {
      name: "Marketplace",
      path: "/marketplace",
      dropdown: [
        { name: "View All Products", path: "/marketplace/view-all-products" },
        { name: "Seeds & Crops", path: "/marketplace/seeds-crops" },
        {
          name: "Fertilizers & Pesticides",
          path: "/marketplace/fertilizers-pesticides",
        },
        { name: "Farming Equipment", path: "/marketplace/equipment" },
        { name: "Organic & Sustainable Farming", path: "/marketplace/organic" },
      ],
    },
    {
      name: "Government Assistance",
      path: "/govt-assistance",
      dropdown: [
        { name: "Latest Schemes & Policies", path: "/govt-assistance/schemes" },
        { name: "Check Eligibility", path: "/govt-assistance/eligibility" },
        { name: "Apply for Subsidy", path: "/govt-assistance/apply" },
        {
          name: "Track Application Status",
          path: "/govt-assistance/track-status",
        },
        {
          name: "Government Loan Programs",
          path: "/govt-assistance/loan-programs",
        },
      ],
    },
    {
      name: "Financial Services",
      path: "/financial-services",
      dropdown: [
        { name: "Loan Options for Farmers", path: "/financial-services/loans" },
        {
          name: "EMI & Loan Calculator",
          path: "/financial-services/calculator",
        },
        { name: "Apply for a Loan", path: "/financial-services/apply-loan" },
        { name: "Track Loan Status", path: "/financial-services/track-loan" },
      ],
    },
    {
      name: "Consult an Expert",
      path: "/consult-expert",
      dropdown: [
        {
          name: "Find an Agricultural Consultant",
          path: "/consult-expert/find",
        },
        { name: "Book a Consultation", path: "/consult-expert/book" },
        {
          name: "Video & Chat Consultations",
          path: "/consult-expert/video-chat",
        },
      ],
    },
    {
      name: "Resources",
      path: "/resources",
      dropdown: [
        { name: "Weather Updates & Forecasts", path: "/resources/weather" },
        { name: "Market Prices of Crops", path: "/resources/market-prices" },
        {
          name: "Farming Tips & Best Practices",
          path: "/resources/farming-tips",
        },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md" ref={dropdownRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-12 w-auto" src={Logo} alt="Agri-Nexus" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span className="text-gray-700 hover:text-green-600">
                      {item.name}
                    </span>
                    <IoIosArrowDown
                      className={`ml-1 transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-green-600"
                  >
                    {item.name}
                  </Link>
                )}

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute z-10 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-green-600 ring-opacity-5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="py-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={handleDropdownItemClick}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-700 hover:text-blue-600 cursor-pointer bg-green-600 hover:bg-green-700 rounded-md transition duration-200"
              aria-label="Search"
            >
              <FiSearch className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 hover:text-blue-600"
            >
              <FiShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </button>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("user")}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                >
                  <FiUser className="h-6 w-6" />
                  <span className="hidden md:block">{user.name}</span>
                  <IoIosArrowDown className="ml-1" />
                </button>

                <AnimatePresence>
                  {activeDropdown === "user" && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-green-600 ring-opacity-5 z-50">
                      <div className="py-1">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={handleDropdownItemClick}
                        >
                          Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <FiLogOut className="mr-2" />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link to="/sign-in" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <MobileNavbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navigationItems={navigationItems}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        handleDropdownItemClick={handleDropdownItemClick}
        setIsSearchOpen={setIsSearchOpen}
      />

      <SearchComponent
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        isSearching={isSearching}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
      />

      <CartSheet />
    </nav>
  );
};

export default Navbar;
