'use client';
import dynamic from 'next/dynamic';
// import Chart from 'react-apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const LineAreaChart = (props: any) => {
  const { chartData, chartOptions } = props;

  return (
  
    <Chart
      options={chartOptions}
      type="area"
      width="100%"
      height="100%"
      series={chartData}
    />
  );
};

export default LineAreaChart;
