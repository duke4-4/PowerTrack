import React from 'react';
import {
  IoFlashOutline,
  IoThermometerOutline,
  IoSnowOutline,
  IoWaterOutline,
  IoSparklesOutline,
  IoCalendarOutline
} from 'react-icons/io5';
import { FaPlug } from 'react-icons/fa';

function TipsCard({ tip }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'lighting':
        return <IoFlashOutline />;
      case 'appliances':
        return <FaPlug />;
      case 'heating':
        return <IoThermometerOutline />;
      case 'cooling':
        return <IoSnowOutline />;
      case 'water':
        return <IoWaterOutline />;
      default:
        return <IoSparklesOutline />;
    }
  };

  // ... rest of the component code ...
}

export default TipsCard; 