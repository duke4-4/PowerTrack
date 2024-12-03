import { FaBolt } from 'react-icons/fa';
import { IoFlashOutline, IoNotificationsOutline, IoChatbubbleEllipsesOutline, IoWarningOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [currentSuburbIndex, setCurrentSuburbIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [weather, setWeather] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const suburbStatuses = [
    { name: 'Avondale', status: 'Stage 2', nextOutage: 'Today, 20:00 - 22:30' },
    { name: 'Borrowdale', status: 'Stage 1', nextOutage: 'Today, 18:00 - 20:30' },
    { name: 'Glen Lorne', status: 'Stage 3', nextOutage: 'Today, 22:00 - 00:30' },
    { name: 'Greendale', status: 'Stage 2', nextOutage: 'Tomorrow, 06:00 - 08:30' },
    { name: 'Highlands', status: 'Stage 1', nextOutage: 'Today, 16:00 - 18:30' },
    { name: 'Budiriro', status: 'Stage 3', nextOutage: 'Today, 14:00 - 16:30' },
    { name: 'Glen-View', status: 'Stage 2', nextOutage: 'Tomorrow, 08:00 - 10:30' },
    { name: 'Mufakose', status: 'Stage 1', nextOutage: 'Today, 12:00 - 14:30' },
    { name: 'Glen-Norah', status: 'Stage 2', nextOutage: 'Today, 10:00 - 12:30' }
  ];

  // eslint-disable-next-line no-unused-vars
  const advertisements = [
    {
      company: "Solar Solutions Ltd",
      description: "Switch to sustainable solar power solutions",
      image: "/solar-panel.jpg"
    },
    {
      company: "PowerBank Pro",
      description: "Reliable backup power systems for your home",
      image: "/powerbank.jpg"  
    },
    {
      company: "Smart Energy",
      description: "Energy efficient appliances and solutions",
      image: "/smart-energy.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSuburbIndex((prevIndex) => 
          prevIndex === suburbStatuses.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Get user's location and weather
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY`
          );
          const data = await response.json();
          setWeather(data.weather[0].main.toLowerCase());
        } catch (error) {
          console.error('Error fetching weather:', error);
        }
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setShowModal(false);
    setShowConfirmation(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 mb-8 rounded-lg relative overflow-hidden">
        {weather === 'clear' && (
          <>
            <div className="absolute top-4 right-4 w-24 h-24 bg-yellow-300 rounded-full animate-pulse z-10" />
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-16 bg-yellow-300 origin-bottom"
                style={{
                  top: '2rem',
                  right: '5rem',
                  transform: `rotate(${i * 30}deg)`,
                  animation: 'rays 2s linear infinite',
                  opacity: 0.6
                }}
              />
            ))}
          </>
        )}

        {weather === 'rain' && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-6 bg-blue-200"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-${Math.random() * 20}%`,
                  animation: `rainfall ${0.5 + Math.random() * 0.5}s linear infinite`
                }}
              />
            ))}
          </div>
        )}

        {weather === 'clouds' && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/30 rounded-full"
                style={{
                  width: `${80 + Math.random() * 40}px`,
                  height: `${40 + Math.random() * 20}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 30}%`,
                  animation: `float ${20 + Math.random() * 10}s linear infinite`
                }}
              />
            ))}
          </div>
        )}

        <style>
          {`
            @keyframes rays {
              0% { opacity: 0.3; }
              50% { opacity: 0.8; }
              100% { opacity: 0.3; }
            }
            
            @keyframes rainfall {
              0% { transform: translateY(-10px); }
              100% { transform: translateY(100vh); }
            }
            
            @keyframes float {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
          `}
        </style>

        <div className="container mx-auto px-6 relative z-20">
          {/* Rest of the Hero component content remains the same */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
                <FaBolt className="mr-3 text-yellow-400" />
                PowerTrack
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                Stay informed about load shedding schedules and power outages in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => window.location.href = '/notifications'} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-blue-50 transition-colors">
                  <IoFlashOutline className="mr-2 text-xl" />
                  Check Schedule
                </button>
                <button 
                  onClick={() => setShowModal(true)} 
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-blue-600 transition-colors border border-blue-500"
                >
                  <IoNotificationsOutline className="mr-2 text-xl" />
                  Get Notifications
                </button>
                <button 
                  onClick={() => window.location.href = '/fault-report'}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-red-500 transition-colors border border-red-500"
                >
                  <IoWarningOutline className="mr-2 text-xl" />
                  Report Fault
                </button>

                {showModal && (
                  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[2]">
                    <div className="bg-white/95 backdrop-blur rounded-xl p-8 w-full max-w-md shadow-2xl transform transition-all duration-300 ease-out">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <IoNotificationsOutline className="mr-3 text-blue-600" />
                        Get Notifications
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="block w-full px-4 text-black py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 backdrop-blur-sm"
                              required
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>
                        {/* Add other form fields similarly */}
                        <div className="flex justify-end space-x-3 pt-4">
                          <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="px-6 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:translate-y-[-1px] transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}

                {showConfirmation && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[2]">
                    <div className="bg-white/95 backdrop-blur rounded-xl p-6 w-full max-w-md shadow-2xl transform transition-all duration-300 ease-out">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IoCheckmarkCircleOutline className="text-green-500 text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Successfully Subscribed!</h3>
                        <p className="text-gray-600 mb-6">
                          Thank you for subscribing. You will receive notifications about power outages and updates for {formData.location || 'your area'}.
                        </p>
                        <button
                          onClick={() => setShowConfirmation(false)}
                          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 w-full max-w-md">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/20 pb-4">
                    <div>
                      <p className="text-sm text-blue-200">Current Status</p>
                      <p className={`font-semibold transform ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'} transition-all duration-500 ease-in-out`}>
                        {suburbStatuses[currentSuburbIndex].status}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-yellow-500 text-yellow-900 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                  
                  <div>
                    <p className="text-sm text-blue-200">Next Outage</p>
                    <p className={`font-semibold transform ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'} transition-all duration-500 ease-in-out`}>
                      {suburbStatuses[currentSuburbIndex].nextOutage}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-blue-200 mb-2">Area Affected</p>
                    <p className={`font-semibold transform ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'} transition-all duration-500 ease-in-out`}>
                      {suburbStatuses[currentSuburbIndex].name}
                    </p>
                    <div className="flex justify-center mt-4 space-x-1.5">
                      {suburbStatuses.map((_, index) => (
                        <div 
                          key={index}
                          className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                            index === currentSuburbIndex ? 'bg-white w-3' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-10">
        {showChat ? (
          <div 
            className="bg-white rounded-lg shadow-xl w-80"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Live Support</h3>
              <button onClick={() => setShowChat(false)} className="text-white hover:text-gray-200">
                <IoNotificationsOutline className="text-xl" />
              </button>
            </div>
            <div className="p-4 h-80 overflow-y-auto">
              <div className="space-y-4">
                <p className="text-gray-600">Welcome to PowerTrack support! How can we help you today?</p>
              </div>
            </div>
            <div className="border-t p-4">
              <input 
                type="text" 
                placeholder="Type your message..."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setShowChat(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <IoChatbubbleEllipsesOutline className="text-2xl" />
          </button>
        )}
      </div>
      
      
    </>
  );
}