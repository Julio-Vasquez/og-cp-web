import { FC, useEffect } from 'react'
import { Pie } from '@ant-design/plots'

import api from '../../../api'
import { useMutation } from '../../../hooks/api'
import { Status } from '../../../utils/constants/status.enum'
import { ApiResponseSuccess } from '../../../utils/types/response.type'
import {
    PieChartDefaultProps,
    PieChartMutation,
    PieChartPropTypes,
    PieChartProps,
    PieChartResponse,
} from './pieChart.type'

import './PieChart.scss'

export const PieChart: FC<PieChartProps> = ({ selectedChild, selectedPhase }) => {
    const onCompleted = ({ data, variables }: ApiResponseSuccess) => {}

    const [mutation, { data: response }] = useMutation<PieChartResponse[]>(
        { functionFetch: api.charts.getPhaseById },
        { onCompleted }
    )

    const data: PieChartResponse[] =
        response.status === Status.success
            ? response.payload
            : ([] as PieChartResponse[])

    useEffect(() => {
        mutation<PieChartMutation>({
            _idChildren: selectedChild,
            _idPhase: selectedPhase,
        })
    }, [selectedChild])

    const basicConfig = {
        angleField: 'pct',
        colorField: 'name',
        paddingRight: 0,
        innerRadius: 0.8,
        style: { stroke: '#fff', inset: 1, radius: 10 },
        scale: {
            color: { palette: 'spectral', offset: (t: any) => t * 0.8 + 0.6 },
        },
        legend: {
            color: { title: true, position: 'top', rowPadding: 5 },
        },
        annotations: [
            {
                type: 'text',
                style: {
                    text: `${data.length}`,
                    x: '50%',
                    y: '45%',
                    textAlign: 'center',
                    fontSize: 15,
                    fontStyle: 'bold',
                    fontFamily: 'exo',
                },
            },
            {
                type: 'text',
                style: {
                    text: `de ${data.length + 10}`,
                    x: '50%',
                    y: '58%',
                    textAlign: 'center',
                    fontSize: 16,
                    fontStyle: 'normal',
                },
            },
        ],
    }
    const config = { data, ...basicConfig }

    return (
        <div className='main-pie-chart'>
            <Pie {...config} />
        </div>
    )
}

PieChart.propTypes = PieChartPropTypes
PieChart.propTypes = PieChartDefaultProps

export default PieChart
