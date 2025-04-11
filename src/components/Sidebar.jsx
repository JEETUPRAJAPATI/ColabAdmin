import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import {
  RiDashboardLine,
  RiTeamLine,
  RiFileTextLine,
  RiPieChartLine,
  RiSearchEyeLine,
  RiSettings4Line,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiBellLine,
  RiNotification3Line,
  RiSunLine,
  RiMoonLine,
  RiLogoutBoxLine,
  RiUserLine
} from 'react-icons/ri';

function Sidebar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: RiDashboardLine, path: '/' },
    { name: 'Users', icon: RiTeamLine, path: '/users' },
    { name: 'Content', icon: RiFileTextLine, path: '/content' },
    { name: 'Analytics', icon: RiPieChartLine, path: '/analytics' },
    { name: 'SEO', icon: RiSearchEyeLine, path: '/seo' },
    { name: 'Settings', icon: RiSettings4Line, path: '/settings' }
  ];

  const sidebarWidth = isCollapsed ? 'w-20' : 'w-64';

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-[#1a1f2e] border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 z-50">
        <div className="flex items-center">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isCollapsed ? <RiMenuUnfoldLine size={24} /> : <RiMenuFoldLine size={24} />}
          </button>
          <h1 className="text-gray-800 dark:text-white text-xl font-bold ml-4">AdminHub</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === 'light' ? <RiMoonLine size={24} /> : <RiSunLine size={24} />}
          </button>
          <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 relative">
            <RiBellLine size={24} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                src="https://ui-avatars.com/api/?name=Admin+User"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              {!isCollapsed && (
                <span className="text-gray-700 dark:text-gray-300">Admin User</span>
              )}
            </button>
            
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50">
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <RiUserLine className="mr-2" />
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <RiSettings4Line className="mr-2" />
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <RiLogoutBoxLine className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] ${sidebarWidth} bg-white dark:bg-[#1a1f2e] border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out z-40`}>
        <nav className="p-4 flex flex-col h-full">
          <div className="flex-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg mb-2 transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon size={24} />
                {!isCollapsed && <span className="ml-3">{item.name}</span>}
              </Link>
            ))}
          </div>
          
          {/* Logout Button at Bottom */}
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <RiLogoutBoxLine size={24} />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </nav>
      </div>

      {/* Main Content Wrapper */}
      <div className={`pt-16 ${isCollapsed ? 'ml-20' : 'ml-64'} transition-all duration-300 ease-in-out`}>
        {/* Content will be rendered here */}
      </div>
    </>
  );
}

export default Sidebar;