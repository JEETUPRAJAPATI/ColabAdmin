import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const StatsWidget = ({ title, value, icon: Icon, trend, trendValue, color, secondaryValue, secondaryLabel }) => {
  const bgColorClass = {
    blue: 'bg-blue-50 dark:bg-blue-900/20',
    gray: 'bg-gray-50 dark:bg-gray-900/20',
    green: 'bg-green-50 dark:bg-green-900/20',
    purple: 'bg-purple-50 dark:bg-purple-900/20',
    emerald: 'bg-emerald-50 dark:bg-emerald-900/20',
  }[color];

  const iconColorClass = {
    blue: 'text-blue-600 dark:text-blue-400',
    gray: 'text-gray-600 dark:text-gray-400',
    green: 'text-green-600 dark:text-green-400',
    purple: 'text-purple-600 dark:text-purple-400',
    emerald: 'text-emerald-600 dark:text-emerald-400',
  }[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${bgColorClass}`}>
          <Icon className={`w-6 h-6 ${iconColorClass}`} />
        </div>
        {trend && (
          <span className={`text-sm font-medium ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend === 'up' ? '↑' : '↓'} {trendValue}
          </span>
        )}
      </div>
      
      <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">
        {title}
      </h3>
      
      <div className="flex items-baseline">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          <CountUp
            end={value}
            duration={2}
            separator=","
            prefix={typeof value === 'number' ? '' : value.startsWith('$') ? '$' : ''}
          />
        </span>
        {secondaryValue && (
          <span className="ml-2 text-sm text-gray-500">
            {secondaryLabel}: {secondaryValue}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default StatsWidget;