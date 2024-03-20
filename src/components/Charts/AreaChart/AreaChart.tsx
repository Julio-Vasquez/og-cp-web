import { FC, useEffect, useState } from 'react'
import { Area } from '@ant-design/charts'

import {
    AreaChartDefaultProps,
    AreaChartPropTypes,
    AreaChartProps,
} from './areaChart.type'
import { formatDate } from '../../../utils/types/date.util'

import './AreaChart.scss'
import { useMutation } from '../../../hooks/api'
import api from '../../../api'
import { Status } from '../../../utils/constants/status.enum'
import { ApiResponseSuccess } from '../../../utils/types/response.type'

type T = { _idChildren: string }
type ChartResponse = { qty: string | number; day: string }

export const AreaChart: FC<AreaChartProps> = ({ selectedChild }) => {
    console.log(selectedChild)

    const onCompleted = ({ data, variables }: ApiResponseSuccess) => {}
    // en el userMutation se pasa el tipo de respuesta
    const [mutation, { data: response }] = useMutation<ChartResponse[]>(
        { functionFetch: api.charts.getActivityPerDay },
        { onCompleted }
    )

    const data: ChartResponse[] =
        response.status === Status.success
            ? response.payload
            : ([] as ChartResponse[])

    useEffect(() => {
        // se pasan las propiedades requeridas  para la mutación
        mutation<T>({ _idChildren: selectedChild })
    }, [selectedChild])

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
