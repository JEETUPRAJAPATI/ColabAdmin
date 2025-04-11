import { motion } from 'framer-motion';

const RecentBlogs = ({ blogs }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-6">
        Recent Blog Posts
      </h3>
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                {blog.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                {blog.excerpt}
              </p>
              <div className="flex items-center mt-2 space-x-4">
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {blog.date}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {blog.readTime} min read
                </span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  blog.category === 'Technology' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                  blog.category === 'Design' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400' :
                  'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                }`}>
                  {blog.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;