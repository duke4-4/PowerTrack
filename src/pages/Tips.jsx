import React from 'react';
import {
  IoFlashOutline,
  IoSunnyOutline,
  IoThermometerOutline,
  IoWaterOutline,
  IoTimeOutline,
  IoLeafOutline
} from 'react-icons/io5';

function Tips() {
  const tips = [
    {
      id: 1,
      icon: <IoFlashOutline className="w-8 h-8 text-yellow-500" />,
      title: "Switch off standby appliances",
      description: "Unplug devices when not in use to save on phantom power consumption"
    },
    {
      id: 2, 
      icon: <IoSunnyOutline className="w-8 h-8 text-orange-500" />,
      title: "Use natural light",
      description: "Open curtains and work near windows to reduce artificial lighting needs"
    },
    {
      id: 3,
      icon: <IoThermometerOutline className="w-8 h-8 text-red-500" />,
      title: "Optimize heating/cooling",
      description: "Set thermostats to optimal temperatures and use fans when possible"
    },
    {
      id: 4,
      icon: <IoWaterOutline className="w-8 h-8 text-blue-500" />,
      title: "Cold water washing",
      description: "Use cold water for laundry when possible to save energy"
    },
    {
      id: 5,
      icon: <IoTimeOutline className="w-8 h-8 text-purple-500" />,
      title: "Time your usage",
      description: "Run appliances during off-peak hours to reduce strain on the grid"
    },
    {
      id: 6,
      icon: <IoLeafOutline className="w-8 h-8 text-green-500" />,
      title: "Energy efficient appliances",
      description: "Choose appliances with high energy efficiency ratings"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Energy Saving Tips</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map(tip => (
          <div key={tip.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center mb-4">
              {tip.icon}
              <h2 className="text-xl font-semibold text-gray-800 ml-3">{tip.title}</h2>
            </div>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tips;