import React from 'react';

function NotificationCard({ notification }) {
  const getSeverityStyle = (severity) => {
    switch (severity) {
      case 'high':
        return 'border-l-red-500 from-red-50/50 to-white';
      case 'moderate':
        return 'border-l-yellow-500 from-yellow-50/50 to-white';
      default:
        return 'border-l-blue-500 from-blue-50/50 to-white';
    }
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getSeverityBadge = (severity) => {
    switch (severity) {
      case 'high':
        return 'badge-error';
      case 'moderate':
        return 'badge-warning';
      default:
        return 'badge-primary';
    }
  };

  return (
    <div className={`group card border-l-4 mb-4 overflow-hidden hover:translate-x-1 transition-all duration-200 
      bg-gradient-to-r ${getSeverityStyle(notification.severity)}`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
                {notification.title}
              </h3>
              <span className={`badge ${getSeverityBadge(notification.severity)}`}>
                {notification.severity.toUpperCase()}
              </span>
            </div>
            <p className="text-gray-600 mt-2">{notification.description}</p>
          </div>
          <span className="badge badge-primary whitespace-nowrap ml-4">
            {notification.area}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
          <div className="flex items-center">
            <span className="mr-2 opacity-70 group-hover:scale-110 transition-transform">🕒</span>
            <span>From: {formatDateTime(notification.startTime)}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 opacity-70 group-hover:scale-110 transition-transform">⏱️</span>
            <span>To: {formatDateTime(notification.endTime)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard; 