import { useState, useEffect } from 'react';
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
    address: "Loading location...",
    zone: "Loading zone...",
    schedule: [],
    faults: ["Transformer maintenance", "Cable fault repair"]
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock schedule data
  const mockSchedule = {
    "Zone 1": [
      "06:00-08:30",
      "14:00-16:30",
      "22:00-00:30"
    ],
    "Zone 2": [
      "08:00-10:30", 
      "16:00-18:30",
      "00:00-02:30"
    ],
    "Zone 3": [
      "10:00-12:30",
      "18:00-20:30",
      "02:00-04:30"
    ],
    "Zone 4": [
      "12:00-14:30",
      "20:00-22:30",
      "04:00-06:30"
    ]
  };

  // Get user's location on component mount
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Reverse geocoding using OpenStreetMap Nominatim API
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            
            // Determine zone based on location (mock logic)
            const zoneNumber = Math.floor(Math.random() * 4) + 1;
            
            setSelectedLocation(prev => ({
              ...prev,
              address: data.display_name,
              zone: `Zone ${zoneNumber}`,
              schedule: mockSchedule[`Zone ${zoneNumber}`]
            }));
          } catch (error) {
            console.error("Error getting location details:", error);
            setSelectedLocation(prev => ({
              ...prev,
              address: "Error getting location",
              zone: "Zone 1",
              schedule: mockSchedule["Zone 1"]
            }));
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setSelectedLocation(prev => ({
            ...prev,
            address: "Location access denied",
            zone: "Zone 1",
            schedule: mockSchedule["Zone 1"]
          }));
        }
      );
    } else {
      setSelectedLocation(prev => ({
        ...prev,
        address: "Geolocation not supported",
        zone: "Zone 1",
        schedule: mockSchedule["Zone 1"]
      }));
    }
  }, []);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Get current schedule based on time
  useEffect(() => {
    if (selectedLocation.zone !== "Loading zone...") {
      const hour = currentTime.getHours();
      const scheduleForZone = mockSchedule[selectedLocation.zone];
      
      const updatedSchedule = scheduleForZone.filter(timeSlot => {
        const [start] = timeSlot.split('-');
        const [startHour] = start.split(':').map(Number);
        return startHour >= hour;
      });

      setSelectedLocation(prev => ({
        ...prev,
        schedule: updatedSchedule.length ? updatedSchedule : ["No more outages today"]
      }));
    }
  }, [currentTime, selectedLocation.zone]);

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
          <p className="text-sm text-gray-500 ml-6 mt-1">
            Last updated: {currentTime.toLocaleTimeString()}
          </p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="font-semibold flex items-center">
            <IoTimeOutline className="mr-2 text-yellow-600" />
            Today&apos;s Schedule:
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
        Change Location
      </button>

      <LocationModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onLocationSelect={setSelectedLocation}
      />
    </div>
  );
}