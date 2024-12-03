import { useState, useEffect } from 'react';
import { IoNotificationsOutline, IoTimeOutline, IoWarningOutline, IoLocationOutline } from 'react-icons/io5';

function Notifications() {
  const [location, setLocation] = useState({
    address: 'Loading location...',
    zone: 'Loading zone...'
  });

  const [notifications, setNotifications] = useState([]);

  // Mock notifications data based on location
  const mockNotifications = {
    'Zone 1': [
      {
        id: 1,
        title: 'Scheduled Power Cut',
        status: 'upcoming',
        date: new Date().toLocaleDateString(),
        time: '14:00 - 16:30',
        description: 'Scheduled load shedding for Zone 1. Please prepare accordingly.'
      },
      {
        id: 2, 
        title: 'Emergency Maintenance',
        status: 'active',
        date: new Date().toLocaleDateString(),
        time: '10:00 - 12:00',
        description: 'Emergency transformer maintenance in your area.'
      }
    ],
    'Zone 2': [
      {
        id: 3,
        title: 'Planned Outage',
        status: 'upcoming', 
        date: new Date().toLocaleDateString(),
        time: '16:00 - 18:30',
        description: 'Planned maintenance work on power lines in Zone 2.'
      }
    ]
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            
            // Mock zone assignment
            const zoneNumber = Math.floor(Math.random() * 2) + 1;
            const zone = `Zone ${zoneNumber}`;
            
            setLocation({
              address: data.display_name,
              zone: zone
            });

            // Set notifications based on zone
            setNotifications(mockNotifications[zone] || []);

          } catch (error) {
            console.error("Error getting location:", error);
            setLocation({
              address: "Error getting location",
              zone: "Zone 1"
            });
            setNotifications(mockNotifications["Zone 1"]);
          }
        },
        (error) => {
          console.error("Location access denied:", error);
          setLocation({
            address: "Location access denied",
            zone: "Zone 1"
          });
          setNotifications(mockNotifications["Zone 1"]);
        }
      );
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 mb-8 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <IoNotificationsOutline className="text-3xl text-white" />
          <h1 className="text-3xl font-bold text-white">Power Cut Notifications</h1>
        </div>
        <div className="flex items-center text-white/90 gap-2">
          <IoLocationOutline className="text-xl" />
          <span className="text-sm">{location.address}</span>
        </div>
        <div className="mt-2 inline-block px-3 py-1 bg-white/20 rounded-full">
          <span className="text-white text-sm font-medium">{location.zone}</span>
        </div>
      </div>

      <div className="grid gap-6">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-900">{notification.title}</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                notification.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                notification.status === 'active' ? 'bg-red-100 text-red-800' :
                'bg-green-100 text-green-800'
              }`}>
                {notification.status}
              </span>
            </div>
            
            <div className="flex items-center text-gray-500 mb-3">
              <IoTimeOutline className="mr-2" />
              <span>{notification.date} | {notification.time}</span>
            </div>
            
            <div className="flex items-start">
              <IoWarningOutline className="text-gray-400 mt-1 mr-2" />
              <p className="text-gray-700 leading-relaxed">{notification.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;