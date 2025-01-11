import React from 'react';

const attorneys = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Partner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    specialties: ['Corporate Law', 'Mergers & Acquisitions'],
  },
  {
    name: 'Michael Chen',
    role: 'Partner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    specialties: ['Criminal Defense', 'Civil Litigation'],
  },
  {
    name: 'Emily Rodriguez',
    role: 'Associate',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    specialties: ['Family Law', 'Real Estate'],
  },
];

const Attorneys = () => {
  return (
    <section id="attorneys" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Attorneys</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of experienced legal professionals dedicated to serving your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={attorney.image} 
                alt={attorney.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{attorney.name}</h3>
                <p className="text-blue-700 font-medium mb-4">{attorney.role}</p>
                <div className="space-y-2">
                  <p className="text-gray-600 font-medium">Specialties:</p>
                  <ul className="text-gray-600">
                    {attorney.specialties.map((specialty, idx) => (
                      <li key={idx}>• {specialty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;