import React, { useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import {
  Chart,
  RadarController,
  RadialLinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

const RadarChart = ({ skills, contributor }) => {
  const radarChartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = radarChartRef.current.getContext('2d');
    const purpleShades = [
      { backgroundColor: 'rgba(93, 47, 205, 0.5)', borderColor: 'rgba(93, 47, 205, 1)' },
    ];

    Chart.register(
      RadarController,
      RadialLinearScale,
      CategoryScale,
      PointElement,
      LineElement,
      ArcElement,
      Tooltip,
      Legend
    );

    const maxWidth = 60; // Set the maximum width for labels here

    const chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: skills,
        datasets: [{
          data: Object.values(contributor),
          backgroundColor: purpleShades[0].backgroundColor,
          borderColor: purpleShades[0].borderColor,
          borderWidth: 2,
        }],
      },
      options: {
        elements: {
          line: {
            tension: 0,
          },
          point: {
            radius: 0,
            borderWidth: 2,
          },
        },
        animation: {
          duration: 1000,
          easing: 'easeInQuant',
        },
        scales: {
          r: {
            grid: {
              color: '#464369',
              lineWidth: 1,
            },
            pointLabels: {
              font: {
                size: 16,
                family: 'Satoshi Variable, sans-serif',
              },
              color: '#FFFFFF',
              callback: function (value) {
                const words = value.split(' ');
                const lines = [];
                let currentLine = '';

                for (const word of words) {
                  const newLine = currentLine ? `${currentLine} ${word}` : word;
                  const newLineWidth = this.ctx.measureText(newLine).width;

                  if (newLineWidth > maxWidth) {
                    lines.push(currentLine);
                    currentLine = word;
                  } else {
                    currentLine = newLine;
                  }
                }

                lines.push(currentLine);
                return lines;
              },
            },
            beginAtZero: true,
            max: 10,
            ticks: {
              display: false,
              stepSize: 2,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    chartInstanceRef.current = chart;

    return () => {
      // This will be run when the component unmounts or before new render
      if (chartInstanceRef.current) {
        // Destroy chart instance
        chartInstanceRef.current.destroy();
      }
    }
  }, [skills, contributor]);
  return (
    <Box w="100%" h="100%">
      <canvas ref={radarChartRef} />
    </Box>
  );
};

export default RadarChart;