import React from 'react';
import { motion } from 'framer-motion';

const RecentActivity = ({ activities }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-6">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${
              activity.type === 'success' ? 'bg-green-500' :
              activity.type === 'warning' ? 'bg-yellow-500' :
              'bg-blue-500'
            }`} />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {activity.title}
              </p>
              {activity.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.description}
                </p>
              )}
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {activity.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;