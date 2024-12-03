import React, { useState } from 'react';
import { 
  IoFlashOutline,
  IoWarningOutline,
  IoConstructOutline,
  IoPowerOutline,
  IoBusinessOutline,
  IoHelpCircleOutline
} from 'react-icons/io5';

function FaultForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    type: 'power_outage',
    description: '',
    location: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const faultTypes = [
    { value: 'power_outage', label: <><IoFlashOutline className="inline mr-1" /> Power Outage</> },
    { value: 'voltage_issue', label: <><IoWarningOutline className="inline mr-1" /> Voltage Issue</> },
    { value: 'equipment_damage', label: <><IoConstructOutline className="inline mr-1" /> Equipment Damage</> },
    { value: 'wire_damage', label: <><IoPowerOutline className="inline mr-1" /> Wire Damage</> },
    { value: 'transformer_issue', label: <><IoBusinessOutline className="inline mr-1" /> Transformer Issue</> },
    { value: 'other', label: <><IoHelpCircleOutline className="inline mr-1" /> Other</> }
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 mb-8 backdrop-blur-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Report a Fault</h2>
      
      <div className="space-y-8">
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Fault Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 shadow-sm"
          >
            {faultTypes.map(({ value, label }) => (
              <option key={value} value={value} className="py-2">{label}</option>
            ))}
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 shadow-sm resize-none"
            required
            placeholder="Please describe the issue in detail..."
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 shadow-sm"
            required
            placeholder="Enter the address or location of the fault"
          />
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-200 font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg shadow-blue-200"
          >
            Submit Report
          </button>
        </div>
      </div>
    </form>
  );
}

export default FaultForm;