import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

const ActivateAccount = () => {
    const { token } = useParams()
    const { formatMessage } = useIntl()
    const [visible, setVisible] = useState(false)

    const validToken = ValidateToken(token ?? '')

    const onCompleted = (data: any) => {
        successNotification(data.data.message, 'top')
        setVisible(true)
    }

    const [mutation] = useMutation(
        { functionFetch: api.auth.activateAccount },
        { onCompleted }
    )

    useEffect(() => {
        if (validToken) mutation({ token, activate: true })
    }, [])

    if (!validToken) return <ErrorToken />

    return (
        <div className='active-account'>
            <div className='active-account__form-data'>
                <CheckCircleFilled className='active-account__icon' />
                <Star />
                {visible && (
                    <>
                        <h2 className='active-account__title'>
                            {formatMessage({ id: 'title.verified' })}
                        </h2>
                        <Link to={RP.login} className='active-account__link '>
                            {formatMessage({ id: 'link.signIn' })}
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default ActivateAccount
