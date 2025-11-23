
import React from "react";
import "remixicon/fonts/remixicon.css";

const FooterSection = () => {
  return (
    <footer id="footer" className="bg-black py-16">
      <div className="container mx-auto px-6 md:px-16">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-10 h-10" viewBox="0 0 100 100">
                <path d="M50 95 C 20 75, 20 35, 50 55" fill="#062042ff" />
                <path d="M50 95 C 80 75, 80 35, 50 55" fill="#062042ff" />
                <path d="M50 95 C 30 85, 35 55, 50 70" fill="#062042ff" opacity="0.7" />
                <path d="M50 95 C 70 85, 65 55, 50 70" fill="#062042ff" opacity="0.7" />
                <path d="M50 70 C 40 50, 40 20, 50 10 C 60 20, 60 50, 50 70 Z" fill="#ff8706ff" />
              </svg>
              <span className="text-xl font-bold text-white">RAREPHARMASUPPLY</span>
            </div>
            <p className="text-gray-300 mb-4 text-base">
              Your trusted partner in sourcing and importing specialty medicines for cancer, rare diseases, and other critical conditions.
            </p>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="hover:text-blue-400 text-white" aria-label="Facebook">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="hover:text-green-400 text-white" aria-label="WhatsApp">
                <i className="ri-whatsapp-fill"></i>
              </a>
              <a href="#" className="hover:text-pink-400 text-white" aria-label="Instagram">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="#" className="hover:text-red-400 text-white" aria-label="Google">
                <i className="ri-google-fill"></i>
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-200 text-base">
              <li>
                <a href="/about" className="hover:text-blue-400">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-400">Services</a>
              </li>
              <li>
                <a href="/global-medicines" className="hover:text-blue-400">Medicines Directory</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-200 text-base">
              <li className="flex items-center gap-2">
                <i className="ri-mail-fill text-blue-400"></i>
                <a href="mailto:rarepharmasupply@gmail.com" className="hover:underline">rarepharmasupply@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-fill text-blue-400"></i> <span>+91 9768640067</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-map-pin-fill text-blue-400"></i>{" "}
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
          {/* Disclaimer */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Disclaimer</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We are a service provider facilitating access to medicines through legal channels. We are not a manufacturer or an authorized distributor of these products.
            </p>
          </div>
        </div>
        {/* Divider & copyright */}
        <div
          className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm"
        >
          &copy; {new Date().getFullYear()} Rare Pharma Supply. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
