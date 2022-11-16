import { FC } from 'react'
import { Button, Form, Input } from 'antd'
import {
    LockOutlined,
    UserOutlined,
    StarOutlined,
    LoginOutlined,
} from '@ant-design/icons'

import { LoginDefaultProps, LoginProps, LoginPropTypes } from './login.types'

import JImg from './../../../assets/img/publicBackground.jpg'

import './Login.scss'

export const Login: FC<LoginProps> = ({ description }) => {
    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <div className='Login'>
            <div className='Login__container'>
                <img src={JImg} alt='image' />

                <Form
                    className='Login__container--form'
                    name='normal_login'
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 6 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                    layout='vertical'
                >
                    <LoginOutlined className='Login__container--form-icon' />

                    <div className='div'>
                        <div className='div__line'></div>
                        <div className='div__legend'>
                            <StarOutlined />
                        </div>
                        <div className='div__line'></div>
                    </div>
                    <h2>Sign in</h2>

                    <Form.Item
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        wrapperCol={{ offset: 0 }}
                        className='Login__container--form-item'
                    >
                        <Input
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder='Username'
                        />
                    </Form.Item>

                    <Form.Item
                        className='Login__container--form-item'
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
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 0 }}>
                        <Button type='primary' htmlType='submit'>
                            Sign in
                        </Button>
                    </Form.Item>

                    <a className='login-form-forgot' href=''>
                        Forgot password
                    </a>
                </Form>
            </div>
        </div>
    )
}

Login.propTypes = LoginPropTypes
Login.defaultProps = LoginDefaultProps

export default Login
