import { FC } from 'react'
<<<<<<< HEAD

import { Button, Form, Input } from 'antd'
import {
    LockOutlined,
    UserOutlined,
    StarOutlined,
    LoginOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { LoginDefaultProps, LoginProps, LoginPropTypes } from './login.types'

import loginImg from './../../../assets/img/publicBackground.jpg'

const { Item } = Form

import './Login.scss'
=======
import { LoginDefaultProps, LoginProps, LoginPropTypes } from './login.types'
import { Button, Checkbox, Form, Input } from 'antd'
>>>>>>> master

export const Login: FC<LoginProps> = ({ description }) => {
    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }
<<<<<<< HEAD

    return (
        <div className='login'>
            <div className='login__container'>
                <img src={loginImg} alt='image' />
                <h2 className='login__container__tittle'>Innocently learning</h2>
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
                        <Input
                            prefix={<LockOutlined className='site-form-item-icon' />}
                            type='password'
                            placeholder='Password'
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

=======
    return (
        <Form
            name='basic'
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 6 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
        >
            <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
                <h1>Login</h1>
            </Form.Item>
            <Form.Item
                label='Username'
                name='username'
                rules={[{ required: true, message: 'Please input your username!' }]}
                wrapperCol={{ offset: 0, span: 8 }}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
                wrapperCol={{ offset: 0, span: 8 }}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name='remember'
                valuePropName='checked'
                wrapperCol={{ offset: 11, span: 5 }}
            >
                <a>Forgot password </a>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

Login.propTypes = LoginPropTypes
Login.defaultProps = LoginDefaultProps

>>>>>>> master
export default Login
