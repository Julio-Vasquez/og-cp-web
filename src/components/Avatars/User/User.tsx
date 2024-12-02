import { FC } from 'react'
import { Avatar } from 'antd'

import { UserProps } from './types'

export const User: FC<UserProps> = ({ username }) => (
    <Avatar size='small'>{username.substring(0, 1) || 'U'}</Avatar>
)

export default User
