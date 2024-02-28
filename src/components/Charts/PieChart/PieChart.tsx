import { Pie } from '@ant-design/plots'
import './PieChart.scss'
export const PieChart = () => {
    const config = {
        data: [
            { type: 'canceladas', value: 3 },
            { type: 'completas', value: 15 },
        ],
        angleField: 'value',
        colorField: 'type',
        paddingRight: 0,
        innerRadius: 0.8,
        style: {
            stroke: '#fff',
            inset: 1,
            radius: 10,
        },
        scale: {
            color: {
                palette: 'spectral',
                offset: (t: any) => t * 0.8 + 0.6,
            },
        },
        legend: {
            color: {
                title: true,
                position: 'left',
                rowPadding: 5,
            },
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

export default PieChart
