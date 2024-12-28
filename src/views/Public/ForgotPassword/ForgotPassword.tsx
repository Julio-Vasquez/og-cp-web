import { Button, Form, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useMutation } from '../../../hooks/api'
import { ROUTES_PUBLIC } from '../../../utils/constants/routes.constants'
import { type ForgotPassword as ForgotPasswordForm } from './forgotPassword.type'
import {
  ApiResponseError,
  ApiResponseSuccess,
} from '../../../utils/types/response.type'
import {
  successNotification,
  errorNotification,
} from '../../../utils/notifications/notification.action'
import {
  maxLength,
  minLength,
  requiredField,
} from '../../../utils/functions/form/form.functions'

import './ForgotPassword.scss'

const { Item } = Form

const ForgotPassword = () => {
  const navigate = useNavigate()
  const { formatMessage } = useIntl()

  const textInput = formatMessage({
    id: 'text.userOrEmail',
    objVars: {
      user: formatMessage({ id: 'text.username' }),
      mail: formatMessage({ id: 'text.mail' }),
    },
  })

  const description = formatMessage({
    id: 'text.inputObj',
    objVars: { field: textInput },
  })

  const onCompleted = ({ data: { message } }: ApiResponseSuccess) => {
    successNotification(message)
    navigate(ROUTES_PUBLIC.login)
  }

  const onError = ({ message }: ApiResponseError) => errorNotification(message)

  const [mutation, { loading }] = useMutation(
    { functionFetch: api.auth.forgotPassword },
    { onCompleted, onError, cancelError: false }
  )

  const onFinish = (values: ForgotPasswordForm) =>
    mutation<ForgotPasswordForm>({ ...values })

  return (
    <div className='forgot-password'>
      <Form
        className='forgot-password__form'
        name='normal_forgot-password'
        onFinish={onFinish}
        autoComplete='off'
        layout='vertical'
      >
        <h2 className='forgot-password__title'>
          {formatMessage({ id: 'title.forgotPassword' })}
        </h2>
        <p className='forgot-password__description'>{description}</p>
        <Item
          hasFeedback
          name='username'
          className='forgot-password__item'
          rules={[
            requiredField({ field: 'text.username' }),
            maxLength({ field: 'text.username', max: 45 }),
            minLength({ field: 'text.username', min: 4 }),
          ]}
        >
          <Input
            className='forgot-password__input'
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder={textInput}
          />
        </Item>

        <Button type='primary' htmlType='submit' className='forgot-password__button'>
          {formatMessage({ id: 'text.recoverPassword' })}
        </Button>

        <Link to={ROUTES_PUBLIC.login} className='forgot-password__actions'>
          {formatMessage({ id: 'link.signIn' })}
        </Link>
      </Form>
    </div>
  )
}

export default ForgotPassword
