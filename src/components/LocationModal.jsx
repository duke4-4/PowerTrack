import { useState } from 'react';
import Modal from 'react-modal';
import { 
  IoLocationSharp, 
  IoSearch,
  IoClose
} from 'react-icons/io5';

Modal.setAppElement('#root'); // Add this line to avoid accessibility warnings

export default function LocationModal({ isOpen, onRequestClose, onLocationSelect }) {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationSelect({
      address: address || "1 Kennilworth Road, Newlands",
      zone: "Zone 3",
      schedule: ["08:00-10:30", "16:00-18:30"],
      faults: ["Transformer maintenance", "Cable fault repair"]
    });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Select Location"
      className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <IoLocationSharp className="mr-2 text-blue-600" />
          Select Your Location
        </h2>
        <button 
          onClick={onRequestClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <IoClose size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="relative">
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full p-3 pl-10 border rounded-lg shadow-sm mb-4"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center"
        >
          <IoLocationSharp className="mr-2" />
          Select Location
        </button>
      </form>
    </Modal>
  );
} 