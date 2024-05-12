import { FC } from 'react'
import { Spin } from 'antd'

import { CustomDropDown } from '../../../CustomDropDown/CustomDropDown'

import api from '../../../../api'
import { useQuery } from '../../../../hooks/api'
import { DataUser } from '../../../../utils/types/userData.type'
import { Status } from '../../../../utils/constants/status.enum'
import {
    ItemsNavBarDefaultProps,
    ItemsNavBarPropsTypes,
    ItemsNavBarProps,
} from './itemsHeader.type'

export const ItemsHeader: FC<ItemsNavBarProps> = () => {
    const { data: userMe, loading } = useQuery<DataUser>({
        functionFetch: api.user.userMe,
    })

    const payload = userMe.status === Status.success ? userMe.payload : undefined

    return (
        <Spin spinning={loading}>
            <CustomDropDown payload={payload} />
        </Spin>
    )
}

ItemsHeader.propTypes = ItemsNavBarPropsTypes
ItemsHeader.defaultProps = ItemsNavBarDefaultProps

export default ItemsHeader
