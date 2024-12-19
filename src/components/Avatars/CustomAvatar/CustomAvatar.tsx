import { FC } from 'react'
import { Avatar } from 'antd'

import p1 from '../../../assets/svg/pegatina-1.svg'
import p2 from '../../../assets/svg/pegatina-2.svg'
import p3 from '../../../assets/svg/pegatina-3.svg'
import p4 from '../../../assets/svg/pegatina-4.svg'

import { type CustomAvatarProps, CustomAvatarPropTypes } from './customAvatar.type'

const getIcon = (percent: number): string => {
  if (percent >= 0 && percent <= 30) return p3
  if (percent > 30 && percent <= 70) return p2
  if (percent > 70 && percent < 100) return p1
  return p4
}

export const CustomAvatar: FC<CustomAvatarProps> = ({ percent }) => (
  <Avatar src={getIcon(percent)} />
)

CustomAvatar.propTypes = CustomAvatarPropTypes

export default CustomAvatar
