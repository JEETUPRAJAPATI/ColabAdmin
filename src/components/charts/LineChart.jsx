import { ResponsiveLine } from '@nivo/line';
import { useTheme } from '../../context/ThemeContext';

const LineChart = ({ data, title }) => {
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-6">
        {title}
      </h3>
      <div className="h-80">
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
          }}
          curve="cardinal"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Time',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Value',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          enablePoints={false}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
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
                stroke: theme === 'dark' ? '#374151' : '#E5E7EB',
                strokeWidth: 1
              }
            },
            crosshair: {
              line: {
                stroke: theme === 'dark' ? '#9CA3AF' : '#4B5563',
                strokeWidth: 1,
                strokeOpacity: 0.35
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;