import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Sweet Corner
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
              Creating unforgettable sweet experiences for every celebration. From elegant event dessert corners 
              to fresh cupcake delivery, we make every occasion special.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-hot-pink-600 rounded-lg hover:from-purple-700 hover:to-hot-pink-700 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="p-2 bg-gradient-to-r from-purple-600 to-hot-pink-600 rounded-lg hover:from-purple-700 hover:to-hot-pink-700 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="p-2 bg-gradient-to-r from-purple-600 to-hot-pink-600 rounded-lg hover:from-purple-700 hover:to-hot-pink-700 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('home')} className="block text-sm sm:text-base text-gray-300 hover:text-hot-pink-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-sm sm:text-base text-gray-300 hover:text-hot-pink-400 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('packages')} className="block text-sm sm:text-base text-gray-300 hover:text-hot-pink-400 transition-colors">
                Packages
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block text-sm sm:text-base text-gray-300 hover:text-hot-pink-400 transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('delivery')} className="block text-sm sm:text-base text-gray-300 hover:text-hot-pink-400 transition-colors">
                Delivery
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm sm:text-base text-gray-300">
              <div>Event Dessert Corners</div>
              <div>Wedding Dessert Tables</div>
              <div>Corporate Catering</div>
              <div>Cupcake Delivery</div>
              <div>Custom Cake Orders</div>
              <div>Holiday Specials</div>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-hot-pink-400" />
                <span className="text-sm sm:text-base text-gray-300">(555) 123-SWEET</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-hot-pink-400" />
                <span className="text-sm sm:text-base text-gray-300">hello@sweetcorner.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-hot-pink-400" />
                <span className="text-sm sm:text-base text-gray-300">Downtown & Suburbs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-hot-pink-400" />
                <span className="text-sm sm:text-base text-gray-300">Mon-Sat: 8AM-8PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm">
              © 2025 Sweet Corner. All rights reserved.
            </div>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-hot-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-hot-pink-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-hot-pink-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;