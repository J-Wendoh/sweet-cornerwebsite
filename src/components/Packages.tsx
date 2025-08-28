import React from 'react';
import { Check, Star, Users } from 'lucide-react';

const Packages: React.FC = () => {
  const offerings = [
    {
      name: 'Cupcakes & Treats',
      category: 'Individual Desserts',
      popular: false,
      features: [
        'Fresh daily cupcakes',
        'Cake pops & cake bites',
        'Mouse bites',
        'Tea cakes',
        'Various flavors available'
      ]
    },
    {
      name: 'Event Setups',
      category: 'Complete Experiences',
      popular: true,
      features: [
        'Chocolate fountain setups',
        'Dessert corner displays',
        'Tea time picnics',
        'Cake troughs',
        'Professional styling',
        'Complete event coordination'
      ]
    },
    {
      name: 'Fresh & Healthy',
      category: 'Wholesome Options',
      popular: false,
      features: [
        'Fresh fruit bowls',
        'Seasonal arrangements',
        'Custom presentations',
        'Healthy alternatives',
        'Growing menu options'
      ]
    }
  ];

  return (
    <section id="packages" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Sweet <span className="text-hot-pink-600">Offerings</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover our diverse range of dessert services and sweet treats. We're constantly 
            growing and adding new delicious options to our menu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full ${offering.popular ? 'border-2 border-purple-500 sm:transform sm:scale-105' : 'border border-gray-200 hover:scale-105'}`}>
              {offering.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-hot-pink-500 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{offering.name}</h3>
                  <div className="text-base sm:text-lg font-semibold text-hot-pink-500 mb-2">{offering.category}</div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {offering.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-hot-pink-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 mb-4">
            We're always growing and expanding our sweet offerings!
          </p>
          <p className="text-hot-pink-600 font-semibold">
            More delicious options coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;