import React from 'react';
import { Briefcase, Home, Scale, Users, Building2, Shield } from 'lucide-react';

const practices = [
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Corporate Law',
    description: 'Comprehensive legal solutions for businesses of all sizes, from startups to corporations.'
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Real Estate Law',
    description: 'Expert guidance in property transactions, leasing, and real estate litigation.'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Family Law',
    description: 'Compassionate representation in divorce, custody, and family-related matters.'
  },
  {
    icon: <Scale className="h-8 w-8" />,
    title: 'Civil Litigation',
    description: 'Skilled advocacy in complex civil disputes and commercial litigation.'
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Employment Law',
    description: 'Protection of both employer and employee rights in workplace matters.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Criminal Defense',
    description: 'Strong defense strategies for those facing criminal charges.'
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Practice Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive legal services across multiple practice areas, ensuring expert representation for all your legal needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-blue-700 mb-4">{practice.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;