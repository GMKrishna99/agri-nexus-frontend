import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../assets/logo.png";
import useAuthStore from "@/store/authStore";
import useCartStore from "@/store/cartStore";
import { CartSheet } from "./CartSheet";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  const { items, setIsCartOpen } = useCartStore();
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

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
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
        {
          name: "Upcoming Agricultural Events & Webinars",
          path: "/govt-assistance/events",
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
        {
          name: "Government & Private Bank Partnerships",
          path: "/financial-services/partnerships",
        },
        {
          name: "Insurance & Risk Management",
          path: "/financial-services/insurance",
        },
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
        { name: "Expert Blogs & Insights", path: "/consult-expert/blogs" },
        {
          name: "Success Stories & Case Studies",
          path: "/consult-expert/case-studies",
        },
        {
          name: "Consultant Options",
          subItems: [
            { name: "Register as an Expert", path: "/consult-expert/register" },
            { name: "Manage Appointments", path: "/consult-expert/manage" },
          ],
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
        { name: "Guides & Tutorials", path: "/resources/guides" },
        { name: "Agriculture News & Trends", path: "/resources/news" },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md" ref={dropdownRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-12 w-auto" src={Logo} alt="Agri-Nexus" />
            </Link>
          </div>

          {/* Desktop Navigation */}
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

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute z-10 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-green-600 ring-opacity-5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="py-1">
                        {item.dropdown.map((subItem) => (
                          <div key={subItem.name}>
                            {subItem.subItems ? (
                              <div className="relative">
                                <div
                                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between cursor-pointer"
                                  onClick={() => toggleDropdown(subItem.name)}
                                >
                                  <span>{subItem.name}</span>
                                  <IoIosArrowDown
                                    className={`ml-2 transform ${
                                      activeDropdown === subItem.name
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </div>
                                {activeDropdown === subItem.name && (
                                  <div className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-md">
                                    {subItem.subItems.map((subSubItem) => (
                                      <Link
                                        key={subSubItem.name}
                                        to={subSubItem.path}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={handleDropdownItemClick}
                                      >
                                        {subSubItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                to={subItem.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={handleDropdownItemClick}
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
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

            {/* User Menu */}
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

                {/* User Dropdown */}
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
                        <Link
                          to="/orders"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={handleDropdownItemClick}
                        >
                          Orders
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout();
                            handleDropdownItemClick();
                          }}
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

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
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

      {/* Mobile Menu Sheet */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>
              <img src={Logo} alt="Agri-Nexus" className="h-12 w-auto" />
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center w-full px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    >
                      {item.name}
                      <IoIosArrowDown
                        className={`ml-2 transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <div key={subItem.name}>
                            {subItem.subItems ? (
                              <div>
                                <button
                                  onClick={() => toggleDropdown(subItem.name)}
                                  className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                                >
                                  {subItem.name}
                                  <IoIosArrowDown
                                    className={`ml-2 transform ${
                                      activeDropdown === subItem.name
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </button>
                                {activeDropdown === subItem.name && (
                                  <div className="pl-4 mt-2 space-y-2">
                                    {subItem.subItems.map((subSubItem) => (
                                      <Link
                                        key={subSubItem.name}
                                        to={subSubItem.path}
                                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                                        onClick={handleDropdownItemClick}
                                      >
                                        {subSubItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                to={subItem.path}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                                onClick={handleDropdownItemClick}
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    onClick={handleDropdownItemClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Cart Sheet */}
      <CartSheet />
    </nav>
  );
};

export default Navbar;
