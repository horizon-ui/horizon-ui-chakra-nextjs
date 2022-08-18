import dynamic from 'next/dist/shared/lib/dynamic'
import React from 'react'
import { isWindowAvailable } from 'utils/navigation'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type ChartProps = {
  // using `interface` is also ok
  [x: string]: any
}
type ChartState = {
  chartData: any[]
  chartOptions: any
}

class PieChart extends React.Component<ChartProps, ChartState> {
  constructor (props: { chartData: any[]; chartOptions: any }) {
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
        type='pie'
        width='100%'
        height='55%'
      />
    )
  }
}

export default PieChart
