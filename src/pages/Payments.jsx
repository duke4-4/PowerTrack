import React, { useState, useEffect } from 'react';
import { IoClose, IoCardOutline, IoWalletOutline } from 'react-icons/io5';
import api from '../services/api';
import PaymentForm from '../components/PaymentForm';
import PaymentHistory from '../components/PaymentHistory';

function Payments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await api.getPayments();
      setPayments(response.data);
    } catch (error) {
      console.error('Error fetching payments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async (paymentData) => {
    try {
      await api.createPayment({
        ...paymentData,
        userId: '1', // In a real app, this would come from auth context
        paymentDate: new Date().toISOString(),
        status: 'pending',
        transactionId: `PAY${Date.now()}`
      });
      fetchPayments();
      setShowForm(false);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          {/* <span className="mt-4 text-gray-600">Loading payments...</span> */}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 mb-8 shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Electricity Payments</h1>
            <p className="text-primary-100 text-white">Manage your electricity payments securely</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className={`${
              showForm 
                ? 'bg-primary-600 text-white hover:bg-primary-400'
                : 'bg-white text-primary-500 hover:bg-gray-100 text-primary-500'
            } transition-all duration-200 rounded-lg px-6 py-3 font-medium flex items-center space-x-2 shadow-lg hover:shadow-xl`}
          >
            {showForm ? <IoClose className="text-xl" /> : <IoWalletOutline className="text-xl" />}
            <span>{showForm ? 'Cancel' : 'Make Payment'}</span>
          </button>
        </div>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 transition-all duration-300 ease-in-out">
          <PaymentForm 
            onSubmit={handlePayment}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <div className="bg-gray-50 rounded-2xl p-6">
        <PaymentHistory payments={payments} />
      </div>
    </div>
  );
}

export default Payments;