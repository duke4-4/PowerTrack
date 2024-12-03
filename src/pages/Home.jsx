import { 
  FaPhone, 
  FaWhatsapp, 
  FaTwitter, 
  FaInstagram 
} from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import LoadSheddingSchedule from '../components/LoadSheddingSchedule';
import DashboardTips from '../components/DashboardTips';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <Hero />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
            <LoadSheddingSchedule />
          </div>
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
            <DashboardTips />
          </div>
        </div>

        {/* About Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About PowerTrack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed">
                PowerTrack is your comprehensive solution for tracking and managing load shedding schedules in Zimbabwe. Our platform provides real-time updates, accurate scheduling information, and essential power management tools to help you stay informed and prepared.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We work closely with local power utilities to ensure our information is always up-to-date and reliable. Our mission is to help communities better manage their daily activities around power availability.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Real-time load shedding updates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Customizable notifications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Area-specific schedules
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Power saving tips and guides
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advertisements Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Recommended Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 3l10 8h-3v8h-6v-6h-2v6h-6v-8h-3l10-8zm0-2l-12 9.5v12.5h7v-6h2v6h7v-12.5l-12-9.5z'/%3E%3C/svg%3E"
                  alt="Solar Solutions"
                  className="w-24 h-24"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Solar Solutions Ltd</h3>
                <p className="text-gray-600 mb-4">Switch to sustainable solar power solutions for your home and business</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M16 4h-2V2h-4v2H8v2h8V4zm-4 14c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-4c0-3.1-2-5.7-4.8-6.5V1H10.8v.5C8 2.3 6 4.9 6 8v4l-2 2v1h16v-1l-2-2z'/%3E%3C/svg%3E"
                  alt="PowerBank Pro"
                  className="w-24 h-24"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">PowerBank Pro</h3>
                <p className="text-gray-600 mb-4">Reliable backup power systems for uninterrupted power supply</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z'/%3E%3C/svg%3E"
                  alt="Smart Energy"
                  className="w-24 h-24"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Smart Energy</h3>
                <p className="text-gray-600 mb-4">Energy efficient appliances and smart home solutions</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <IoCallOutline className="mr-3 text-blue-600" />
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="tel:+263242123456" className="flex items-center p-4 rounded-xl hover:bg-blue-50 transition-all group">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <FaPhone className="text-xl text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Call Us</p>
                <span className="text-sm text-gray-600">+263 242 123456</span>
              </div>
            </a>
            
            <a href="https://wa.me/263777123456" className="flex items-center p-4 rounded-xl hover:bg-green-50 transition-all group">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <FaWhatsapp className="text-xl text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">WhatsApp</p>
                <span className="text-sm text-gray-600">Chat with us</span>
              </div>
            </a>
            
            <a href="https://twitter.com/powertrack" className="flex items-center p-4 rounded-xl hover:bg-blue-50 transition-all group">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <FaTwitter className="text-xl text-blue-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Twitter</p>
                <span className="text-sm text-gray-600">@powertrack</span>
              </div>
            </a>
            
            <a href="https://instagram.com/powertrack" className="flex items-center p-4 rounded-xl hover:bg-pink-50 transition-all group">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <FaInstagram className="text-xl text-pink-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Instagram</p>
                <span className="text-sm text-gray-600">@powertrack</span>
              </div>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}
