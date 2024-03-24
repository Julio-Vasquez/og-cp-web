import { FC, useEffect } from 'react'
import { Bar } from '@ant-design/plots'

import api from '../../../api'
import { useMutation } from '../../../hooks/api'
import { Status } from '../../../utils/constants/status.enum'
import { BarChartMutation, BarChartProps, BarChartResponse } from './barChart.type'

import './BarChart.scss'

export const BarChart: FC<BarChartProps> = ({ selectedChild, selectedPhase }) => {
    const onCompleted = () => {}
    const [mutation, { data: response }] = useMutation<BarChartResponse>(
        { functionFetch: api.charts.getStepsByPhase },
        { onCompleted }
    )

    const data: BarChartResponse =
        response.status === Status.success
            ? response.payload
            : ({} as BarChartResponse)

    useEffect(() => {
        mutation<BarChartMutation>({
            _idChildren: selectedChild,
            _idPhase: selectedPhase,
        })
    }, [selectedChild])

    const config = {
        data: data.progress ?? [],
        xField: 'activity',
        yField: 'pctCompleted',
        style: {
            fill: (d: any) =>
                +d.pctCompleted >= 50 / 100 ? '#6744c6' : '#6744c6a6',
        },
        label: {
            text: 'pctCompleted',
            formatter: '.0%',
            style: {
                textAnchor: (d: any) =>
                    +d.pctCompleted > 1 || +d.pctCompleted === 100 / 100
                        ? 'right'
                        : 'start',
                fill: (d: any) =>
                    +d.pctCompleted > 1 || +d.pctCompleted === 100 / 100
                        ? '#fff'
                        : '#000',
                dx: (d: any) => (+d.pctCompleted > 1 ? -8 : 5),
            },
        },
        axis: {
            y: {
                // labelFormatter: '.%',
            },
        },
    }
    return (
        <div className='bar-chart'>
            <Bar {...config} />
        </div>
    )
}

export default BarChart
