import { FC } from 'react'
import useIntl from '../../../hooks/useIntl'
import { ShapeProps } from './shapeLiquid.type'

import './ShapeLiquid.scss'
import { Liquid } from '@ant-design/charts'

export const ShapeLiquid: FC<ShapeProps> = ({
    str,
    percent,
    style,
    outLineBorder,
    outLineDistance,
    waveLength,
}) => {
    const { formatMessage } = useIntl()

    const config = {
        percent,
        style: {
            shape: style.shape,
            backgroundFill: 'white',
            colorFill: 'red',
        },
        outLineBorder,
        outLineDistance,
        waveLength,
    }
    return (
        <div className='main-shape-liquid'>
            <p>
                {formatMessage({
                    id: 'subTitle.learning',
                    objVars: {
                        field: formatMessage({ id: str }),
                    },
                })}
            </p>
            <Liquid colorField='red' {...config} />
        </div>
    )
}

export default ShapeLiquid
