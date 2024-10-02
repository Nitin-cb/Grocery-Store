import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { FacebookIcon, InstaIcon, LinkedinIcon, MailIcon, TikTokIcons, TwitterIcon, YoutubeIcon } from '../../utils/icons';

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
            <div className="space-y-2 flex flex-col justify-center ite">
              <h3 className="font-semibold text-lg">Need help?</h3>
              <p>📞 +971 224 2543</p>
              <p>✉️ info@almadinauae.ae</p>
              <p>Monday to Saturday: 9:00 - 19:00</p>
            </div>
          </div>

          {/* Location Map */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Location</h3>
            <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928647.3915625575!2d45.512063178125!3d24.605450400000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0f5c5aa61909%3A0xe96a32c9acd934e8!2sAl%20Madina%20Hypermarket!5e0!3m2!1sen!2sin!4v1727761666196!5m2!1sen!2sin" 
                width="800" 
                height="600"  
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-2">
          <a href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
            <FacebookIcon />
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
            <InstaIcon />
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
            <LinkedinIcon />
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
            <TikTokIcons />
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
            <YoutubeIcon />
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
            <TwitterIcon />
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition-colors duration-200">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
