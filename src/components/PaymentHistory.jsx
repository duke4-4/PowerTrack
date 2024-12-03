import React from 'react';
import {
  IoCalendarOutline,
  IoCashOutline,
  IoCheckmarkCircleOutline,
  IoTimeOutline
} from 'react-icons/io5';
import { FaBuilding } from 'react-icons/fa';

function PaymentHistory() {
  const payments = [
    {
      id: 1,
      date: "2024-03-15",
      amount: 156.50,
      status: "paid",
      method: "Credit Card",
      billPeriod: "February 2024",
      consumption: "450 kWh"
    },
    {
      id: 2,
      date: "2024-02-15",
      amount: 142.75,
      status: "paid",
      method: "Bank Transfer",
      billPeriod: "January 2024",
      consumption: "510 kWh"
    },
    {
      id: 3,
      date: "2024-01-15",
      amount: 168.20,
      status: "paid",
      method: "Direct Debit",
      billPeriod: "December 2023",
      consumption: "580 kWh"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <IoCashOutline className="mr-2 text-green-500" />
        Payment History
      </h2>
      
      <div className="space-y-4">
        {payments.map((payment) => (
          <div key={payment.id} className="border rounded-lg p-4 hover:bg-gray-50">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-medium flex items-center">
                  <IoCalendarOutline className="mr-1 text-blue-500" />
                  {payment.date}
                </p>
                <p className="text-sm text-gray-600 flex items-center mt-1">
                  <IoTimeOutline className="mr-1 text-gray-400" />
                  {payment.billPeriod}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg">${payment.amount}</p>
                <span className="inline-flex items-center text-sm text-green-600">
                  <IoCheckmarkCircleOutline className="mr-1" />
                  {payment.status}
                </span>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 flex items-center justify-between mt-2 pt-2 border-t">
              <span className="flex items-center">
                <FaBuilding className="mr-1 text-gray-400" />
                {payment.method}
              </span>
              <span>{payment.consumption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentHistory; 