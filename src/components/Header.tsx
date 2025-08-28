import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-purple-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Sweet Corner
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('packages')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Packages
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('delivery')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Delivery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs xl:text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>(555) 123-SWEET</span>
            </div>
            <div className="flex items-center space-x-2 text-xs xl:text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>hello@sweetcorner.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-purple-100 bg-white">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('packages')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Packages
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('delivery')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Delivery
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;