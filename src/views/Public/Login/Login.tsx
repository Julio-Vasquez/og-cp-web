import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined, StarOutlined } from '@ant-design/icons'

import useIntl from '../../../hooks/useIntl'
import { login } from '../../../services/Auth/auth.slice'
import { LoginType } from '../../../services/Auth/auth.types'
import { ROUTES_PUBLIC } from '../../../utils/constants/routes.constants'
import {
    maxLength,
    minLength,
    requiredField,
} from '../../../utils/functions/form.functions'

import './Login.scss'

const { Item } = Form
const { Password } = Input

export const Login: FC = () => {
    const dispatch = useDispatch()
    const { formatMessage } = useIntl()

    const onFinish = (values: Omit<LoginType, 'device'>) =>
        dispatch(login({ ...values, device: 'Desktop' }))

    return (
        <div className='login'>
            <div className='login-image' />
            <div className='login-form'>
                <div className='login-form__header'>
                    <StarOutlined />
                    <h2>{formatMessage({ id: 'title.signIn' })}</h2>
                </div>
                <Form onFinish={onFinish} autoComplete='off' layout='vertical'>
                    <Item
                        hasFeedback
                        name='username'
                        className='login-form__item'
                        rules={[
                            requiredField({ field: 'text.username' }),
                            maxLength({ field: 'text.username', max: 45 }),
                            minLength({ field: 'text.username', min: 4 }),
                        ]}
                    >
                        <Input
                            className='login-form__input'
                            prefix={<UserOutlined />}
                            placeholder={formatMessage({
                                id: 'text.userOrEmail',
                                objVars: {
                                    user: formatMessage({ id: 'text.username' }),
                                    mail: formatMessage({ id: 'text.mail' }),
                                },
                            })}
                        />
                    </Item>
                    <Item
                        name='password'
                        className='login-form__item'
                        hasFeedback
                        rules={[
                            requiredField({ field: 'text.password' }),
                            maxLength({ field: 'text.password', max: 60 }),
                            minLength({ field: 'text.password', min: 4 }),
                        ]}
                    >
                        <Password
                            className='login-form__input'
                            prefix={<LockOutlined />}
                            placeholder={formatMessage({ id: 'title.password' })}
                        />
                    </Item>
                    <div className='login-form__actions'>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='login-form__button'
                        >
                            {formatMessage({ id: 'button.login' })}
                        </Button>
                        <Link to={ROUTES_PUBLIC.forgotPassword}>
                            {formatMessage({ id: 'link.forgotPassword' })}
                        </Link>
                        <Link to={ROUTES_PUBLIC.register}>
                            {formatMessage({ id: 'link.signUp' })}
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login
