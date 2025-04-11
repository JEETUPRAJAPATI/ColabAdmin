import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const WidgetSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
    <div className="flex items-center justify-between mb-4">
      <Skeleton circle width={48} height={48} />
      <Skeleton width={60} />
    </div>
    <Skeleton width={120} className="mb-2" />
    <Skeleton width={80} height={32} />
  </div>
);

export const ChartSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
    <Skeleton width={200} className="mb-6" />
    <Skeleton height={300} />
  </div>
);

export const TableSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
    <Skeleton width={200} className="mb-6" />
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex items-center space-x-4 mb-4">
        <Skeleton circle width={40} height={40} />
        <div className="flex-1">
          <Skeleton width={200} className="mb-2" />
          <Skeleton width={150} />
        </div>
        <Skeleton width={80} />
      </div>
    ))}
  </div>
);