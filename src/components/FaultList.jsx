import React from 'react';
import {
  IoFlashOutline,
  IoWarningOutline,
  IoConstructOutline,
  IoPowerOutline,
  IoBusinessOutline,
  IoHelpCircleOutline
} from 'react-icons/io5';
import PropTypes from 'prop-types';

function FaultList({ faults }) {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'in_progress':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'pending':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getFaultTypeIcon = (type) => {
    switch (type) {
      case 'power_outage':
        return <IoFlashOutline />;
      case 'voltage_issue':
        return <IoWarningOutline />;
      case 'equipment_damage':
        return <IoConstructOutline />;
      case 'wire_damage':
        return <IoPowerOutline />;
      case 'transformer_issue':
        return <IoBusinessOutline />;
      default:
        return <IoHelpCircleOutline />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Recent Fault Reports</h2>
          <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full">
            {faults.length} Reports
          </span>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {faults.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No fault reports available
          </div>
        ) : (
          faults.map(fault => (
            <div key={fault.id} className="p-6 hover:bg-gray-50 transition-colors duration-150">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">{getFaultTypeIcon(fault.type)}</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {fault.type.split('_').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </p>
                    <p className="text-gray-600 mt-1">{fault.description}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Location: {fault.location}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyle(fault.status)}`}>
                    {fault.status.replace('_', ' ')}
                  </span>
                  <span className="mt-2 text-xs text-gray-500">
                    {new Date(fault.reportedAt).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

FaultList.propTypes = {
  faults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      reportedAt: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FaultList;