import React, { useState } from 'react';

function TipForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'lighting'
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

  const categories = [
    { value: 'lighting', label: '💡 Lighting' },
    { value: 'appliances', label: '🔌 Appliances' },
    { value: 'heating', label: '🌡️ Heating' },
    { value: 'cooling', label: '❄️ Cooling' },
    { value: 'water', label: '💧 Water' }
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-input"
            required
            placeholder="Enter tip title"
          />
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
            placeholder="Describe the power saving tip in detail..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-input"
          >
            {categories.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
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
            Add Tip
          </button>
        </div>
      </div>
    </form>
  );
}

export default TipForm; 