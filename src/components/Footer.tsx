import React from 'react';
import { Scale, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-2xl font-bold">iLawyer</span>
            </div>
            <p className="text-gray-400">
              Providing exceptional legal services with integrity and professionalism.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#practice-areas" className="text-gray-400 hover:text-white">Practice Areas</a></li>
              <li><a href="#attorneys" className="text-gray-400 hover:text-white">Attorneys</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Corporate Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Family Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Criminal Defense</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Real Estate</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Legal Street, Puran Dhaka</li>
              <li>Dhaka, 1212</li>
              <li>(+880) 123-4567</li>
              <li>info@ilawyer.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} iLawyer. All rights reserved. | Developed by Sihab Sahariar
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;