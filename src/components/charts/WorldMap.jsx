import { ResponsiveChoropleth } from '@nivo/geo';
import { useTheme } from '../../context/ThemeContext';
import worldCountries from '../../data/world_countries.json';

const WorldMap = ({ data }) => {
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-6">
        Visitors by Country
      </h3>
      <div className="h-[400px]">
        <ResponsiveChoropleth
          data={data}
          features={worldCountries.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="blues"
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".0s"
          projectionScale={118}
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={true}
          graticuleLineColor={theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}
          borderWidth={0.5}
          borderColor={theme === 'dark' ? '#374151' : '#E5E7EB'}
          legends={[
            {
              anchor: 'bottom-left',
              direction: 'column',
              justify: true,
              translateX: 20,
              translateY: -20,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemTextColor: theme === 'dark' ? '#9CA3AF' : '#4B5563',
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: theme === 'dark' ? '#F3F4F6' : '#1F2937',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </div>
    </div>
  );
};

export default WorldMap;