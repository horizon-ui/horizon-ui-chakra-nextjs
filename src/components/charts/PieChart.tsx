import dynamic from 'next/dist/shared/lib/dynamic'
import React from 'react'
import { isWindowAvailable } from 'utils/navigation'
import { ChartProps, ChartState } from './LineAreaChart'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

class PieChart extends React.Component<ChartProps, ChartState> {
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
        type='pie'
        width='100%'
        height='55%'
      />
    )
  }
}

export default PieChart
