import React from 'react';
import {
  IoCardOutline,
  IoCashOutline,
  IoCalendarOutline
} from 'react-icons/io5';
import { FaBuilding } from 'react-icons/fa';

function PaymentForm() {
  return (
    <form className="space-y-4">
      <div className="flex items-center">
        <IoCardOutline className="mr-2 text-blue-500" />
        <input type="text" placeholder="Card Number" className="w-full p-2 border rounded" />
      </div>
      <div className="flex items-center">
        <IoCashOutline className="mr-2 text-green-500" />
        <input type="text" placeholder="Amount" className="w-full p-2 border rounded" />
      </div>
      <div className="flex items-center">
        <IoCalendarOutline className="mr-2 text-yellow-500" />
        <input type="text" placeholder="Expiry Date" className="w-full p-2 border rounded" />
      </div>
      <div className="flex items-center">
        <FaBuilding className="mr-2 text-gray-500" />
        <input type="text" placeholder="Billing Address" className="w-full p-2 border rounded" />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Submit Payment
      </button>
    </form>
  );
}

export default PaymentForm; 