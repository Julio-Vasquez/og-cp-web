import { FC } from 'react'
import { Button, Form, Input } from 'antd'
import { UserOutlined, StarOutlined, UserAddOutlined } from '@ant-design/icons'

import {
    RegisterDefaultProps,
    RegisterPropTypes,
    RegisterProps,
} from './register.types'

import { Link } from 'react-router-dom'

import JImg from './../../../assets/img/publicBackground.jpg'

import './Register.scss'

const { Item } = Form

export const Register: FC<RegisterProps> = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <div className='register'>
            <div className='register__container'>
                <img src={JImg} alt='image' />

                <Form
                    className='register__container__form'
                    name='normal_Register'
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 6 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                    layout='vertical'
                >
                    <UserAddOutlined className='register__container__form-icon' />
                    <div className='start'>
                        <div className='start__line'></div>
                        <div className='start__legend'>
                            <StarOutlined />
                        </div>
                        <div className='start__line'></div>
                    </div>
                    <h2>Sign in</h2>

                    <Item
                        name='firstName'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        wrapperCol={{ offset: 0 }}
                        className='register__container__form-item'
                    >
                        <Input
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder='first name'
                        />
                    </Item>
                    <Item
                        name='secondName'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        wrapperCol={{ offset: 0 }}
                        className='register__container__form-item'
                    >
                        <Input
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder='second name'
                        />
                    </Item>
                    <Item
                        name='lastName'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        wrapperCol={{ offset: 0 }}
                        className='register__container__form-item'
                    >
                        <Input
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder='last name'
                        />
                    </Item>
                    <Item
                        name='secondLastName'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        wrapperCol={{ offset: 0 }}
                        className='register__container__form-item'
                    >
                        <Input
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder='second last name'
                        />
                    </Item>
                    <Item
                        name='gender'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        wrapperCol={{ offset: 0 }}
                        className='register__container__form-item'
                    >
                        <Input
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder='gender'
                        />
                    </Item>

                    <Item wrapperCol={{ offset: 0 }}>
                        <Button type='primary' htmlType='submit'>
                            Sign in
                        </Button>
                    </Item>

                    <Link className='register__container__form__link ' to='/login'>
                        Login
                    </Link>
                </Form>
            </div>
        </div>
    )
}
Register.propTypes = RegisterPropTypes
Register.defaultProps = RegisterDefaultProps

export default Register
