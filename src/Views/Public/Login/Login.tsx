import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Form, Input } from 'antd'
import {
    LockOutlined,
    UserOutlined,
    StarOutlined,
    LoginOutlined,
} from '@ant-design/icons'

import loginImg from './../../../assets/img/publicBackground.jpg'

import useData from '../../../hooks/useData'
import useIntl from '../../../hooks/useIntl'
import { login } from './../../../services/Auth/auth.slice'
import { loginType } from '../../../services/Auth/auth.types'
import { AUTH } from '../../../utils/constants/redux.constants'
import { LoginDefaultProps, LoginPropTypes } from './login.types'

import './Login.scss'

export const Login = () => {
    const { Item } = Form
    const { Password } = Input
    const labelCol = { span: 10 }
    const wrapperCol = { span: 6 }
    const initialValues = { remember: true }

    const dispatch = useDispatch()
    const { formatMessage } = useIntl()
    const { error, message, loading } = useData({ reducer: AUTH })

    const onFinish = (values: loginType) => {
        dispatch(login(values))
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img
                    className='login__img-container'
                    src={loginImg}
                    alt='image-background'
                />
                <Form
                    className='login__sign-in-form'
                    labelCol={labelCol}
                    wrapperCol={wrapperCol}
                    initialValues={initialValues}
                    onFinish={onFinish}
                    autoComplete='off'
                    layout='vertical'
                >
                    <LoginOutlined className='login__icon-sign-in' />
                    <div className='start'>
                        <div className='start__lines'></div>
                        <div className='start__legend'>
                            <StarOutlined />
                        </div>
                        <div className='start__lines'></div>
                    </div>
                    <h2 className='login__title-sign-in'>
                        {formatMessage({ id: 'title.signIn' })}
                    </h2>
                    <Item
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        wrapperCol={{ offset: 0 }}
                        className='login__item'
                    >
                        <Input
                            className='login__input'
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder={formatMessage({ id: 'title.username' })}
                        />
                    </Item>
                    <Item
                        className='login__item'
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        wrapperCol={{ offset: 0 }}
                    >
                        <Password
                            className='login__input'
                            prefix={<LockOutlined />}
                            placeholder={formatMessage({ id: 'title.password' })}
                        />
                    </Item>
                    <Button
                        className='login__submit-form'
                        type='primary'
                        htmlType='submit'
                    >
                        {formatMessage({ id: 'button.login' })}
                    </Button>
                    <Link className='login__link ' to='/forgot-password'>
                        {formatMessage({ id: 'link.forgotPassword' })}
                    </Link>
                    o
                    <Link className='login__link ' to='/register'>
                        {formatMessage({ id: 'link.orSignUp' })}
                    </Link>
                </Form>
            </div>
        </div>
    )
}

Login.propTypes = LoginPropTypes
Login.defaultProps = LoginDefaultProps

export default Login
