import { Button, Tooltip } from 'antd'
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons'

import api from '../../../../../api'
import { Mutation, Props } from './upgradeDegrade.type'
import { useMutation } from '../../../../../hooks/api'
import { isAdmin, isUser } from '../../../../../utils/role.util'

import './UpgradeOrDegrade.scss'

export const UpgradeOrDegrade = ({ username, role, onCompleted }: Props) => {
    const [mutation] = useMutation(
        { functionFetch: api.user.updateRole },
        { onCompleted }
    )

    const handleUpdateRole = ({ action }: Omit<Mutation, 'username'>) =>
        mutation<Mutation>({ username, action })

    return (
        <>
            {isUser(role) && (
                <Tooltip title='Upgrade' color='green' placement='right'>
                    <Button
                        className='btn'
                        onClick={() => handleUpdateRole({ action: 'upgrade' })}
                    >
                        <UpCircleOutlined className='up-down-icons' />
                    </Button>
                </Tooltip>
            )}
            {isAdmin(role) && (
                <Tooltip title='Degrade' color='#f50' placement='right'>
                    <DownCircleOutlined
                        className='up-down-icons'
                        onClick={() => handleUpdateRole({ action: 'degrade' })}
                    />
                </Tooltip>
            )}
        </>
    )
}

export default UpgradeOrDegrade
