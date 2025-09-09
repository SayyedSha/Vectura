import  { useState } from "react";
import { Phone, Mail, MapPin, X } from "lucide-react";
import ScheduleForm from "./ScheduleForm";

const Contact = () => {
  // 1. State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Move?</h2>
            <p className="text-xl text-blue-100">Get your free quote today and experience stress-free moving</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Contact info cards */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white">
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <p className="text-blue-100 mb-4">Speak with our experts</p>
              <p className="text-xl font-semibold">(555) 123-4567</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white">
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-100 mb-4">Get a detailed quote</p>
              <p className="text-xl font-semibold">info@starkvectura.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Service Areas</h3>
              <p className="text-blue-100 mb-4">We serve in cities</p>
              <p className="text-xl font-semibold">Mumbai</p>
            </div>
          </div>

          <div className="text-center mt-12">
            {/* 2. Add onClick handler to the button */}
            <button
              onClick={openModal}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Schedule Your Move Today
            </button>
          </div>
        </div>
      </section>

      {/* 3. Conditional rendering for the Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={closeModal} // Close modal if overlay is clicked
        >
          <div 
            className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside it
          >
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            {/* 4. Render the form and pass the close function */}
            <ScheduleForm onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;