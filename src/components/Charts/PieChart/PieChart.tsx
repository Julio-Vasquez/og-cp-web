import { Pie } from '@ant-design/plots'
import './PieChart.scss'
import {
    ApiResponseSuccess,
    ChartResponse,
} from '../../../utils/types/response.type'
import api from '../../../api'
import { Status } from '../../../utils/constants/status.enum'
import { FC, useEffect } from 'react'
import { useMutation } from '../../../hooks/api'
import {
    PieChartDefaultProps,
    PieChartPropTypes,
    PieChartProps,
} from './pieChart-type'

type T = { _idChildren: string; _idPhase: string }

export const PieChart: FC<PieChartProps> = ({ selectedChild, selectedPhase }) => {
    const onCompleted = ({ data, variables }: ApiResponseSuccess) => {}
    // en el userMutation se pasa el tipo de respuesta
    const [mutation, { data: response }] = useMutation<ChartResponse[]>(
        { functionFetch: api.charts.getPhaseById },
        { onCompleted }
    )

    const data: ChartResponse[] =
        response.status === Status.success
            ? response.payload
            : ([] as ChartResponse[])

    useEffect(() => {
        mutation<T>({ _idChildren: selectedChild, _idPhase: selectedPhase })
    }, [selectedChild])

    const config = {
        data,
        angleField: 'pct',
        colorField: 'name',
        paddingRight: 0,
        innerRadius: 0.8,
        style: {
            stroke: '#fff',
            inset: 1,
            radius: 10,
        },
        scale: {
            color: { palette: 'spectral', offset: (t: any) => t * 0.8 + 0.6 },
        },
        legend: {
            color: { title: true, position: 'left', rowPadding: 5 },
        },
        annotations: [
            {
                type: 'text',
                style: {
                    text: '13',
                    x: '50%',
                    y: '45%',
                    textAlign: 'center',
                    fontSize: 50,
                    fontStyle: 'bold',
                    fontFamily: 'exo',
                },
            },
            {
                type: 'text',
                style: {
                    text: 'de 15',
                    x: '50%',
                    y: '58%',
                    textAlign: 'center',
                    fontSize: 16,
                    fontStyle: 'normal',
                },
            },
        ],
    }
    return (
        <div className='main-pie-chart'>
            <Pie {...config} />
        </div>
    )
}

PieChart.propTypes = PieChartPropTypes
PieChart.propTypes = PieChartDefaultProps

export default PieChart
