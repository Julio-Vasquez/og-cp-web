import { FC } from 'react'

import { CustomDropDown } from '../../../DropDown/UserActions/UserActions'

import useData from '../../../../hooks/useData'
import { GetInfoToken } from '../../../../utils/storage/storage'
import { AUTH } from '../../../../utils/constants/redux.constants'

export const ItemsHeader: FC = () => {
    const { username, token } = useData({ reducer: AUTH })
    const { role } = GetInfoToken(token)

    return <CustomDropDown username={username} role={role} />
}

export default ItemsHeader
