import { ResponsivePie } from '@nivo/pie';
import { useTheme } from '../../context/ThemeContext';

const DeviceBreakdown = ({ data }) => {
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-6">
        Device Breakdown
      </h3>
      <div className="h-[300px]">
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.2]]
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={theme === 'dark' ? '#9CA3AF' : '#4B5563'}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: 'color',
            modifiers: [['darker', 2]]
          }}
          theme={{
            text: {
              fill: theme === 'dark' ? '#9CA3AF' : '#4B5563'
            },
            tooltip: {
              container: {
                background: theme === 'dark' ? '#1F2937' : '#FFFFFF',
                color: theme === 'dark' ? '#F3F4F6' : '#1F2937',
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default DeviceBreakdown;