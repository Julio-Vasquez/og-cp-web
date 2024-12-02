import { FC } from 'react'

import { GetIconProps } from './getIcon.types'

export const GetIcon: FC<GetIconProps> = ({
    src,
    width = 25,
    ...props
}: GetIconProps) => <img src={src} width={width} {...props} />
