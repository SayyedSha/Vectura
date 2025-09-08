import React from "react";
import { ArrowRight } from "lucide-react";

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProcessProps {
  process: Step[];
}

const Process: React.FC<ProcessProps> = ({ process }) => {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple 4-step process for a hassle-free move</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6 mx-auto shadow-lg">
                <step.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full">
                  <ArrowRight className="h-6 w-6 text-blue-600 ml-16" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
