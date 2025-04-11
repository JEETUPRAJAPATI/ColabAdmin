import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  RiSearchLine,
  RiBellLine,
  RiMoonLine,
  RiSunLine,
  RiSettings4Line,
  RiUserLine,
  RiLogoutBoxLine,
  RiNotification2Line,
  RiGlobalLine,
} from 'react-icons/ri';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'New user registration',
      time: '5 minutes ago',
      type: 'user',
    },
    {
      id: 2,
      title: 'Server update completed',
      time: '1 hour ago',
      type: 'system',
    },
    {
      id: 3,
      title: 'New order received',
      time: '2 hours ago',
      type: 'order',
    },
  ];

  return (
    <nav className="bg-white dark:bg-[#1E293B] border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <div className="flex items-center rounded-lg bg-gray-50 dark:bg-gray-800 p-2 flex-1 max-w-xl">
              <RiSearchLine className="text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search anything..."
                className="ml-2 bg-transparent border-none focus:outline-none text-gray-600 dark:text-gray-200 w-full"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 relative"
              >
                <RiBellLine className="text-xl" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
                  </div>
                  {notifications.map((notification) => (
                    <button
                      key={notification.id}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-start">
                        <RiNotification2Line className="text-gray-400 mt-1" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? <RiMoonLine className="text-xl" /> : <RiSunLine className="text-xl" />}
            </button>

            <button className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
              <RiGlobalLine className="text-xl" />
            </button>

            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-3 focus:outline-none"
              >
                <img
                  src="https://ui-avatars.com/api/?name=Jason+Taylor&background=6366f1&color=fff"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <div className="hidden md:block text-left">
                  <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Jason Taylor</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
                </div>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50">
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <RiUserLine className="mr-2" />
                    Profile
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <RiSettings4Line className="mr-2" />
                    Settings
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <RiLogoutBoxLine className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;