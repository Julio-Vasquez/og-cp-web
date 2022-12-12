import { Button, Form, Input, message, Steps } from 'antd'

import './Account.scss'

const { Item } = Form

const Account = () => {
    return (
        <div className='main-account'>
            <Item
                name='email'
                rules={[
                    {
                        required: true,
                        message: 'Please input your first e-mail!',
                    },
                ]}
                wrapperCol={{ offset: 0 }}
                className='main-account__item'
            >
                <Input placeholder='e-mail' className='main-account__item__input' />
            </Item>
            <Item
                name='Username'
                rules={[
                    {
                        required: true,
                        message: 'Please input your second Username!',
                    },
                ]}
                wrapperCol={{ offset: 0 }}
                className='main-account__item'
            >
                <Input
                    placeholder='Username'
                    className='main-account__item__input'
                />
            </Item>
            <Item
                name='password'
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                wrapperCol={{ offset: 0 }}
                className='main-account__item'
            >
                <Input
                    placeholder='password'
                    className='main-account__item__input'
                />
            </Item>
        </div>
    )
}

export default Account
