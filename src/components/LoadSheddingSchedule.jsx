import { useState } from 'react';
import { 
  IoLocationSharp, 
  IoTimeOutline,
  IoWarning,
  IoSearch,
  IoCalendarClear
} from 'react-icons/io5';
import { FaBolt } from 'react-icons/fa';
import LocationModal from './LocationModal';

export default function LoadSheddingSchedule() {
  const [selectedLocation, setSelectedLocation] = useState({
    address: "1 Kennilworth Road, Newlands",
    zone: "Zone 3",
    schedule: ["08:00-10:30", "16:00-18:30"],
    faults: ["Transformer maintenance", "Cable fault repair"]
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FaBolt className="mr-2 text-yellow-500" />
        Load Shedding Schedule
      </h2>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium flex items-center">
            <IoLocationSharp className="mr-2 text-blue-600" />
            Current Location:
          </p>
          <p className="text-gray-600 ml-6">{selectedLocation.address}</p>
          <p className="text-gray-600 ml-6">{selectedLocation.zone}</p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="font-semibold flex items-center">
            <IoTimeOutline className="mr-2 text-yellow-600" />
            Today's Schedule:
          </p>
          <ul className="mt-2 space-y-2">
            {selectedLocation.schedule.map((time, index) => (
              <li key={index} className="flex items-center ml-6">
                <IoCalendarClear className="mr-2 text-yellow-600" />
                {time}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <p className="font-semibold flex items-center">
            <IoWarning className="mr-2 text-red-600" />
            Current Faults:
          </p>
          <ul className="mt-2 space-y-2">
            {selectedLocation.faults.map((fault, index) => (
              <li key={index} className="flex items-center ml-6">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {fault}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={openModal}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center"
      >
        <IoSearch className="mr-2" />
        Enter Location
      </button>

      <LocationModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onLocationSelect={setSelectedLocation}
      />
    </div>
  );
} 