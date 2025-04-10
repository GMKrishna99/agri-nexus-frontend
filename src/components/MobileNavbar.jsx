import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../assets/logo.png";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

const MobileNavbar = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  navigationItems,
  activeDropdown,
  toggleDropdown,
  handleDropdownItemClick,
  setIsSearchOpen,
}) => {
  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>
            <img src={Logo} alt="Agri-Nexus" className="h-12 w-auto" />
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsSearchOpen(true);
            }}
            className="flex items-center w-full px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
          >
            <FiSearch className="mr-2 h-5 w-5" />
            Search
          </button>

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
  );
};

export default MobileNavbar;
