import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import CountUp from 'react-countup';
import { format } from 'date-fns';
import { faker } from '@faker-js/faker';
import {
  RiTeamLine,
  RiFileTextLine,
  RiMoneyDollarCircleLine,
  RiUserFollowLine,
  RiBarChartBoxLine,
  RiPieChartLine,
  RiArrowUpLine,
  RiArrowDownLine,
  RiMore2Fill,
} from 'react-icons/ri';

function Dashboard() {
  const { theme } = useTheme();
  const [timeRange, setTimeRange] = useState('weekly');

  // Generate dummy data for charts
  const revenueData = Array.from({ length: 12 }, (_, i) => ({
    month: format(new Date(2024, i, 1), 'MMM'),
    sales: faker.number.int({ min: 300, max: 1000 }),
    revenue: faker.number.int({ min: 500, max: 1500 }),
  }));

  const deviceUsage = [
    { id: 'Mobile', value: 1624 },
    { id: 'Desktop', value: 1267 },
    { id: 'Laptop', value: 1153 },
    { id: 'Tablet', value: 679 },
  ];

  const stats = {
    totalCustomers: {
      value: 1028890,
      growth: '+40%',
      trend: 'up',
    },
    totalRevenue: {
      value: 56562,
      growth: '+25%',
      trend: 'up',
    },
    conversionRate: {
      value: 12.08,
      growth: '-12%',
      trend: 'down',
    },
    totalDeals: {
      value: 2543,
      growth: '+19%',
      trend: 'up',
    },
  };

  const topDeals = [
    {
      name: 'Michael Jordan',
      email: 'michael.jordan@example.com',
      amount: 2893,
      avatar: faker.image.avatar(),
    },
    {
      name: 'Emigo Klaren',
      email: 'emigo.klaren@example.com',
      amount: 4289,
      avatar: faker.image.avatar(),
    },
    {
      name: 'Randy Origan',
      email: 'randy.origan@example.com',
      amount: 8347,
      avatar: faker.image.avatar(),
    },
    {
      name: 'George Pieterson',
      email: 'george.pieterson@example.com',
      amount: 3894,
      avatar: faker.image.avatar(),
    },
    {
      name: 'Kiara Advain',
      email: 'kiara.advain@example.com',
      amount: 2679,
      avatar: faker.image.avatar(),
    },
  ];

  const recentActivity = [
    {
      id: 1,
      title: 'Update of calendar events',
      description: 'Added new events in next week',
      time: '2:45PM',
      type: 'calendar',
    },
    {
      id: 2,
      title: 'New theme for Spruko Website completed',
      description: 'Lorem ipsum, dolor sit amet.',
      time: '3 hrs',
      type: 'theme',
    },
    {
      id: 3,
      title: 'Created a New Task today',
      time: '22 hrs',
      type: 'task',
    },
    {
      id: 4,
      title: '32 New people joined summit',
      time: '22 hrs',
      type: 'user',
    },
  ];

  const StatCard = ({ title, value, growth, trend, icon: Icon }) => (
    <div className="bg-white dark:bg-[#1E293B] rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Icon className="text-2xl text-indigo-600 dark:text-indigo-400 mr-3" />
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <RiMore2Fill />
        </button>
      </div>
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-2xl font-semibold text-gray-900 dark:text-white">
            <CountUp
              end={value}
              duration={2}
              separator=","
              decimals={title.includes('Rate') ? 2 : 0}
              suffix={title.includes('Rate') ? '%' : ''}
              prefix={title.includes('Revenue') ? '$' : ''}
            />
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">vs last month</p>
        </div>
        <div className={`flex items-center ${
          trend === 'up' ? 'text-green-500' : 'text-red-500'
        }`}>
          {trend === 'up' ? <RiArrowUpLine /> : <RiArrowDownLine />}
          <span className="ml-1">{growth}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Welcome back, Jason Taylor!</h1>
        <p className="text-gray-500 dark:text-gray-400">Track your sales activity, leads and deals here.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Customers"
          value={stats.totalCustomers.value}
          growth={stats.totalCustomers.growth}
          trend={stats.totalCustomers.trend}
          icon={RiTeamLine}
        />
        <StatCard
          title="Total Revenue"
          value={stats.totalRevenue.value}
          growth={stats.totalRevenue.growth}
          trend={stats.totalRevenue.trend}
          icon={RiMoneyDollarCircleLine}
        />
        <StatCard
          title="Conversion Rate"
          value={stats.conversionRate.value}
          growth={stats.conversionRate.growth}
          trend={stats.conversionRate.trend}
          icon={RiBarChartBoxLine}
        />
        <StatCard
          title="Total Deals"
          value={stats.totalDeals.value}
          growth={stats.totalDeals.growth}
          trend={stats.totalDeals.trend}
          icon={RiFileTextLine}
        />
      </div>

      {/* Revenue Analytics Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-[#1E293B] rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Analytics</h2>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 border-0 rounded-lg px-3 py-1 text-sm"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Device Usage Chart */}
        <div className="bg-white dark:bg-[#1E293B] rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Leads By Source</h2>
          <div className="h-80">
            <ResponsivePie
              data={deviceUsage}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              innerRadius={0.6}
              padAngle={0.7}
              cornerRadius={3}
              colors={{ scheme: 'category10' }}
              borderWidth={1}
              borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
              enableArcLinkLabels={false}
              arcLabelsSkipAngle={10}
              theme={{
                text: {
                  fill: theme === 'dark' ? '#fff' : '#374151',
                },
                tooltip: {
                  container: {
                    background: theme === 'dark' ? '#1F2937' : '#fff',
                    color: theme === 'dark' ? '#fff' : '#374151',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Top Deals and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Deals */}
        <div className="bg-white dark:bg-[#1E293B] rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Top Deals</h2>
            <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {topDeals.map((deal, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={deal.avatar} alt={deal.name} className="w-10 h-10 rounded-full" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{deal.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{deal.email}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">${deal.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-[#1E293B] rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
            <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-600"></div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.title}</p>
                  {activity.description && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activity.description}</p>
                  )}
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;