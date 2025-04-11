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
  RiVisaLine,
  RiMoneyDollarCircleLine,
  RiGlobalLine,
  RiSmartphoneLine,
  RiSearchEyeLine,
  RiTimeLine,
  RiLogoutCircleLine,
  RiUserStarLine,
} from 'react-icons/ri';
import StatsWidget from '../components/widgets/StatsWidget';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import WorldMap from '../components/charts/WorldMap';
import DeviceBreakdown from '../components/charts/DeviceBreakdown';
import RecentActivity from '../components/RecentActivity';
import RecentBlogs from '../components/RecentBlogs';
import UserList from '../components/UserList';
import { WidgetSkeleton, ChartSkeleton, TableSkeleton } from '../components/LoadingState';

const generateTimeSeriesData = (days = 30) => {
  return Array.from({ length: days }, (_, i) => ({
    x: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    y: faker.number.int({ min: 100, max: 1000 }),
  }));
};

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('weekly');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
      title: 'Inactive Users',
      value: 3111,
      icon: RiUserLine,
      trend: 'down',
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
    {
      title: 'Blocked Users',
      value: 234,
      icon: RiShieldUserLine,
      color: 'purple',
    },
    {
      title: "Today's Signups",
      value: 156,
      icon: RiUserAddLine,
      trend: 'up',
      trendValue: '24.5%',
      color: 'blue',
    },
    {
      title: 'Weekly Signups',
      value: 842,
      icon: RiCalendarLine,
      trend: 'up',
      trendValue: '12.8%',
      color: 'green',
    },
    {
      title: 'Growth Rate',
      value: '18.6%',
      icon: RiLineChartLine,
      trend: 'up',
      trendValue: '2.4%',
      color: 'emerald',
    },
    {
      title: 'Online Users',
      value: 1432,
      icon: RiUserStarLine,
      color: 'blue',
    },
    {
      title: 'Subscriptions',
      value: 3245,
      icon: RiVisaLine,
      trend: 'up',
      trendValue: '14.2%',
      color: 'purple',
    },
    {
      title: 'Total Revenue',
      value: '$284,392.00',
      icon: RiMoneyDollarCircleLine,
      trend: 'up',
      trendValue: '18.5%',
      color: 'emerald',
    },
    {
      title: 'Avg Session Time',
      value: '4m 32s',
      icon: RiTimeLine,
      color: 'gray',
    },
  ];

  const visitorsByCountry = [
    { id: 'USA', value: 845234 },
    { id: 'GBR', value: 423123 },
    { id: 'DEU', value: 324523 },
    { id: 'IND', value: 312345 },
    { id: 'BRA', value: 234523 },
  ];

  const deviceData = [
    { id: 'Mobile', value: 45, color: '#3B82F6' },
    { id: 'Desktop', value: 35, color: '#10B981' },
    { id: 'Tablet', value: 20, color: '#6366F1' },
  ];

  const chartData = [
    {
      id: 'signups',
      data: generateTimeSeriesData(),
    },
  ];

  const recentBlogs = [
    {
      id: 1,
      title: "Getting Started with React 18's New Features",
      excerpt: "Explore the latest features in React 18 including automatic batching, concurrent rendering, and the new Suspense SSR architecture.",
      image: "https://picsum.photos/seed/react18/200/200",
      date: "Mar 15, 2024",
      readTime: 5,
      category: "Technology"
    },
    {
      id: 2,
      title: "Modern Dashboard Design Principles",
      excerpt: "Learn the key principles of creating effective and user-friendly dashboard interfaces for modern web applications.",
      image: "https://picsum.photos/seed/design/200/200",
      date: "Mar 14, 2024",
      readTime: 4,
      category: "Design"
    },
    {
      id: 3,
      title: "Optimizing Web Performance",
      excerpt: "Essential techniques and best practices for improving your web application's performance and user experience.",
      image: "https://picsum.photos/seed/performance/200/200",
      date: "Mar 13, 2024",
      readTime: 6,
      category: "Technology"
    }
  ];

  const mostVisitedUrls = [
    { url: '/dashboard', visits: 1234 },
    { url: '/products', visits: 956 },
    { url: '/analytics', visits: 842 },
    { url: '/users', visits: 765 },
    { url: '/settings', visits: 654 }
  ];

  const recentUsers = [
    {
      id: 1,
      name: 'Emma Wilson',
      email: 'emma@example.com',
      status: 'active',
      avatar: faker.image.avatar(),
    },
    {
      id: 2,
      name: 'James Brown',
      email: 'james@example.com',
      status: 'active',
      avatar: faker.image.avatar(),
    },
    {
      id: 3,
      name: 'Sophie Taylor',
      email: 'sophie@example.com',
      status: 'inactive',
      avatar: faker.image.avatar(),
    },
    {
      id: 4,
      name: 'Michael Chen',
      email: 'michael@example.com',
      status: 'active',
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
        {loading
          ? Array(12).fill(null).map((_, i) => <WidgetSkeleton key={i} />)
          : stats.map((stat, index) => <StatsWidget key={index} {...stat} />)
        }
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {loading ? (
          <>
            <ChartSkeleton />
            <ChartSkeleton />
          </>
        ) : (
          <>
            <LineChart
              data={chartData}
              title="User Growth Trends"
            />
            <WorldMap data={visitorsByCountry} />
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {loading ? (
          <>
            <TableSkeleton />
            <ChartSkeleton />
          </>
        ) : (
          <>
            <RecentBlogs blogs={recentBlogs} />
            <BarChart data={mostVisitedUrls} title="Most Visited Pages" />
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {loading ? (
          <>
            <TableSkeleton />
            <TableSkeleton />
          </>
        ) : (
          <>
            <UserList users={recentUsers} />
            <DeviceBreakdown data={deviceData} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;