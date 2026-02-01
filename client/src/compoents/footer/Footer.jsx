import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">About Us</h3>
          <p className="text-gray-400 text-sm">
            We provide the best streaming experience for your favorite TV channels and games. Enjoy anytime, anywhere.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            {/* <li>
              <Link to="/categories" className="hover:text-white transition">Categories</Link>
            </li> */}
            <li>
              <Link to="/about-us" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social / Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Follow Us</h3>
          <div className="flex gap-4 mb-3">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
          </div>
          <p className="text-gray-400 text-sm">
            Email: support@example.com
          </p>
          <p className="text-gray-400 text-sm">
            Phone: +91 1234567890
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} iOdia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
