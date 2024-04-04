import { FC } from 'react'

import { CustomCardOneDataProps } from './customCardOneData.type'

export const CustomCardOneData: FC<CustomCardOneDataProps> = ({
    pString,
    spanString,
    styles,
}) => {
    return (
        <div className={`${styles}`}>
            <p>{pString}</p>
            <span>{spanString}</span>
        </div>
    )
}
