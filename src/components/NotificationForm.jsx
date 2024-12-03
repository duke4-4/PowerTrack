import React, { useState } from 'react';

function NotificationForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    area: '',
    startTime: '',
    endTime: '',
    severity: 'moderate'
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

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-input"
            required
            placeholder="Enter notification title"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="form-input"
            required
            placeholder="Describe the power outage details"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Area</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="form-input"
            required
            placeholder="Affected area"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Severity</label>
          <select
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            className="form-input"
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Start Time</label>
          <input
            type="datetime-local"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">End Time</label>
          <input
            type="datetime-local"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-6">
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
          Add Notification
        </button>
      </div>
    </form>
  );
}

export default NotificationForm; 