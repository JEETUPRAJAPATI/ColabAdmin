import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const [timeRange, setTimeRange] = useState('weekly');

  // Generate dummy data for charts
  const generateChartData = () => {
    return Array.from({ length: 7 }, (_, index) => ({
      name: new Date(Date.now() - (6 - index) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
      signups: faker.number.int({ min: 100, max: 1000 }),
      revenue: faker.number.int({ min: 5000, max: 20000 }),
    }));
  };

  const stats = {
    users: {
      total: faker.number.int({ min: 10000, max: 50000 }),
      active: faker.number.int({ min: 5000, max: 25000 }),
      inactive: faker.number.int({ min: 1000, max: 5000 }),
      newToday: faker.number.int({ min: 50, max: 200 }),
      newThisWeek: faker.number.int({ min: 200, max: 1000 }),
      growth: '+12%'
    },
    verified: {
      total: faker.number.int({ min: 8000, max: 40000 }),
      rate: '75%',
      growth: '+8%'
    },
    posts: {
      total: faker.number.int({ min: 5000, max: 15000 }),
      published: faker.number.int({ min: 4000, max: 12000 }),
      draft: faker.number.int({ min: 1000, max: 3000 }),
      growth: '+15%'
    },
    subscriptions: {
      total: faker.number.int({ min: 1000, max: 5000 }),
      newThisMonth: faker.number.int({ min: 50, max: 200 }),
      growth: '+23%'
    },
    earnings: {
      daily: faker.number.int({ min: 1000, max: 5000 }),
      weekly: faker.number.int({ min: 5000, max: 20000 }),
      monthly: faker.number.int({ min: 20000, max: 100000 }),
      yearly: faker.number.int({ min: 200000, max: 1000000 })
    }
  };

  const chartData = generateChartData();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation Bar */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              New Report
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="p-6">
        {/* User Statistics Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">User Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Users Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Users</h3>
                <span className="text-green-500 text-sm font-medium">{stats.users.growth}</span>
              </div>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stats.users.total.toLocaleString()}
                </p>
                <p className="ml-2 text-sm text-gray-500">users</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Active</p>
                  <p className="text-lg font-medium text-green-500">{stats.users.active.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Inactive</p>
                  <p className="text-lg font-medium text-red-500">{stats.users.inactive.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">New Today</p>
                  <p className="text-lg font-medium text-blue-500">{stats.users.newToday.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">This Week</p>
                  <p className="text-lg font-medium text-purple-500">{stats.users.newThisWeek.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Verified Users Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Verified Users</h3>
                <span className="text-green-500 text-sm font-medium">{stats.verified.growth}</span>
              </div>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stats.verified.total.toLocaleString()}
                </p>
                <p className="ml-2 text-sm text-gray-500">verified</p>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: stats.verified.rate }}></div>
                    </div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">{stats.verified.rate}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">Verification rate</p>
              </div>
            </div>

            {/* Blog Posts Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Blog Posts</h3>
                <span className="text-green-500 text-sm font-medium">{stats.posts.growth}</span>
              </div>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stats.posts.total.toLocaleString()}
                </p>
                <p className="ml-2 text-sm text-gray-500">posts</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Published</p>
                  <p className="text-lg font-medium text-green-500">{stats.posts.published.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Draft</p>
                  <p className="text-lg font-medium text-yellow-500">{stats.posts.draft.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Subscriptions Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Subscriptions</h3>
                <span className="text-green-500 text-sm font-medium">{stats.subscriptions.growth}</span>
              </div>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stats.subscriptions.total.toLocaleString()}
                </p>
                <p className="ml-2 text-sm text-gray-500">active</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">New This Month</p>
                <p className="text-lg font-medium text-blue-500">{stats.subscriptions.newThisMonth.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Revenue Overview</h2>
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#3b82f6" 
                      fill="#3b82f6" 
                      fillOpacity={0.1} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Earnings</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Daily</p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    ${stats.earnings.daily.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weekly</p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    ${stats.earnings.weekly.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Monthly</p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    ${stats.earnings.monthly.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Yearly</p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    ${stats.earnings.yearly.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;