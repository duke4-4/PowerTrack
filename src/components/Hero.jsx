import { FaBolt } from 'react-icons/fa';
import { IoFlashOutline, IoNotificationsOutline, IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [currentSuburbIndex, setCurrentSuburbIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowModal(false);
    setShowConfirmation(true);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 mb-8 rounded-lg">
        <div className="container mx-auto px-6">
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

                {showModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[2]">
                    {/* Modal content remains the same */}
                  </div>
                )}

                {showConfirmation && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[2]">
                    {/* Confirmation content remains the same */}
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
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside chat from closing
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
            onClick={(e) => {
              e.stopPropagation();
              setShowChat(true);
            }}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <IoChatbubbleEllipsesOutline className="text-2xl" />
          </button>
        )}
      </div>
      </div>
    </>
  );
}