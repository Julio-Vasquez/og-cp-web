import { FC } from 'react'
import { Radar } from '@ant-design/plots'

import { ChartDefaultProps, ChartProps, ChartPropTypes } from './radarBasic.type'

import './RadarBasic.scss'

export const Chart: FC<ChartProps> = ({
    area,
    data,
    scale,
    xField,
    yField,
    axis,
    colorField,
    shapeField,
    style,
}) => {
    const config = {
        data: data.map(d => ({ ...d, start: Math.sqrt(d.percentage) })),
        xField,
        yField,
        colorField: colorField!,
        shapeField: shapeField!,
        area: { style: { fillOpacity: area.style.fillOpacity } },
        scaleX: {
            x: { padding: scale.x.padding, align: scale.x.align },
            y: {
                nice: scale.y.nice,
                tickCount: scale.y.domainMax,
                domainMax: scale.y.tickCount,
            },
        },
        axis: {
            x: { title: axis?.x.title, grid: axis?.x.grid },
            y: {
                gridAreaFill: axis?.y.gridAreaFill,
                label: axis?.y.label,
                title: axis?.y.title,
                zIndex: axis?.y.zIndex,
            },
        },
        style: {
            lineWidth: style?.lineWidth!,
        },
    }
    return (
        <div className='main'>
            <Radar autoFit={true} {...config} />
        </div>
    )
}

Chart.defaultProps = ChartDefaultProps

export default Chart
