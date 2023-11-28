import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { CheckCircleFilled } from '@ant-design/icons'

import Star from '../../../components/Star/Star'
import { ErrorToken } from '../../../components/Error/ErrorToken'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useMutation } from '../../../hooks/api'
import { ValidateToken } from '../../../utils/storage/storage'
import { ROUTES_PUBLIC as RP } from '../../../utils/constants/routes.constants'
import { successNotification } from '../../../utils/notifications/notification.action'

import './ActiveAccount.scss'

import { Loading } from '../../../components/Loading'
import { Button, Spin } from 'antd'

const ActivateAccount = () => {
    const { token } = useParams()
    const navigate = useNavigate()
    const { formatMessage } = useIntl()
    const [visible, setVisible] = useState(false)

    const validToken = ValidateToken(token ?? '')

    const onCompleted = (data: any) => {
        setVisible(true)
        successNotification(data.data.message, 'top')
    }

    const [mutation, { loading }] = useMutation(
        { functionFetch: api.auth.activateAccount },
        { onCompleted }
    )

    useEffect(() => {
        if (validToken) mutation({ token, activate: true })
    }, [validToken])

    if (!validToken) return <ErrorToken />

    const text = formatMessage({ id: 'title.verified' })
    return (
        <Spin spinning={loading}>
            <div className='active-account'>
                <div className='active-account__form-data'>
                    <CheckCircleFilled className='active-account__icon' />
                    <Star />
                    <h2 className='active-account__title'>{text}</h2>
                    <Button
                        onClick={() => navigate(RP.login)}
                        className='active-account__submit-form '
                    >
                        {formatMessage({ id: 'link.signIn' })}
                    </Button>
                </div>
            </div>
        </Spin>
    )
}

export default ActivateAccount
