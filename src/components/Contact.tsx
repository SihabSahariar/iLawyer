import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for a free consultation about your legal needs.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {/* <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div> */}

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-700 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Office Location</h3>
                <p className="text-gray-600">123 Legal Street, Suite 100<br />New York, NY 10001</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-700 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-700 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">info@ilawyer.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-blue-700 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Office Hours</h3>
                <p className="text-gray-600">Monday - Friday<br/>9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;