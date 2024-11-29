import { Button } from 'antd'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { CheckCircleFilled } from '@ant-design/icons'

import Star from '../../../components/Avatars/Star/Star'
import { ErrorToken } from '../../../components/Error/ErrorToken'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useMutation } from '../../../hooks/api'
import { ValidateToken } from '../../../utils/storage/storage'
import { ROUTES_PUBLIC as RP } from '../../../utils/constants/routes.constants'
import {
    ApiResponseError,
    ApiResponseSuccess,
} from '../../../utils/types/response.type'
import {
    errorNotification,
    successNotification,
} from '../../../utils/notifications/notification.action'

import './ActiveAccount.scss'

const ActivateAccount = () => {
    const { token } = useParams()
    const navigate = useNavigate()
    const { formatMessage } = useIntl()

    const text = formatMessage({ id: 'title.verified' })

    const validToken = ValidateToken(token ?? '')

    const onCompleted = ({ data: { message } }: ApiResponseSuccess) =>
        successNotification(message, 'top')

    const onError = ({ message }: ApiResponseError) => errorNotification(message)

    const [mutation, { loading }] = useMutation(
        { functionFetch: api.auth.activateAccount },
        { onCompleted, onError, cancelError: false }
    )

    const handleClickActiveAccount = () => navigate(RP.login)

    useEffect(() => {
        if (validToken) mutation({ token, activate: true })
    }, [validToken])

    if (!validToken) return <ErrorToken />

    return (
        <div className='active-account'>
            <div className='active-account__form-data'>
                <CheckCircleFilled className='active-account__icon' />
                <Star />
                <h2 className='active-account__title'>{text}</h2>
                <Button
                    onClick={handleClickActiveAccount}
                    className='active-account__submit-form '
                    loading={loading}
                >
                    {formatMessage({ id: 'link.signIn' })}
                </Button>
            </div>
        </div>
    )
}

export default ActivateAccount
