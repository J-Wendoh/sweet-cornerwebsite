import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: '/WhatsApp Image 2025-08-24 at 2.42.46 PM.jpeg',
      alt: 'Sweet Corner dessert display'
    },
    {
      src: '/WhatsApp Image 2025-08-24 at 2.42.47 PM (1).jpeg',
      alt: 'Beautiful dessert arrangement'
    },
    {
      src: '/WhatsApp Image 2025-08-24 at 2.42.47 PM.jpeg',
      alt: 'Elegant dessert corner setup'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="pt-14 sm:pt-16 bg-gradient-to-br from-purple-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 text-xs sm:text-sm">Trusted by 500+ events</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Transform Your Event with</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Irresistible Dessert Corners
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From intimate celebrations to grand occasions, our expertly curated dessert corner packages 
              create unforgettable sweet experiences that leave your guests craving more.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('packages')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-hot-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-hot-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                View Packages
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('delivery')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                Order Cupcakes
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-hot-pink-600">500+</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Events Served</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-hot-pink-600">24hr</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Delivery Available</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-hot-pink-600">100%</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-4 sm:left-8 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-purple-100">
              <div className="text-lg sm:text-2xl font-bold text-hot-pink-600">15+</div>
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Sweet Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;