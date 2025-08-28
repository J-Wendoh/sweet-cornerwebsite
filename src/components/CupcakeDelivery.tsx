import React, { useState } from 'react';
import { Heart, Star, Coffee, Cake } from 'lucide-react';

const SweetOfferings: React.FC = () => {
  const specialties = [
    { 
      icon: Cake,
      name: 'Cupcakes & Cake Treats', 
      items: ['Fresh Daily Cupcakes', 'Cake Pops', 'Cake Bites', 'Tea Cakes'],
      description: 'Handcrafted daily with premium ingredients'
    },
    { 
      icon: Heart,
      name: 'Bite-Sized Delights', 
      items: ['Mouse Bites', 'Mini Desserts', 'Petit Fours', 'Sweet Samples'],
      description: 'Perfect for events and tastings'
    },
    { 
      icon: Star,
      name: 'Event Experiences', 
      items: ['Chocolate Fountains', 'Dessert Corners', 'Cake Troughs', 'Tea Time Picnics'],
      description: 'Complete setups for memorable occasions'
    },
    { 
      icon: Coffee,
      name: 'Fresh & Wholesome', 
      items: ['Fresh Fruit Bowls', 'Seasonal Arrangements', 'Healthy Options', 'Custom Displays'],
      description: 'Refreshing alternatives and seasonal favorites'
    }
  ];

  return (
    <section id="delivery" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Sweet <span className="text-hot-pink-600">Specialties</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            From individual treats to complete event experiences, we offer a growing selection 
            of handcrafted desserts and professional setups for every occasion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-hot-pink-600 text-white rounded-lg mr-4">
                  <specialty.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900">{specialty.name}</h3>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 mb-6">{specialty.description}</p>
              
              <div className="space-y-3">
                {specialty.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-hot-pink-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-hot-pink-600 text-white p-6 sm:p-8 rounded-2xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Always Growing & Expanding</h3>
          <p className="text-lg sm:text-xl mb-6">
            We're constantly adding new sweet treats and services to our menu. 
            Each creation is made with love and the finest ingredients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-bold mb-2">Fresh Daily</div>
              <div className="text-sm sm:text-base text-purple-100">Made to order</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold mb-2">Premium Quality</div>
              <div className="text-sm sm:text-base text-purple-100">Finest ingredients</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold mb-2">Custom Options</div>
              <div className="text-sm sm:text-base text-purple-100">Tailored to you</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default SweetOfferings