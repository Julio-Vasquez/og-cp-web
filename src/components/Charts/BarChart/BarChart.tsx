import { Bar } from '@ant-design/plots'

import './BarChart.scss'
import { FC, useEffect } from 'react'
import { ApiSend, BarChartProps } from './barChart.type'
import { useMutation } from '../../../hooks/api'
import api from '../../../api'
import { ChartResponse } from '../../../utils/types/response.type'
import { Status } from '../../../utils/constants/status.enum'
export const BarChart: FC<BarChartProps> = ({ selectedChild, selectedPhase }) => {
    const onCompleted = () => {}
    const [mutation, { data: response }] = useMutation<ChartResponse[]>(
        { functionFetch: api.charts.getStepsByPhase },
        { onCompleted }
    )
    const data: ChartResponse[] =
        response.status === Status.success
            ? response.payload
            : ([] as ChartResponse[])

    const x = Object.values(data)
    const y = x.map(item => item)

    useEffect(() => {
        mutation<ApiSend>({ _idChildren: selectedChild, _idPhase: selectedPhase })
    }, [selectedChild])

    const config = {
        data: y[1],
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
                labelFormatter: '.%',
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
