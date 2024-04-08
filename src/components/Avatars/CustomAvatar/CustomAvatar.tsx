import { FC } from 'react'
import { Avatar } from 'antd'

import { CustomAvatarProps } from './customAvatar.type'

import p1 from '../../assets/svg/pegatina-1.svg'
import p2 from '../../assets/svg/pegatina-2.svg'
import p3 from '../../assets/svg/pegatina-3.svg'
import p4 from '../../assets/svg/pegatina-4.svg'

export const CustomAvatar: FC<CustomAvatarProps> = ({ percent }) => {
    return (
        <Avatar
            src={
                percent >= 0 && percent <= 30
                    ? p3
                    : percent > 30 && percent <= 70
                    ? p2
                    : percent > 70 && percent < 100
                    ? p1
                    : p4
            }
        />
    )
}

export default CustomAvatar
