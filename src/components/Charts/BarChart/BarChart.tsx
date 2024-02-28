import { Bar } from '@ant-design/plots'

import './BarChart.scss'
export const BarChart = () => {
    const config = {
        data: [
            { activity: 'Actividad a', percentage: 10 / 100 },
            { activity: 'Actividad b', percentage: 15 / 100 },
            { activity: 'Actividad c', percentage: 30 / 100 },
            { activity: 'Actividad d', percentage: 5 / 100 },
            { activity: 'Actividad e', percentage: 1 / 100 },
            { activity: 'Actividad f', percentage: 51 / 100 },
            { activity: 'Actividad g', percentage: 8 / 100 },
            { activity: 'Actividad h', percentage: 14 / 100 },
            { activity: 'Actividad i', percentage: 15 / 100 },
            { activity: 'Actividad j', percentage: 100 / 100 },
            { activity: 'Actividad k', percentage: 100 / 100 },
            { activity: 'Actividad l', percentage: 100 / 100 },
            { activity: 'Actividad m', percentage: 100 / 100 },
            { activity: 'Actividad n', percentage: 80 / 100 },
        ],
        xField: 'activity',
        yField: 'percentage',
        style: {
            fill: (d: any) => (+d.percentage >= 50 / 100 ? '#6744c6' : '#6744c6a6'),
        },
        label: {
            text: 'percentage',
            formatter: '.0%',
            style: {
                textAnchor: (d: any) =>
                    +d.percentage > 1 || +d.percentage === 100 / 100
                        ? 'right'
                        : 'start',
                fill: (d: any) =>
                    +d.percentage > 1 || +d.percentage === 100 / 100
                        ? '#fff'
                        : '#000',
                dx: (d: any) => (+d.percentage > 1 ? -8 : 5),
            },
        },
        axis: {
            y: {
                labelFormatter: '.0%',
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
