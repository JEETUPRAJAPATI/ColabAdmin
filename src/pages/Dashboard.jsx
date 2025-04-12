import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import {
  RiTeamLine,
  RiUserLine,
  RiCalendarLine,
  RiCheckLine,
  RiShieldUserLine,
  RiUserAddLine,
  RiLineChartLine,
  RiUserHeartLine,
} from 'react-icons/ri';
import StatsWidget from '../components/widgets/StatsWidget';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import DeviceBreakdown from '../components/charts/DeviceBreakdown';
import UserList from '../components/UserList';

const generateTimeSeriesData = (days = 30) => {
  return Array.from({ length: days }, (_, i) => ({
    x: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    y: faker.number.int({ min: 100, max: 1000 }),
  }));
};

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('weekly');

  const stats = [
    {
      title: 'Total Users',
      value: 15234,
      icon: RiTeamLine,
      trend: 'up',
      trendValue: '8.2%',
      color: 'blue',
    },
    {
      title: 'Active Users',
      value: 12123,
      icon: RiUserHeartLine,
      trend: 'up',
      trendValue: '12%',
      color: 'green',
    },
    {
      title: 'New Users',
      value: 3111,
      icon: RiUserLine,
      trend: 'up',
      trendValue: '3%',
      color: 'gray',
    },
    {
      title: 'Verified Users',
      value: 13600,
      icon: RiCheckLine,
      trend: 'up',
      trendValue: '5.3%',
      color: 'emerald',
    },
  ];

  const countryData = [
    { country: 'United States', visitors: 845234 },
    { country: 'United Kingdom', visitors: 423123 },
    { country: 'Germany', visitors: 324523 },
    { country: 'India', visitors: 312345 },
    { country: 'Brazil', visitors: 234523 },
    { country: 'Canada', visitors: 198234 },
    { country: 'Australia', visitors: 176543 },
    { country: 'France', visitors: 165432 },
    { country: 'Japan', visitors: 154321 },
    { country: 'Spain', visitors: 143210 }
  ];

  const deviceData = [
    { id: 'Desktop', value: 45, color: '#3B82F6' },
    { id: 'Mobile', value: 35, color: '#10B981' },
    { id: 'Tablet', value: 20, color: '#6366F1' },
  ];

  const chartData = [
    {
      id: 'signups',
      data: generateTimeSeriesData(),
    },
  ];

  const mostVisitedPages = [
    { url: '/dashboard', visits: 12345, bounce: '23%', duration: '4m 12s' },
    { url: '/products', visits: 9562, bounce: '31%', duration: '3m 45s' },
    { url: '/analytics', visits: 8421, bounce: '28%', duration: '5m 16s' },
    { url: '/users', visits: 7652, bounce: '35%', duration: '2m 58s' },
    { url: '/settings', visits: 6543, bounce: '25%', duration: '3m 32s' },
    { url: '/blog', visits: 5432, bounce: '29%', duration: '4m 05s' },
    { url: '/pricing', visits: 4321, bounce: '33%', duration: '2m 47s' },
    { url: '/about', visits: 3210, bounce: '27%', duration: '3m 18s' }
  ];

  const recentUsers = [
    {
      id: 1,
      name: 'Emma Wilson',
      email: 'emma@example.com',
      status: 'active',
      role: 'Admin',
      lastLogin: '2024-03-15 14:30',
      location: 'New York, USA',
      avatar: faker.image.avatar(),
    },
    {
      id: 2,
      name: 'James Brown',
      email: 'james@example.com',
      status: 'active',
      role: 'Editor',
      lastLogin: '2024-03-15 13:45',
      location: 'London, UK',
      avatar: faker.image.avatar(),
    },
    {
      id: 3,
      name: 'Sophie Taylor',
      email: 'sophie@example.com',
      status: 'inactive',
      role: 'User',
      lastLogin: '2024-03-14 09:20',
      location: 'Paris, France',
      avatar: faker.image.avatar(),
    },
    {
      id: 4,
      name: 'Michael Chen',
      email: 'michael@example.com',
      status: 'active',
      role: 'Manager',
      lastLogin: '2024-03-15 11:15',
      location: 'Singapore',
      avatar: faker.image.avatar(),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Dashboard Overview
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome back! Here's what's happening with your platform.
          </p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsWidget key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          data={chartData}
          title="User Growth Trends"
        />
        <DeviceBreakdown data={deviceData} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-6">
          Most Visited Pages
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">URL</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Visits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Bounce Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Avg. Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mostVisitedPages.map((page, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{page.url}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{page.visits.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{page.bounce}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{page.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-6">
            Visitors by Country
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Country</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Visitors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {countryData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{item.country}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{item.visitors.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-6">
            Recent Users
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Login</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-8 w-8 rounded-full" src={user.avatar} alt="" />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{user.lastLogin}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{user.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;