import { 
  FaPhone, 
  FaWhatsapp, 
  FaTwitter, 
  FaInstagram 
} from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import LoadSheddingSchedule from '../components/LoadSheddingSchedule';
import DashboardTips from '../components/DashboardTips';
import Hero from '../components/Hero';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          // Replace with your actual weather API key and endpoint
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY`
          );
          const data = await response.json();
          setWeather(data.weather[0].main.toLowerCase());
        } catch (error) {
          console.error('Error fetching weather:', error);
        } finally {
          setLoading(false);
        }
      });
    }
  }, []);

  const getWeatherBackground = () => {
    if (loading) return 'bg-gradient-to-b from-gray-50 to-gray-100';
    
    switch (weather) {
      case 'clear':
        return 'bg-gradient-to-b from-blue-300 to-yellow-200';
      case 'clouds':
        return 'bg-gradient-to-b from-gray-300 to-gray-200';
      case 'rain':
        return 'bg-gradient-to-b from-gray-700 to-gray-500 animate-rain';
      default:
        return 'bg-gradient-to-b from-gray-50 to-gray-100';
    }
  };

  return (
    <div className={`min-h-screen ${getWeatherBackground()} relative`}>
      {weather === 'rain' && (
        <div className="absolute inset-0 animate-rain pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="rain-drop"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${0.5 + Math.random() * 0.3}s`
              }}
            />
          ))}
        </div>
      )}
      
      {weather === 'clear' && (
        <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-300 rounded-full animate-pulse" />
      )}
      
      {weather === 'clouds' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="cloud"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 30}%`,
                animationDelay: `${Math.random() * 30}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-12 relative z-10">
        <Hero />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
            <LoadSheddingSchedule />
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
            <DashboardTips />
          </div>
        </div>

        {/* Rest of the components with added backdrop-blur-sm and bg-white/90 */}
        {/* ... (rest of the code remains the same but with updated background classes) ... */}
        
      </div>

      <style jsx>{`
        @keyframes rain {
          0% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        .rain-drop {
          position: absolute;
          width: 2px;
          height: 20px;
          background: linear-gradient(transparent, #fff);
          animation: rain linear infinite;
        }

        .cloud {
          position: absolute;
          width: 100px;
          height: 40px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          animation: float 30s linear infinite;
        }

        @keyframes float {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(1000px);
          }
        }
      `}</style>
    </div>
  );
}
