import React from "react";
import { CheckCircle } from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

interface ServicesProps {
  services: Service[];
  activeService: number;
  setActiveService: (index: number) => void;
}

const Services: React.FC<ServicesProps> = ({ services, activeService, setActiveService }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Moving Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive moving solutions tailored to your needs, from residential to commercial relocations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                activeService === index ? "border-blue-500 scale-105" : "border-transparent"
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
