import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Form, Input } from 'antd'
import {
    LockOutlined,
    UserOutlined,
    StarOutlined,
    LoginOutlined,
    MailOutlined,
    ArrowLeftOutlined,
} from '@ant-design/icons'
import loginImg from '../../../assets/img/publicBackground.jpg'

import useIntl from '../../../hooks/useIntl'
import useData from '../../../hooks/useData'
import { AUTH } from '../../../utils/constants/redux.constants'

import './ForgotPassword.scss'

const { Item } = Form

const ForgotPassword = () => {
    const dispatch = useDispatch()
    const { formatMessage } = useIntl()
    const { error, message, loading } = useData({ reducer: AUTH })

    const onFinish = (values: any) => {}

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className='forgot-password'>
            <div className='forgot-password__container'>
                <img
                    className='forgot-password__image-container'
                    src={loginImg}
                    alt='image'
                />
                {/*                 <h2 className='forgot-password__title'>
                    {formatMessage({ id: 'title.innocentlyLearning' })}
                </h2> */}
                <Form
                    className='forgot-password__form-data'
                    name='normal_forgot-password'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                    layout='vertical'
                >
                    <LockOutlined className='forgot-password__icon' />
                    <div className='start'>
                        <div className='start__lines'></div>
                        <div className='start__legend'>
                            <StarOutlined />
                        </div>
                        <div className='start__lines'></div>
                    </div>
                    <h2 className='forgot-password__title'>
                        {formatMessage({ id: 'title.forgotPassword' })}
                    </h2>
                    <Item
                        name='username'
                        className='forgot-password__item'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input
                            className='forgot-password__input'
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder={formatMessage({ id: 'texts.username' })}
                        />
                    </Item>
                    <Button
                        className='forgot-password__submit-form'
                        type='primary'
                        htmlType='submit'
                    >
                        {formatMessage({ id: 'button.send' })}
                    </Button>
                    <Link className='forgot-password__link ' to='/login'>
                        <ArrowLeftOutlined />
                    </Link>
                </Form>
            </div>
        </div>
    )
}

export default ForgotPassword
