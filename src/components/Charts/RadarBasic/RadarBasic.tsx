import { FC } from 'react'
import { Radar } from '@ant-design/plots'

import {
    RadarBasicDefaultProps,
    RadarBasicProps,
    RadarBasicPropTypes,
} from './radarBasic.type'

import './RadarBasic.scss'
import useIntl from '../../../hooks/useIntl'

export const RadarBasic: FC<RadarBasicProps> = ({
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
    const { formatMessage } = useIntl()
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
        <div className='main-radar-basic'>
            <p>{formatMessage({ id: 'subTitle.skills' })}</p>
            <Radar {...config} />
        </div>
    )
}

RadarBasic.propTypes = RadarBasicPropTypes
RadarBasic.defaultProps = RadarBasicDefaultProps

export default RadarBasic
