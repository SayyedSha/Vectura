// import React from "react";
import { Truck, Phone, Mail, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold">Stark Vectura</span>
            </div>
            <p className="text-gray-400">
              Professional moving services you can trust. Making your relocation smooth and stress-free.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Moving</li>
              <li>Commercial Moving</li>
              <li>Packing Services</li>
              {/* <li>Storage Solutions</li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> (555) 123-4567</li>
              <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> info@starkvectura.com</li>
              <li className="flex items-center"><Award className="h-4 w-4 mr-2" /> Licensed & Insured</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 . All rights reserved. Licensed and insured professional movers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
