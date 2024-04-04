import { Spin } from 'antd'

import { CardPresentation } from '../../../components/CardPresentation/CardPresentation'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useQuery } from '../../../hooks/api'

import { Status } from '../../../utils/constants/status.enum'
import { DataUser } from '../../../utils/types/userData.type'

import './Profile.scss'

export const Profile = () => {
    const { formatMessage } = useIntl()
    const { data: userMe, loading } = useQuery<DataUser>({
        functionFetch: api.user.userMe,
    })

    const payload =
        userMe.status === Status.success ? userMe.payload : ({} as DataUser)

    return (
        <Spin spinning={loading}>
            <div className='main-profile'>
                <CardPresentation payload={payload} />
            </div>
        </Spin>
    )
}

export default Profile
