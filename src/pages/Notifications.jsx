import { notifications } from '../data/sampleData';
import { IoNotificationsOutline, IoTimeOutline, IoWarningOutline } from 'react-icons/io5';

function Notifications() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 mb-8 shadow-xl">
        <div className="flex items-center gap-3">
          <IoNotificationsOutline className="text-3xl text-white" />
          <h1 className="text-3xl font-bold text-white">Power Cut Notifications</h1>
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