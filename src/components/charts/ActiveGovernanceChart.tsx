import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import Chart from 'chart.js/auto';

const ChartCard = () => {
  const chartRef = useRef(null);
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const data = [20, 35, 38, 31, 45, 55, 78];

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'My First Dataset',
            data,
            fill: true,
            backgroundColor: 'rgba(184, 69, 255, 0.2)',
            borderColor: '#FFFFFF',
            borderWidth: 0.4,
            pointRadius: 3,  // The size of the point
            pointHoverRadius: 5,  // 
            tension: 0.1
          }]
        },
        options: {
            interaction: {
                mode: 'nearest',  // Will trigger actions when hovering the nearest item
                intersect: false,  // Disables the line intersect detection
              },
            scales: {
              x: { // For x-axis
                grid: {
                    drawOnChartArea: false,
                    lineWidth: 0.05,
                 
                  color: '#FFFFFF',  // Set your desired grid color here
                },
                ticks: {
                  color: '#FFFFFF',  // Set your desired tick color here
                }
              },
              y: { // For y-axis
                grid: {
                  color: '#FFFFFF',  // Set your desired grid color here
                },
                ticks: {
                  color: '#FFFFFF',  // Set your desired tick color here
                },
                
              }
            }

            
          }
        });

      return () => {
        chartInstance.destroy();
      };
    }
  }, []);

  return (
    <Box boxShadow="base" p="6" rounded="md" bg="#25242F">
        <canvas ref={chartRef} style={{backgroundColor: '#211F2E'}} />
    </Box>
  );
};

export default ChartCard;
