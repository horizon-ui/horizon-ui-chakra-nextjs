import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import Chart from 'chart.js/auto';

const ChartCard = () => {
  const chartRef = useRef(null);
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const data = [65, 59, 80, 81, 56, 55, 40];

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'My First Dataset',
            data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, []);

  return (
    <Box boxShadow="base" p="6" rounded="md" bg="white">
      <canvas ref={chartRef} />
    </Box>
  );
};

export default ChartCard;
