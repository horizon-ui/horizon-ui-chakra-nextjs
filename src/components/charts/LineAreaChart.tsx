import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dist/shared/lib/dynamic'
import React from 'react'
import { isWindowAvailable } from 'utils/navigation'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export type ChartState = {
  chartData: ApexAxisChartSeries | ApexNonAxisChartSeries
  chartOptions: ApexOptions
}

export type ChartProps = ChartState & {
  [x: string]: any
}

class LineChart extends React.Component<ChartProps, ChartState> {
  state: ChartState = {
    chartData: [],
    chartOptions: {}
  }

  constructor (props: ChartProps) {
    super(props)
  }

  componentDidMount () {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions
    })
  }

  render () {
    if (!isWindowAvailable()) return <></>
    return (
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type='area'
        width='100%'
        height='100%'
      />
    )
  }
}

export default LineChart
