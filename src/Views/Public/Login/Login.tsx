import { FC } from 'react'
import { Button, Form, Input, Divider } from 'antd'
import { LockOutlined, UserOutlined, StarOutlined } from '@ant-design/icons'
import { LoginDefaultProps, LoginProps, LoginPropTypes } from './login.types'

import './Login.scss'
export const Login: FC<LoginProps> = ({ description }) => {
    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <div className='main'>
            <div className='main_container'>
                <img
                    src='https://images.pexels.com/photos/8123784/pexels-photo-8123784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='image'
                />
                <Form
                    name='normal_login'
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 6 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                    layout='vertical'
                >
                    <Form.Item wrapperCol={{ offset: 0 }}>
                        <h1>Login</h1>
                    </Form.Item>
                    <Divider>
                        <StarOutlined />
                    </Divider>

                    <Form.Item
                        className='main_formItem'
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        wrapperCol={{ offset: 0 }}
                    >
                        <Input
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder='Username'
                        />
                    </Form.Item>

                    <Form.Item
                        className='main_formItem'
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
