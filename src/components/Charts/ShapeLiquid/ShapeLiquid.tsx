import { FC } from 'react'
import useIntl from '../../../hooks/useIntl'
import {
    ShapeLiquidDefaultProps,
    ShapeLiquidPropTypes,
    ShapeLiquidProps,
} from './shapeLiquid.type'

import './ShapeLiquid.scss'
import { Liquid } from '@ant-design/charts'

export const ShapeLiquid: FC<ShapeLiquidProps> = ({
    str,
    percent,
    style,
    outLine,
    theme,
    waveLength,
}) => {
    const { formatMessage } = useIntl()

    const config = {
        percent,
        style,
        outLine,
        waveLength,
        theme,
    }

    return (
        <div className='main-shape-liquid'>
            <Liquid {...config} />
            <p>
                {formatMessage({
                    id: 'subTitle.learning',
                    objVars: {
                        field: formatMessage({ id: str }),
                    },
                })}
            </p>
        </div>
    )
}

ShapeLiquid.propTypes = ShapeLiquidPropTypes
ShapeLiquid.defaultProps = ShapeLiquidDefaultProps

export default ShapeLiquid
