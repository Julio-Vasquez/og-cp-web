import { FC } from 'react'
import { Area } from '@ant-design/charts'

import {
    AreaChartDefaultProps,
    AreaChartPropTypes,
    AreaChartProps,
} from './areaChart.type'

import './AreaChart.scss'

export const AreaChart = () => {
    const config = {
        data: {
            type: 'fetch',
            value: 'https://assets.antv.antgroup.com/g2/stocks.json',
            transform: [
                { type: 'filter', callback: (d: any) => d.symbol === 'AMZN' },
            ],
        },
        xField: (d: any) => new Date(d.date),
        yField: 'price',
        style: {
            fill: 'linear-gradient(-90deg, white 0%, #6744c6 100%)',
        },
        axis: {
            y: { labelFormatter: '~s' },
        },
        line: {
            style: {
                stroke: '#6744c6',
                strokeWidth: 2,
            },
        },
    }

    return (
        <div className='area-chart'>
            <Area {...config} />
        </div>
    )
}

AreaChart.propTypes = AreaChartPropTypes
AreaChart.defaultProps = AreaChartDefaultProps

export default AreaChart
