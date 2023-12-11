import { Link } from 'react-router-dom'
import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons'

import Star from '../../../components/Star/Star'

import { useDispatch } from 'react-redux'
import useIntl from '../../../hooks/useIntl'
import {
    maxLength,
    minLength,
    requiredField,
} from '../../../utils/functions/form.functions'
import { login } from './../../../services/Auth/auth.slice'
import { loginType, state } from '../../../services/Auth/auth.types'
import loginImg from './../../../assets/img/publicBackground.jpg'
import { ROUTES_PUBLIC as RP } from '../../../utils/constants/routes.constants'

import './Login.scss'
const { Item } = Form
const { Password } = Input

export const Login = ({ loading }: state) => {
    const dispatch = useDispatch()
    const { formatMessage } = useIntl()

    const onFinish = (values: loginType) => {
        dispatch(login(values))
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img
                    className='login__image-container'
                    src={loginImg}
                    alt='image-background'
                />
                <Form
                    className='login__signIn-form'
                    onFinish={onFinish}
                    autoComplete='off'
                    layout='vertical'
                >
                    <LoginOutlined className='login__icon-signIn' />
                    <Star />
                    <h2 className='login__title-signIn'>
                        {formatMessage({ id: 'title.signIn' })}
                    </h2>
                    <Item
                        name='username'
                        hasFeedback
                        rules={[
                            requiredField({ field: 'text.username' }),
                            maxLength({ field: 'text.username', max: 45 }),
                            minLength({ field: 'text.username', min: 4 }),
                        ]}
                        className='login__item'
                    >
                        <Input
                            autoComplete='true'
                            className='login__input'
                            prefix={<UserOutlined className='site-form-item-icon' />}
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
                        className='login__item'
                        name='password'
                        hasFeedback
                        rules={[
                            requiredField({ field: 'text.password' }),
                            maxLength({ field: 'text.password', max: 60 }),
                            minLength({ field: 'text.password', min: 4 }),
                        ]}
                    >
                        <Password
                            autoComplete='true'
                            className='login__input'
                            prefix={<LockOutlined />}
                            placeholder={formatMessage({ id: 'title.password' })}
                        />
                    </Item>
                    <Button
                        className='login__submit-form'
                        type='primary'
                        htmlType='submit'
                        loading={loading}
                    >
                        {formatMessage({ id: 'button.login' })}
                    </Button>
                    <Link className='login__link ' to={RP.forgotPassword}>
                        {formatMessage({ id: 'link.forgotPassword' })}
                    </Link>
                    <Link className='login__link-register ' to={RP.register}>
                        {formatMessage({ id: 'link.signUp' })}
                    </Link>
                </Form>
            </div>
        </div>
    )
}

export default Login
