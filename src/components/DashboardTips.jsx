import { useState } from 'react';
import { 
  IoBulbOutline, 
  IoArrowForward,
  IoWaterOutline,
  IoFlashOutline,
  IoSunnyOutline,
  IoWarningOutline,
  IoCallOutline
} from 'react-icons/io5';

export default function DashboardTips() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const quickTips = [
    {
      title: "Before Load Shedding",
      icon: <IoFlashOutline />,
      tips: [
        { text: "Charge all devices", icon: <IoFlashOutline /> },
        { text: "Keep freezer closed", icon: <IoWaterOutline /> },
        { text: "Fill kettle and flasks", icon: <IoWaterOutline /> },
        { text: "Check schedule", icon: <IoSunnyOutline /> }
      ]
    },
    {
      title: "Power Saving Now",
      icon: <IoBulbOutline />,
      tips: [
        { text: "Switch off pool pump", icon: <IoWaterOutline /> },
        { text: "Use cold water", icon: <IoWaterOutline /> },
        { text: "Delay laundry", icon: <IoWaterOutline /> },
        { text: "LED lighting only", icon: <IoBulbOutline /> }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <IoBulbOutline className="mr-2 text-yellow-500" />
          Quick Tips
        </h3>
        <button 
          onClick={() => setCurrentTipIndex((prev) => (prev + 1) % quickTips.length)}
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          Next Tip
          <IoArrowForward className="ml-1" />
        </button>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-blue-800 mb-2 flex items-center">
          {quickTips[currentTipIndex].icon}
          <span className="ml-2">{quickTips[currentTipIndex].title}</span>
        </h4>
        <ul className="space-y-2">
          {quickTips[currentTipIndex].tips.map((tip, index) => (
            <li key={index} className="flex items-center text-blue-700">
              <span className="mr-2">{tip.icon}</span>
              {tip.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 bg-red-50 p-4 rounded-lg">
        <h4 className="font-medium text-red-800 mb-2 flex items-center">
          <IoWarningOutline className="mr-2" />
          <span>Report Suspicious Activity</span>
        </h4>
        <p className="text-red-700 text-sm mb-3">
          If you notice any tampering with electrical equipment or theft, please report immediately:
        </p>
        <div className="flex justify-center">
          <a 
            href="tel:+263242780920" 
            className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <IoCallOutline className="mr-2" />
            Call +263 242 780 920
          </a>
        </div>
      </div>
    </div>
  );
} 