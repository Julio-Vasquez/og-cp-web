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

const { Item } = Form
const { Password } = Input
const labelCol = { span: 10 }
const wrapperCol = { span: 6 }
const initialValues = { remember: true }

export const Login = () => {
    const dispatch = useDispatch()
    const { formatMessage } = useIntl()
    const { error, message, loading } = useData({ reducer: AUTH })

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
                    className='login__form'
                    name='normal_login'
                    labelCol={labelCol}
                    wrapperCol={wrapperCol}
                    initialValues={initialValues}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                    layout='vertical'
                >
                    <LoginOutlined className='login__icon' />

                    <div className='start'>
                        <div className='start__lines'></div>
                        <div className='start__legend'>
                            <StarOutlined />
                        </div>
                        <div className='start__lines'></div>
                    </div>
                    <h2>{formatMessage({ id: 'title.signIn' })}</h2>

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

                    <Item wrapperCol={{ offset: 0 }}>
                        <Button type='primary' htmlType='submit'>
                            {formatMessage({ id: 'button.login' })}
                        </Button>
                    </Item>

                    <Link className='login__link ' to='/'>
                        {formatMessage({ id: 'link.forgotPassword' })}
                    </Link>
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
