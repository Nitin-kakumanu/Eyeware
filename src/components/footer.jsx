import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Madcappery Store</h3>
            <p className="text-sm text-gray-400 mb-4">
              Providing exceptional solutions and services since 2020. 
              Committed to excellence in everything we do.
            </p>
            <p className="text-sm text-gray-400">
              123 Business Avenue<br />
              Road No.3<br />
              Uppal, Near Metro Station
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@MadcapperyStore.com</li>
              <li>Phone: (+91) 9922312340</li>
              <li>Support: support@MadcapperyStore.com</li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-4 flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Madcappery Store. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
