import { FC } from 'react'
import { Area } from '@ant-design/charts'

import {
    AreaChartDefaultProps,
    AreaChartPropTypes,
    AreaChartProps,
} from './areaChart.type'
import { formatDate } from '../../../utils/types/date.util'

import './AreaChart.scss'

export const AreaChart: FC<AreaChartProps> = () => {
    const data = [
        {
            day: '3/8/2023',
            qty: 14,
        },
        {
            day: '9/29/2023',
            qty: 30,
        },
        {
            day: '7/24/2023',
            qty: 15,
        },
        {
            day: '7/17/2023',
            qty: 68,
        },
        {
            day: '8/24/2023',
            qty: 10,
        },
        {
            day: '6/25/2023',
            qty: 4,
        },
        {
            day: '12/15/2023',
            qty: 68,
        },
        {
            day: '12/3/2023',
            qty: 65,
        },
        {
            day: '3/22/2023',
            qty: 4,
        },
        {
            day: '12/6/2023',
            qty: 2,
        },
        {
            day: '2/11/2024',
            qty: 10,
        },
        {
            day: '2/27/2024',
            qty: 10,
        },
        {
            day: '4/11/2023',
            qty: 34,
        },
        {
            day: '9/26/2023',
            qty: 85,
        },
        {
            day: '2/20/2024',
            qty: 92,
        },
        {
            day: '9/23/2023',
            qty: 56,
        },
        {
            day: '6/14/2023',
            qty: 11,
        },
        {
            day: '5/7/2023',
            qty: 91,
        },
        {
            day: '12/15/2023',
            qty: 37,
        },
        {
            day: '10/16/2023',
            qty: 75,
        },
        {
            day: '2/6/2024',
            qty: 58,
        },
        {
            day: '6/8/2023',
            qty: 60,
        },
        {
            day: '2/22/2024',
            qty: 13,
        },
        {
            day: '3/22/2023',
            qty: 58,
        },
        {
            day: '2/15/2024',
            qty: 30,
        },
        {
            day: '5/28/2023',
            qty: 1,
        },
        {
            day: '4/27/2023',
            qty: 23,
        },
        {
            day: '12/15/2023',
            qty: 28,
        },
        {
            day: '3/13/2023',
            qty: 88,
        },
        {
            day: '10/14/2023',
            qty: 96,
        },
    ].sort((a: any, b: any) => new Date(a.day).getTime() - new Date(b.day).getTime())

    const config = {
        data,
        xField: 'day',
        yField: 'qty',
        style: {
            fill: 'linear-gradient(-90deg, white 0%, #6744c6 100%)',
        },
        axis: {
            y: { labelFormatter: '~s' },
            x: {
                labelFormatter: (d: any) => {
                    return formatDate({ date: new Date(d), location: 'es' })
                },
            },
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
