import { FC } from 'react'

import { GetIconProps } from './getIcon.types'

export const GetIcon: FC<GetIconProps> = ({
    src,
    width = 25,
    className,
}: GetIconProps) => <img src={src} width={width} className={className} />
