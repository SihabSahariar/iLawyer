import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Firm</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            With over 20 years of experience, we've built a reputation for excellence in legal services and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Law Office" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide exceptional legal representation while maintaining the highest standards of professional integrity and client service.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Excellence in every aspect of our practice</li>
              <li>• Unwavering commitment to our clients</li>
              <li>• Integrity in all professional dealings</li>
              <li>• Innovation in legal solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;