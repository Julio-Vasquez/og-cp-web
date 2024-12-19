import { Button, Form, Input, Spin } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'

import { Secure } from '../../../components/Icons/Secure'
import { ErrorToken } from '../../../components/Error/ErrorToken'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useMutation } from '../../../hooks/api'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { ValidateToken } from '../../../utils/storage/storage'
import { FormValues, SetPasswordMutation } from './setPassword.type'
import { ROUTES_PUBLIC } from '../../../utils/constants/routes.constants'
import {
  ApiResponseError,
  ApiResponseSuccess,
} from '../../../utils/types/response.type'
import {
  errorNotification,
  successNotification,
} from '../../../utils/notifications/notification.action'
import {
  matchPassword,
  maxLength,
  minLength,
  requiredField,
} from '../../../utils/functions/form.functions'

import './SetPassword.scss'

const { Item } = Form
const { Password } = Input

export const SetPassword = () => {
  const device = useDeviceType()
  const navigate = useNavigate()
  const { token = '' } = useParams()
  const { formatMessage } = useIntl()

  const isMobile = device === 'Mobile'
  const validToken = ValidateToken(token!)

  const onCompleted = ({ data: { message } }: ApiResponseSuccess) => {
    successNotification(message)
    navigate(ROUTES_PUBLIC.login)
  }

  const onError = ({ message }: ApiResponseError) => errorNotification(message)

  const [mutation, { loading }] = useMutation(
    { functionFetch: api.auth.setPassword },
    { onCompleted, onError, cancelError: false }
  )

  if (!validToken || !token) return <ErrorToken />

  const onFinish = ({ newPassword }: FormValues) =>
    mutation<SetPasswordMutation>({ newPassword, token })

  return (
    <div className='set-password'>
      <Spin spinning={loading}>
        <div className='set-password__container'>
          <div className={`set-password__mobile ${isMobile && 'visible'}`}>
            <Secure size={100} />
          </div>
          <div className='set-password__container__image'>
            <Secure size={200} />
          </div>
          <div className='set-password__container__form'>
            <Form onFinish={onFinish} autoComplete='off' layout='vertical'>
              <h2 className='set-password__container__title'>
                {formatMessage({ id: 'text.assignNewPassword' })}
              </h2>
              <Item
                name='newPassword'
                hasFeedback
                rules={[
                  requiredField({ field: 'text.newPassword' }),
                  maxLength({
                    field: 'text.newPassword',
                    max: 45,
                  }),
                  minLength({ field: 'text.newPassword', min: 4 }),
                ]}
              >
                <Password
                  className='set-password__container__item'
                  placeholder={formatMessage({
                    id: 'text.newPassword',
                  })}
                />
              </Item>
              <Item
                name='confirmNewPassword'
                dependencies={['newPassword']}
                hasFeedback
                rules={[
                  requiredField({
                    field: 'text.confirmNewPassword',
                  }),
                  maxLength({
                    field: 'text.newPassword',
                    max: 45,
                  }),
                  minLength({ field: 'text.newPassword', min: 4 }),
                  ({ getFieldValue }) =>
                    matchPassword({
                      getFieldValue,
                      field: 'newPassword',
                    }),
                ]}
              >
                <Password
                  className='set-password__container__item'
                  placeholder={formatMessage({
                    id: 'text.confirmNewPassword',
                  })}
                />
              </Item>
              <Button
                type='primary'
                htmlType='submit'
                className='set-password__container__item'
              >
                {formatMessage({ id: 'text.assignNewPassword' })}
              </Button>
            </Form>
          </div>
        </div>
      </Spin>
    </div>
  )
}

export default SetPassword
