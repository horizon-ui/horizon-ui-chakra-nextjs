import dynamic from 'next/dist/shared/lib/dynamic'
import React from 'react'
import { isWindowAvailable } from 'utils/navigation'
import { ChartProps, ChartState } from './LineAreaChart'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

class ColumnChart extends React.Component<ChartProps, ChartState> {
  constructor (props: ChartState) {
    super(props)
    this.state = {
      chartData: [],
      chartOptions: {}
    }
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
        type='bar'
        width='100%'
        height='100%'
      />
    )
  }
}

export default ColumnChart
