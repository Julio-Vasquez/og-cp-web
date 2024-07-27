import { FC, useEffect } from 'react'
import { Area } from '@ant-design/charts'

import api from '../../../api'
import { useMutation } from '../../../hooks/api'
import { formatDate } from '../../../utils/types/date.util'
import { Status } from '../../../utils/constants/status.enum'
import { ApiResponseSuccess } from '../../../utils/types/response.type'
import {
    AreaChartDefaultProps,
    AreaChartMutation,
    AreaChartPropTypes,
    AreaChartProps,
    AreaChartResponse,
} from './areaChart.type'

import './AreaChart.scss'

export const AreaChart: FC<AreaChartProps> = ({ selectedChild }) => {
    const onCompleted = ({ data, variables }: ApiResponseSuccess) => {}

    const [mutation, { data: response }] = useMutation<AreaChartResponse[]>(
        { functionFetch: api.charts.getActivityPerDay },
        { onCompleted }
    )

    const data: AreaChartResponse[] =
        response.status === Status.success
            ? response.payload
            : ([] as AreaChartResponse[])

    useEffect(() => {
        mutation<AreaChartMutation>({ _idChildren: selectedChild })
    }, [selectedChild])

    const config: any = {
        data: data ?? [],
        xField: 'day',
        yField: 'qty',
        style: {
            fill: 'linear-gradient(-90deg, white 0%, #6744c6 100%)',
        },
        axis: {
            y: { labelFormatter: '~s' },
            x: {
                labelFormatter: (d: string) =>
                    formatDate({ date: new Date(d), location: 'es-ES' }),
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
