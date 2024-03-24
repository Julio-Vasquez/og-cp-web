import { FC } from 'react'
import { Liquid } from '@ant-design/charts'

import useIntl from '../../../hooks/useIntl'
import { funcShapeLiquid } from '../../../utils/functions/charts.func'
import {
    ShapeLiquidDefaultProps,
    ShapeLiquidPropTypes,
    ShapeLiquidProps,
} from './shapeLiquid.type'

import './ShapeLiquid.scss'

export const ShapeLiquid: FC<ShapeLiquidProps> = ({ name, percent }) => {
    const { formatMessage } = useIntl()

    const config = {
        percent,
        style: { shape: funcShapeLiquid },
        outLine: {
            border: 2,
            distance: 19,
            style: { stroke: '#6744c6a6', strokeOpacity: 0.65 },
        },
        waveLength: 128,
        theme: { color: '#6744c6a6' },
    }

    return (
        <div className='main-shape-liquid'>
            <p>
                {formatMessage({
                    id: 'subTitle.learning',
                    objVars: { field: name },
                })}
            </p>

            <Liquid autoFit {...config} />
        </div>
    )
}

ShapeLiquid.propTypes = ShapeLiquidPropTypes
ShapeLiquid.defaultProps = ShapeLiquidDefaultProps

export default ShapeLiquid
