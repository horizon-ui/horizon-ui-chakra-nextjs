import React, { useRef, useEffect, useState } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { Chart, DoughnutController, ArcElement, CategoryScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(DoughnutController, ArcElement, CategoryScale, ChartDataLabels);

interface DoughnutChartProps {
  score: number;
  backgroundColor: string;
  foregroundColor: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ score, backgroundColor, foregroundColor }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (isMounted && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        const data = {
          labels: ['Score', 'Remaining'],
          datasets: [
            {
              data: [score, 100 - score],
              backgroundColor: [foregroundColor, backgroundColor],
              hoverBackgroundColor: [foregroundColor, backgroundColor],
              borderWidth: 0,  // This will remove the stroke
              borderRadius: 4,
            },
          ],
        };

        const options = {
          maintainAspectRatio: false,
          cutout: '72%',  // This will fill the center of the doughnut chart
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
            datalabels: {
              display: false, // hide datalabels as we are adding custom text
            },
          },
        };

        new Chart(ctx, {
          type: 'doughnut',
          data: data,
          options: options,
        });
      }
    }
  }, [score, backgroundColor, foregroundColor, isMounted]);

  return (
    <Box position="relative" width="100%" height="100%">
      {isMounted && <canvas ref={canvasRef}></canvas>}
      <Center position="absolute" top="0" left="0" width="100%" height="100%">
        <Text fontSize="xl">{`${score}%\nScore`}</Text>
      </Center>
    </Box>
  );
};

export default DoughnutChart;

