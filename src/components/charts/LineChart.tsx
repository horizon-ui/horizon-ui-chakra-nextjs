import dynamic from 'next/dist/shared/lib/dynamic'
import { ChartProps } from './LineAreaChart'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface LineChartProps extends ChartProps {}

export default function LineChart ({
  chartOptions,
  chartData
}: LineChartProps) {
  return (
    <Chart
      options={chartOptions}
      series={chartData}
      type='line'
      width='100%'
      height='100%'
    />
  )
}
