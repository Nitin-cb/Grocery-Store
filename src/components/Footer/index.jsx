import React from 'react';
import {   Linkedin,    Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/images/logo/Logo.png" alt="AL MADINA GROUP" className="h-32" />
            <p className="text-sm">
              Al Madina group, more than just a chain of stores; it stands as a cornerstone of the communities we serve. Established in 1984, Al Madina Retail has been committed to providing high-quality products, exceptional service, and an unmatched shopping experience to our valued customers in Fujairah.
            </p>
          </div>

          {/* Quick Links and Need Help */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Contact Us', 'Stores', 'Careers'].map((item) => (
                  <li key={item} className="pb-2 border-b border-white">
                    <a href="#" className="hover:text-gray-300 transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Need help?</h3>
              <p>📞 +971 224 2543</p>
              <p>✉️ info@almadinauae.ae</p>
              <p>Monday to Saturday: 9:00 - 19:00</p>
            </div>
          </div>

          {/* Location Map */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Location</h3>
            <div className="w-full h-48 bg-gray-300">
              <img src="/api/placeholder/300/200" alt="Location Map" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-4">
          {[  Linkedin,    Mail].map((Icon, index) => (
            <a key={index} href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;