import React, { useState, useEffect } from 'react';
import { IoClose, IoWarningOutline } from 'react-icons/io5';
import api from '../services/api';
import FaultForm from '../components/FaultForm';
import FaultList from '../components/FaultList';

function FaultReport() {
  const [faults, setFaults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchFaults();
  }, []);

  const fetchFaults = async () => {
    try {
      const response = await api.getFaults();
      setFaults(response.data);
    } catch (error) {
      console.error('Error fetching faults:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitFault = async (faultData) => {
    try {
      await api.createFault({
        ...faultData,
        userId: '1', // In a real app, this would come from auth context
        reportedAt: new Date().toISOString(),
        status: 'pending'
      });
      fetchFaults();
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting fault:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 mb-8 shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Fault Reporting</h1>
            <p className="text-red-100">Report and track electrical faults in your area</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className={`${
              showForm 
                ? 'bg-red-600 text-white hover:bg-red-500'
                : 'bg-white text-red-600 hover:bg-gray-100'
            } transition-all duration-200 rounded-lg px-6 py-3 font-medium flex items-center space-x-2 shadow-lg hover:shadow-xl`}
          >
            {showForm ? <IoClose className="text-xl" /> : <IoWarningOutline className="text-xl" />}
            <span>{showForm ? 'Cancel' : 'Report Fault'}</span>
          </button>
        </div>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 transition-all duration-300 ease-in-out">
          <FaultForm 
            onSubmit={handleSubmitFault}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <div className="bg-gray-50 rounded-2xl p-6">
        <FaultList faults={faults} />
      </div>
    </div>
  );
}

export default FaultReport;