import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const flavors = [
  {
    name: "Classic Vanilla Bean",
    description: "Madagascar vanilla with buttercream frosting and delicate vanilla bean specks"
  },
  {
    name: "Rich Chocolate Fudge",
    description: "Decadent chocolate cake with silky chocolate ganache and chocolate shavings"
  },
  {
    name: "Strawberry Bliss",
    description: "Fresh strawberry cake with cream cheese frosting and strawberry compote"
  },
  {
    name: "Lemon Zest",
    description: "Bright lemon cake with tangy lemon buttercream and candied lemon peel"
  },
  {
    name: "Red Velvet Dream",
    description: "Classic red velvet with cream cheese frosting and white chocolate curls"
  },
  {
    name: "Salted Caramel",
    description: "Vanilla cake with salted caramel filling and caramel buttercream drizzle"
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    eventDate: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get in Touch for <span className="text-hot-pink-600">Sweet</span> Information
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Interested in our dessert services? We'd love to tell you more about our sweet offerings 
            and how we can make your next event or celebration extra special.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-purple-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-hot-pink-100 rounded-lg">
                    <Phone className="w-6 h-6 text-hot-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-sm sm:text-base text-gray-600">(555) 123-SWEET</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-hot-pink-100 rounded-lg">
                    <Mail className="w-6 h-6 text-hot-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-sm sm:text-base text-gray-600">hello@sweetcorner.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-hot-pink-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-hot-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Service Area</div>
                    <div className="text-sm sm:text-base text-gray-600">Downtown & Suburbs</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-hot-pink-100 rounded-lg">
                    <Clock className="w-6 h-6 text-hot-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Business Hours</div>
                    <div className="text-sm sm:text-base text-gray-600">Mon-Sat: 8AM-8PM</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                <p className="text-xs sm:text-sm text-hot-pink-800">
                  <strong>Quick Response Guarantee:</strong> We respond to all inquiries within 2 hours during business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-purple-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Get More Information</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hot-pink-500 focus:border-hot-pink-500 transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hot-pink-500 focus:border-hot-pink-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hot-pink-500 focus:border-hot-pink-500 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hot-pink-500 focus:border-hot-pink-500 transition-all"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="graduation">Graduation</option>
                      <option value="baby-shower">Baby Shower</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Guest Count *
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hot-pink-500 focus:border-hot-pink-500 transition-all"
                      placeholder="Expected number of guests"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hot-pink-500 focus:border-hot-pink-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hot-pink-500 focus:border-hot-pink-500 transition-all"
                    placeholder="Tell us about your event, what dessert services interest you, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-hot-pink-600 text-white font-semibold py-4 rounded-lg hover:from-purple-700 hover:to-hot-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Cupcake Flavors Showcase */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Signature <span className="text-hot-pink-600">Flavors</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {flavors.map((flavor, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{flavor.name}</h4>
                <p className="text-sm sm:text-base text-gray-600">{flavor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;