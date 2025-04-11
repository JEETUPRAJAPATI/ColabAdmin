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
} from 'react-icons/ri';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="bg-white dark:bg-[#1E293B] border-b border-gray-200 dark:border-gray-700">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <div className="flex items-center rounded-lg bg-gray-100 dark:bg-gray-800 p-2 flex-1 max-w-xl">
              <RiSearchLine className="text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 bg-transparent border-none focus:outline-none text-gray-600 dark:text-gray-200 w-full"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
              <RiBellLine className="text-xl" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? <RiMoonLine className="text-xl" /> : <RiSunLine className="text-xl" />}
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
                  <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Jason Taylor</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Web Designer</p>
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