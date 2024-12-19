import { Spin } from 'antd'
import { useEffect } from 'react'
import { CheckCircleTwoTone } from '@ant-design/icons'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { ErrorToken } from '../../../components/Error/ErrorToken'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useMutation } from '../../../hooks/api'
import { ValidateToken } from '../../../utils/storage/storage'
import { ROUTES_PUBLIC } from '../../../utils/constants/routes.constants'
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
  const navigate = useNavigate()
  const { token = '' } = useParams()
  const { formatMessage } = useIntl()

  const text = formatMessage({ id: 'title.verified' })

  const validToken = ValidateToken(token)

  const onCompleted = ({ data: { message } }: ApiResponseSuccess) =>
    successNotification(message, 'top')

  const onError = ({ message }: ApiResponseError) => errorNotification(message)

  const [mutation, { loading }] = useMutation(
    { functionFetch: api.auth.activateAccount },
    { onCompleted, onError, cancelError: false }
  )

  const handleClickActiveAccount = () => navigate(ROUTES_PUBLIC.login)

  useEffect(() => {
    if (validToken) mutation({ token, activate: true })
  }, [validToken])

  if (!validToken || !token) return <ErrorToken />

  return (
    <div className='active-account'>
      <Spin spinning={loading}>
        <div className='active-account__container'>
          <h2 className='active-account__title'>{text}</h2>
          <CheckCircleTwoTone
            className='active-account__icon'
            twoToneColor='#52c41a'
          />
          <Link
            className='active-account__actions'
            onClick={handleClickActiveAccount}
            to={ROUTES_PUBLIC.login}
          >
            {formatMessage({ id: 'link.signIn' })}
          </Link>
        </div>
      </Spin>
    </div>
  )
}

export default ActivateAccount
