import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Form, Input } from 'antd'
import {
    LockOutlined,
    UserOutlined,
    StarOutlined,
    LoginOutlined,
} from '@ant-design/icons'

import { RoutesPublic } from '../../../utils/constants/routes.constants'

import useIntl from '../../../hooks/useIntl'
import { login } from './../../../services/Auth/auth.slice'
import { loginType } from '../../../services/Auth/auth.types'
import loginImg from './../../../assets/img/publicBackground.jpg'

import './Login.scss'

export const Login = () => {
    const { Item } = Form
    const { Password } = Input
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
                    <div className='start'>
                        <div className='start__lines'></div>
                        <div className='start__legend'>
                            <StarOutlined />
                        </div>
                        <div className='start__lines'></div>
                    </div>
                    <h2 className='login__title-signIn'>
                        {formatMessage({ id: 'title.signIn' })}
                    </h2>
                    <Item
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: formatMessage({
                                    id: 'texts.insertUsername',
                                }),
                            },
                        ]}
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
                                message: formatMessage({
                                    id: 'texts.insertPassword',
                                }),
                            },
                        ]}
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
                    <Link className='login__link ' to={RoutesPublic.forgotPassword}>
                        {formatMessage({ id: 'link.forgotPassword' })}
                    </Link>
                    <Link className='login__link ' to={RoutesPublic.register}>
                        {formatMessage({ id: 'link.SignUp' })}
                    </Link>
                </Form>
            </div>
        </div>
    )
}

export default Login
