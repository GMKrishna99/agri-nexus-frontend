import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { NAVBAR_ITEMS } from "@/constants/Navbar.constance";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-6">
        {/* Left Side - Logo & Description */}
        <div className="w-full md:w-[20%] text-center md:text-left">
          <img
            src={logo}
            alt="AgriNexus Logo"
            width={150}
            height={50}
            className="mx-auto md:mx-0"
          />
          <p className="mt-4 text-gray-400 text-sm">
            AgriNexus is your one-stop platform connecting farmers with
            essential agricultural products, financial services, and expert
            guidance.
          </p>
        </div>

        {/* Right Side - Links & Social Media */}
        <div className="flex flex-col w-full md:w-[70%] justify-between">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-4">
            {NAVBAR_ITEMS.map((item) => (
              <div key={item.label}>
                <h3 className="text-white font-semibold text-lg mb-4">
                  {item.label}
                </h3>
                {/* Sub-Items Display */}
                {item.dropdown && (
                  <ul className="ml-4 mt-1 space-y-4 text-sm text-gray-400">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.label}>
                        <Link to={subItem.path} className="hover:text-white">
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 justify-center md:justify-end mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} AgriNexus. All Rights Reserved.
      </div>
    </footer>
  );
}
