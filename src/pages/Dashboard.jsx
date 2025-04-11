import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CountUp from 'react-countup';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Dashboard() {
  const { theme } = useTheme();
  const [timeRange, setTimeRange] = useState('weekly');
  const [isLoading, setIsLoading] = useState(false);

  const stats = {
    users: {
      total: 42332,
      active: 39557,
      inactive: 2769,
      newToday: 157,
      newThisWeek: 919,
      growth: '+12%'
    },
    verified: {
      total: 35535,
      rate: '75%',
      growth: '+8%'
    },
    posts: {
      total: 8690,
      published: 11511,
      draft: 1879,
      growth: '+15%'
    },
    subscriptions: {
      total: 1661,
      newThisMonth: 161,
      growth: '+23%'
    },
    earnings: {
      daily: 2247,
      weekly: 6810,
      monthly: 70081,
      yearly: 840972
    }
  };

  const chartData = [
    { name: 'Mon', revenue: 2400, users: 400 },
    { name: 'Tue', revenue: 1398, users: 300 },
    { name: 'Wed', revenue: 9800, users: 600 },
    { name: 'Thu', revenue: 3908, users: 400 },
    { name: 'Fri', revenue: 4800, users: 500 },
    { name: 'Sat', revenue: 3800, users: 450 },
    { name: 'Sun', revenue: 4300, users: 480 }
  ];

  const StatCard = ({ title, value, growth, children }) => (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-sm font-medium ${
          theme === 'light' ? 'text-gray-500' :
          theme === 'dark' ? 'text-gray-400' :
          theme === 'glassmorphism' ? 'text-white/80' :
          'text-amber-700'
        }`}>{title}</h3>
        {growth && (
          <span className="text-green-500 text-sm font-medium">{growth}</span>
        )}
      </div>
      <div className="flex items-baseline">
        {isLoading ? (
          <Skeleton width={100} height={36} />
        ) : (
          <CountUp
            end={value}
            duration={2}
            separator=","
            className="stat-value"
          />
        )}
      </div>
      {children}
    </div>
  );

  return (
    <div className="p-6 ml-20 lg:ml-64">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-8">
        <h1 className={`text-2xl font-bold ${
          theme === 'light' ? 'text-gray-800' :
          theme === 'dark' ? 'text-white' :
          theme === 'glassmorphism' ? 'text-white' :
          'text-amber-900'
        }`}>Dashboard Overview</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            New Report
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value={stats.users.total}
          growth={stats.users.growth}
        >
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Active</p>
              <p className="text-lg font-medium text-green-500">{stats.users.active.toLocaleString()}</p>
            </div>
            <div>
              <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Inactive</p>
              <p className="text-lg font-medium text-red-500">{stats.users.inactive.toLocaleString()}</p>
            </div>
          </div>
        </StatCard>

        <StatCard
          title="Verified Users"
          value={stats.verified.total}
          growth={stats.verified.growth}
        >
          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex-1">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-green-500 rounded-full"
                    style={{ width: stats.verified.rate }}
                  ></div>
                </div>
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">{stats.verified.rate}</span>
            </div>
          </div>
        </StatCard>

        <StatCard
          title="Blog Posts"
          value={stats.posts.total}
          growth={stats.posts.growth}
        >
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Published</p>
              <p className="text-lg font-medium text-green-500">{stats.posts.published.toLocaleString()}</p>
            </div>
            <div>
              <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Draft</p>
              <p className="text-lg font-medium text-yellow-500">{stats.posts.draft.toLocaleString()}</p>
            </div>
          </div>
        </StatCard>

        <StatCard
          title="Subscriptions"
          value={stats.subscriptions.total}
          growth={stats.subscriptions.growth}
        >
          <div className="mt-4">
            <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>New This Month</p>
            <p className="text-lg font-medium text-blue-500">{stats.subscriptions.newThisMonth.toLocaleString()}</p>
          </div>
        </StatCard>
      </div>

      {/* Revenue Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-lg font-semibold ${
              theme === 'light' ? 'text-gray-800' :
              theme === 'dark' ? 'text-white' :
              theme === 'glassmorphism' ? 'text-white' :
              'text-amber-900'
            }`}>Revenue Overview</h2>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className={`px-3 py-1.5 rounded-lg text-sm ${
                theme === 'light' ? 'bg-white border border-gray-300' :
                theme === 'dark' ? 'bg-gray-800 border border-gray-700' :
                theme === 'glassmorphism' ? 'bg-white/10 border border-white/20' :
                'bg-amber-50 border border-amber-200'
              }`}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                <XAxis
                  dataKey="name"
                  stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
                />
                <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                    borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Earnings Summary */}
        <div className="card p-6">
          <h3 className={`text-sm font-medium mb-4 ${
            theme === 'light' ? 'text-gray-500' :
            theme === 'dark' ? 'text-gray-400' :
            theme === 'glassmorphism' ? 'text-white/80' :
            'text-amber-700'
          }`}>Earnings</h3>
          <div className="space-y-4">
            {Object.entries(stats.earnings).map(([period, amount]) => (
              <div key={period}>
                <p className={`text-sm capitalize ${
                  theme === 'light' ? 'text-gray-500' :
                  theme === 'dark' ? 'text-gray-400' :
                  theme === 'glassmorphism' ? 'text-white/80' :
                  'text-amber-700'
                }`}>{period}</p>
                <p className={`text-lg font-medium ${
                  theme === 'light' ? 'text-gray-900' :
                  theme === 'dark' ? 'text-white' :
                  theme === 'glassmorphism' ? 'text-white' :
                  'text-amber-900'
                }`}>${amount.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;