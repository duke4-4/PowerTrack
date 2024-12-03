import { Link, useLocation } from 'react-router-dom';
import { 
  IoNotificationsOutline,
  IoBulbOutline,
  IoCardOutline,
  IoWarningOutline,
  IoFlashOutline
} from 'react-icons/io5';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 
      'bg-white/10 text-white' : 
      'text-white/80 hover:bg-white/10 hover:text-white';
  };

  const navItems = [
    { 
      path: '/notifications', 
      label: 'Notifications', 
      icon: <IoNotificationsOutline className="inline-block mr-1 text-yellow-400 group-hover:text-yellow-300" size={20} /> 
    },
    { 
      path: '/tips', 
      label: 'Tips', 
      icon: <IoBulbOutline className="inline-block mr-1 text-green-400 group-hover:text-green-300" size={20} /> 
    },
    { 
      path: '/payments', 
      label: 'Payments', 
      icon: <IoCardOutline className="inline-block mr-1 text-blue-400 group-hover:text-blue-300" size={20} /> 
    },
    { 
      path: '/fault-report', 
      label: 'Report Fault', 
      icon: <IoWarningOutline className="inline-block mr-1 text-red-400 group-hover:text-red-300" size={20} /> 
    }
  ];

  return (
    <nav className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <span className="text-2xl transform group-hover:scale-110 transition-transform duration-200">
              <IoFlashOutline className="text-yellow-400 group-hover:text-yellow-300" size={28} />
            </span>
            <span className="font-bold text-xl text-white">
              PowerTrack
            </span>
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium group
                  ${isActive(path)}`}
              >
                {icon}{label}
              </Link>
            ))}
          </div>

          <button className="md:hidden text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-2 rounded-md text-base font-medium group
                ${isActive(path)}`}
            >
              {icon}{label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 