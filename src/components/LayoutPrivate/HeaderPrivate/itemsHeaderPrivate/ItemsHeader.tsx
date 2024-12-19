import { FC } from 'react'

import { UserActions } from '../../../DropDown/UserActions'

import useData from '../../../../hooks/useData'
import { GetInfoToken } from '../../../../utils/storage/storage'
import { AUTH } from '../../../../utils/constants/redux.constants'

export const ItemsHeader: FC = () => {
  const { username, token } = useData({ reducer: AUTH })
  const { role } = GetInfoToken(token)

  return <UserActions username={username} role={role} />
}

export default ItemsHeader
