import React, { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-blue-700" />
            <span className="ml-2 text-2xl font-bold text-gray-900">iLawyer</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-700 px-3 py-2 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-700 px-3 py-2 font-medium">About</a>
            <a href="#practice-areas" className="text-gray-700 hover:text-blue-700 px-3 py-2 font-medium">Practice Areas</a>
            <a href="#attorneys" className="text-gray-700 hover:text-blue-700 px-3 py-2 font-medium">Attorneys</a>
            <a href="#hire-us" className="text-gray-700 hover:text-blue-700 px-3 py-2 font-medium">Hire Us</a>
            <a href="#contact" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-700 hover:text-blue-700 px-3 py-2 font-medium">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-700 px-3 py-2 font-medium">About</a>
            <a href="#practice-areas" className="block text-gray-700 hover:text-blue-700 px-3 py-2 font-medium">Practice Areas</a>
            <a href="#attorneys" className="block text-gray-700 hover:text-blue-700 px-3 py-2 font-medium">Attorneys</a>
            <a href="#hire-us" className="block text-gray-700 hover:text-blue-700 px-3 py-2 font-medium">Hire Us</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-700 px-3 py-2 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;