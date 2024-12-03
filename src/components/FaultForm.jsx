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
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Fault Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-input"
          >
            {faultTypes.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="form-input"
            required
            placeholder="Please describe the issue in detail..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-input"
            required
            placeholder="Enter the address or location of the fault"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            Submit Report
          </button>
        </div>
      </div>
    </form>
  );
}

export default FaultForm;