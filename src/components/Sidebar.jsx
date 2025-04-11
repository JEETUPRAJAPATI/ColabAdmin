import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  RiDashboardLine,
  RiTeamLine,
  RiFileTextLine,
  RiPieChartLine,
  RiShoppingBagLine,
  RiSettings4Line,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiCustomerServiceLine,
  RiProjectorLine,
  RiCalendarLine,
  RiMailLine,
} from 'react-icons/ri';

function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { name: 'Dashboards', icon: RiDashboardLine, path: '/', badge: '12' },
    { name: 'CRM', icon: RiCustomerServiceLine, path: '/crm' },
    { name: 'eCommerce', icon: RiShoppingBagLine, path: '/ecommerce' },
    { name: 'Analytics', icon: RiPieChartLine, path: '/analytics' },
    { name: 'Projects', icon: RiProjectorLine, path: '/projects' },
    { name: 'Calendar', icon: RiCalendarLine, path: '/calendar' },
    { name: 'Messages', icon: RiMailLine, path: '/messages' },
    { name: 'Users', icon: RiTeamLine, path: '/users' },
    { name: 'Content', icon: RiFileTextLine, path: '/content' },
    { name: 'Settings', icon: RiSettings4Line, path: '/settings' },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-white dark:bg-[#1E293B] border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
        {!isCollapsed && (
          <Link to="/" className="flex items-center">
            <img
              src="https://ui-avatars.com/api/?name=Y&background=6366f1&color=fff"
              alt="Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">ynex</span>
          </Link>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isCollapsed ? <RiMenuUnfoldLine size={20} /> : <RiMenuFoldLine size={20} />}
        </button>
      </div>

      <div className="p-4">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center ${
                isCollapsed ? 'justify-center' : 'justify-between'
              } px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === item.path
                  ? 'text-white bg-indigo-600'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <item.icon size={20} className={isCollapsed ? 'mx-auto' : 'mr-3'} />
                {!isCollapsed && <span>{item.name}</span>}
              </div>
              {!isCollapsed && item.badge && (
                <span className="px-2 py-0.5 text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;