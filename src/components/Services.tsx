import React from 'react';
import { Calendar, Truck, Users, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: 'Sweet Treats & Desserts',
      description: 'A delightful variety of handcrafted desserts perfect for any occasion',
      features: ['Fresh Cupcakes', 'Cake Pops & Cake Bites', 'Mouse Bites', 'Tea Cakes']
    },
    {
      icon: Calendar,
      title: 'Event Setups & Experiences',
      description: 'Complete dessert experiences and themed setups for memorable celebrations',
      features: ['Chocolate Fountain Setups', 'Dessert Corner Displays', 'Tea Time Picnics', 'Cake Troughs']
    },
    {
      icon: Clock,
      title: 'Fresh & Healthy Options',
      description: 'Wholesome treats and refreshing options to complement your sweet selections',
      features: ['Fresh Fruit Bowls', 'Seasonal Specialties', 'Custom Arrangements', 'Growing Menu']
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="text-hot-pink-600">Sweet</span> Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We offer an ever-growing selection of dessert services and sweet treats to make 
            every occasion special and memorable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 sm:p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-hot-pink-600 text-white rounded-lg mr-4 group-hover:from-purple-700 group-hover:to-hot-pink-700 transition-colors">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-hot-pink-400 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">What We Offer</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Users, title: 'Custom Desserts', desc: 'Handcrafted treats made fresh daily' },
              { icon: Calendar, title: 'Event Setups', desc: 'Complete dessert corner experiences' },
              { icon: Clock, title: 'Growing Menu', desc: 'Always expanding our sweet offerings' },
              { icon: Truck, title: 'Professional Service', desc: 'Quality and presentation guaranteed' }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-hot-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;