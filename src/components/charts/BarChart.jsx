import { ResponsiveBar } from '@nivo/bar';
import { useTheme } from '../../context/ThemeContext';

const BarChart = ({ data, title }) => {
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-6">
        {title}
      </h3>
      <div className="h-[300px]">
        <ResponsiveBar
          data={data}
          keys={['visits']}
          indexBy="url"
          margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 1.6]]
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -45,
            legend: 'URL',
            legendPosition: 'middle',
            legendOffset: 45,
            truncateTickAt: 0
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Visits',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
          }}
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: theme === 'dark' ? '#9CA3AF' : '#4B5563'
                }
              },
              legend: {
                text: {
                  fill: theme === 'dark' ? '#9CA3AF' : '#4B5563'
                }
              }
            },
            grid: {
              line: {
                stroke: theme === 'dark' ? '#374151' : '#E5E7EB'
              }
            },
            tooltip: {
              container: {
                background: theme === 'dark' ? '#1F2937' : '#FFFFFF',
                color: theme === 'dark' ? '#F3F4F6' : '#1F2937',
              }
            }
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: 'color',
            modifiers: [['darker', 1.6]]
          }}
          role="application"
          ariaLabel="URL visits chart"
        />
      </div>
    </div>
  );
};

export default BarChart;