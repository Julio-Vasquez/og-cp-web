import { FC } from 'react'
import { Form, Input, Spin } from 'antd'

import useIntl from '../../../hooks/useIntl'
import { type Loading } from '../../../utils/types/generics.type'
import {
  maxLength,
  minLength,
  emailField,
  matchPassword,
  requiredField,
} from '../../../utils/functions/form.functions'

import './Account.scss'

const { Item } = Form
const { Password } = Input

export const Account: FC<Loading> = ({ loading }) => {
  const { formatMessage } = useIntl()
  return (
    <div className='account'>
      <Spin spinning={loading}>
        <Item
          name='mail'
          hasFeedback
          className='account__item'
          rules={[
            emailField(),
            requiredField({ field: 'text.mail' }),
            maxLength({ field: 'text.mail', max: 150 }),
            minLength({ field: 'text.mail', min: 10 }),
          ]}
        >
          <Input
            className='account__input'
            placeholder={formatMessage({ id: 'text.mail' })}
          />
        </Item>
        <Item
          name='username'
          hasFeedback
          className='account__item'
          rules={[
            requiredField({ field: 'text.username' }),
            maxLength({ field: 'text.username', max: 45 }),
            minLength({ field: 'text.username', min: 4 }),
          ]}
        >
          <Input
            placeholder={formatMessage({ id: 'text.username' })}
            className='account__input'
          />
        </Item>
        <Item
          name='password'
          hasFeedback
          className='account__item'
          rules={[
            requiredField({ field: 'text.password' }),
            maxLength({ field: 'text.password', max: 60 }),
            minLength({ field: 'text.password', min: 4 }),
          ]}
        >
          <Password
            className='account__input'
            placeholder={formatMessage({ id: 'text.password' })}
          />
        </Item>
        <Item
          name='confirmPassword'
          dependencies={['password']}
          hasFeedback
          className='account__item'
          rules={[
            requiredField({ field: 'text.passwordConfirm' }),
            maxLength({ field: 'text.passwordConfirm', max: 60 }),
            minLength({ field: 'text.passwordConfirm', min: 4 }),
            ({ getFieldValue }) =>
              matchPassword({ getFieldValue, field: 'password' }),
          ]}
        >
          <Password
            className='account__input'
            placeholder={formatMessage({ id: 'text.passwordConfirm' })}
          />
        </Item>
      </Spin>
    </div>
  )
}

export default Account
