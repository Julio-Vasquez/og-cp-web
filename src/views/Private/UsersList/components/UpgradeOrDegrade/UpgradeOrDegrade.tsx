import { Spin, Tooltip } from 'antd'
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons'

import api from '../../../../../api'
import { useMutation } from '../../../../../hooks/api'
import type { Mutation, Props } from './upgradeDegrade.type'
import { isAnalyst, isUser } from '../../../../../utils/role.util'

import './UpgradeOrDegrade.scss'

export const UpgradeOrDegrade = ({ username, role, onCompleted }: Props) => {
  const [mutation, { loading }] = useMutation(
    { functionFetch: api.user.updateRole },
    { onCompleted }
  )

  const handleUpdateRole = ({ action }: Omit<Mutation, 'username'>) =>
    mutation<Mutation>({ username, action })

  return (
    <Spin spinning={loading}>
      {isUser(role) && (
        <Tooltip title='Upgrade' color='#87d068' placement='right'>
          <UpCircleOutlined
            className='up-down-icons'
            onClick={() => handleUpdateRole({ action: 'upgrade' })}
          />
        </Tooltip>
      )}

      {isAnalyst(role) && (
        <Tooltip title='Degrade' color='#f50' placement='right'>
          <DownCircleOutlined
            className='up-down-icons'
            onClick={() => handleUpdateRole({ action: 'degrade' })}
          />
        </Tooltip>
      )}
    </Spin>
  )
}

export default UpgradeOrDegrade
