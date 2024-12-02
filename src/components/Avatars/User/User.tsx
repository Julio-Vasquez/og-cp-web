import { FC } from 'react'
import { Avatar } from 'antd'

import { UserProps } from './types'

export const User: FC<UserProps> = ({ username, ...props }) => (
    <Avatar size='large' {...props}>
        {username.substring(0, 1).toUpperCase() || 'U'}
    </Avatar>
)

export default User
