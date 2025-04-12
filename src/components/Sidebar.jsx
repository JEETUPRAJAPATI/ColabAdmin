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
  RiUserSettingsLine,
  RiLockLine,
  RiArticleLine,
  RiPagesLine,
  RiMessage2Line,
  RiNotification3Line,
  RiAdvertisementLine,
  RiCouponLine,
  RiVipCrownLine,
  RiLineChartLine,
  RiMailSendLine,
  RiSearchLine,
  RiTestTubeLine,
  RiHistoryLine,
  RiGlobalLine,
  RiUserLine,
  RiDatabase2Line,
  RiTranslate,
  RiRobot2Line,
  RiCustomerService2Line,
} from 'react-icons/ri';

function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const menuSections = [
    {
      title: 'Main',
      items: [
        { name: 'Dashboard', icon: RiDashboardLine, path: '/', badge: '12' },
        { name: 'Analytics', icon: RiPieChartLine, path: '/analytics' },
      ],
    },
    {
      title: 'User Management',
      items: [
        { name: 'Users', icon: RiTeamLine, path: '/users' },
        { name: 'Roles & Permissions', icon: RiLockLine, path: '/roles' },
        { name: 'Admin Profiles', icon: RiUserSettingsLine, path: '/admin-profiles' },
      ],
    },
    {
      title: 'Content',
      items: [
        { name: 'Blog Management', icon: RiArticleLine, path: '/blog' },
        { name: 'Pages Manager', icon: RiPagesLine, path: '/pages' },
        { name: 'SEO Manager', icon: RiSearchLine, path: '/seo' },
      ],
    },
    {
      title: 'Communication',
      items: [
        { name: 'Messages', icon: RiMessage2Line, path: '/messages', badge: '5' },
        { name: 'Notifications', icon: RiNotification3Line, path: '/notifications' },
        { name: 'Bulk Email', icon: RiMailSendLine, path: '/bulk-email' },
      ],
    },
    {
      title: 'Marketing',
      items: [
        { name: 'Advertisements', icon: RiAdvertisementLine, path: '/ads' },
        { name: 'Coupons', icon: RiCouponLine, path: '/coupons' },
        { name: 'A/B Testing', icon: RiTestTubeLine, path: '/ab-testing' },
      ],
    },
    {
      title: 'Revenue',
      items: [
        { name: 'Subscriptions', icon: RiVipCrownLine, path: '/subscriptions' },
        { name: 'Payments', icon: RiShoppingBagLine, path: '/payments' },
      ],
    },
    {
      title: 'System',
      items: [
        { name: 'Settings', icon: RiSettings4Line, path: '/settings' },
        { name: 'Audit Logs', icon: RiHistoryLine, path: '/audit-logs' },
        { name: 'Backup', icon: RiDatabase2Line, path: '/backup' },
        { name: 'Languages', icon: RiTranslate, path: '/languages' },
      ],
    },
    {
      title: 'Support',
      items: [
        { name: 'AI Assistant', icon: RiRobot2Line, path: '/ai-assistant' },
        { name: 'Help Desk', icon: RiCustomerService2Line, path: '/support' },
      ],
    },
  ];

  const toggleSection = (title) => {
    setActiveSection(activeSection === title ? '' : title);
  };

  return (
    <aside
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-white dark:bg-[#1E293B] border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out h-screen overflow-y-auto`}
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
        <nav className="space-y-6">
          {menuSections.map((section) => (
            <div key={section.title} className="space-y-2">
              {!isCollapsed && (
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {section.title}
                </h3>
              )}
              {section.items.map((item) => (
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
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;