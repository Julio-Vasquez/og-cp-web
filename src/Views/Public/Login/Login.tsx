import { FC } from 'react'
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

import { login } from './../../../services/Auth/auth.slice'
import { loginType } from '../../../services/Auth/auth.types'
import { LoginDefaultProps, LoginProps, LoginPropTypes } from './login.types'

import './Login.scss'
const { Item } = Form

export const Login: FC<LoginProps> = ({ description }) => {
    const dispatch = useDispatch()

    const onFinish = (values: loginType) => {
        dispatch(login(values))
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src={loginImg} alt='image' />
                {/*  <h2 className='login__container__tittle'>Innocently learning</h2> */}
                <Form
                    className='login__container__form'
                    name='normal_login'
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 6 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                    layout='vertical'
                >
                    <LoginOutlined className='login__container__form__icon' />

                    <div className='start'>
                        <div className='start__lines'></div>
                        <div className='start__legend'>
                            <StarOutlined />
                        </div>
                        <div className='start__lines'></div>
                    </div>
                    <h2>Sign in</h2>

                    <Item
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        wrapperCol={{ offset: 0 }}
                        className='login__container__form__item'
                    >
                        <Input
                            className='login__container__form__item__input'
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder='Username'
                        />
                    </Item>

                    <Item
                        className='login__container__form__item'
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        wrapperCol={{ offset: 0 }}
                    >
                        <Input.Password
                            className='login__container__form__item__input'
                            prefix={<LockOutlined />}
                        />
                    </Item>

                    <Item wrapperCol={{ offset: 0 }}>
                        <Button type='primary' htmlType='submit'>
                            Sign in
                        </Button>
                    </Item>

                    <Link className='login__container__form__link ' to='/'>
                        Forgot password
                    </Link>
                    <Link className='login__container__form__link ' to='/register'>
                        Register
                    </Link>
                </Form>
            </div>
        </div>
    )
}
Login.propTypes = LoginPropTypes
Login.defaultProps = LoginDefaultProps

export default Login
