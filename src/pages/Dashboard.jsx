import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import {
  RiTeamLine,
  RiUserLine,
  RiCalendarLine,
  RiCheckLine,
  RiFileTextLine,
  RiCreditCard2Line,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri';
import StatsWidget from '../components/widgets/StatsWidget';
import LineChart from '../components/charts/LineChart';
import RecentActivity from '../components/RecentActivity';
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
      title: 'Total Active Users',
      value: 4123,
      icon: RiTeamLine,
      trend: 'up',
      trendValue: '12%',
      color: 'blue',
    },
    {
      title: 'Inactive Users',
      value: 1107,
      icon: RiUserLine,
      color: 'gray',
    },
    {
      title: 'New Signups',
      value: 53,
      icon: RiCalendarLine,
      secondaryValue: '432',
      secondaryLabel: 'This Week',
      color: 'purple',
    },
    {
      title: 'Verified Users',
      value: 3600,
      icon: RiCheckLine,
      trend: 'up',
      trendValue: '8%',
      color: 'green',
    },
    {
      title: 'Total Blog Posts',
      value: 245,
      icon: RiFileTextLine,
      secondaryValue: '198 Published',
      color: 'purple',
    },
    {
      title: 'Subscriptions',
      value: 820,
      icon: RiCreditCard2Line,
      trend: 'up',
      trendValue: '14.2%',
      color: 'blue',
    },
    {
      title: 'Total Earnings',
      value: '$68,450.00',
      icon: RiMoneyDollarCircleLine,
      trend: 'up',
      trendValue: '23.5%',
      color: 'emerald',
    },
  ];

  const chartData = [
    {
      id: 'signups',
      data: generateTimeSeriesData(),
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'New user registration',
      description: 'John Doe has registered',
      time: '5 minutes ago',
      type: 'success',
    },
    {
      id: 2,
      title: 'New blog post published',
      description: 'Getting Started with React',
      time: '1 hour ago',
      type: 'info',
    },
    // Add more activities...
  ];

  const recentUsers = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      status: 'active',
      avatar: faker.image.avatar(),
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      status: 'inactive',
      avatar: faker.image.avatar(),
    },
    // Add more users...
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
          title="User Signups Over Time"
        />
        <RecentActivity activities={recentActivities} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserList users={recentUsers} />
        {/* Add more widgets here */}
      </div>
    </div>
  );
};

export default Dashboard;