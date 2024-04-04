import { FC } from 'react'

import { CustomGroupPaintProps } from './customGroupPaint.type'

export const CustomGroupPaint: FC<CustomGroupPaintProps> = ({
    pString,
    spanString,
}) => {
    return (
        <div>
            <p>{pString}</p>
            <span>{spanString}</span>
        </div>
    )
}

export default CustomGroupPaint
