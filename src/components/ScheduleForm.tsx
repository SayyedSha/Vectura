import React from 'react';
import { Zap } from "lucide-react";

// 1. Define an interface for the component's props
interface ScheduleFormProps {
  onClose: () => void; // onClose is a function that takes no arguments and returns nothing
}

// 2. Type the component with React.FC and the props interface
const ScheduleForm: React.FC<ScheduleFormProps> = ({ onClose }) => {
  
  // 3. Type the event object for the form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the browser from reloading the page
    
    // --- Add your form submission logic here ---
    alert("Quote calculation submitted! We will be in touch shortly.");
    
    onClose(); // Close the modal after submission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Quick Quote</h3>
        <Zap className="h-8 w-8 text-yellow-500" />
      </div>
      <div className="space-y-4">
        <div>
          <label htmlFor="from-address" className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <input 
            id="from-address"
            type="text" 
            placeholder="Current address" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            required 
          />
        </div>
        <div>
          <label htmlFor="to-address" className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <input 
            id="to-address"
            type="text" 
            placeholder="New address" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            required
          />
        </div>
        <div>
          <label htmlFor="moving-date" className="block text-sm font-medium text-gray-700 mb-1">Moving Date</label>
          <input 
            id="moving-date"
            type="date" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            required
          />
        </div>
        <div className="pt-4 flex flex-col sm:flex-row gap-3">
           <button 
            type="button" 
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Calculate Cost
          </button>
        </div>
      </div>
    </form>
  );
};

export default ScheduleForm;