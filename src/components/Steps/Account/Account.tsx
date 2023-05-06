import { Form, Input, message } from 'antd'

import './Account.scss'

const { Item } = Form

const Account = () => {
    return (
        <div className='main-account'>
            <Item
                name='mail'
                rules={[
                    {
                        required: true,
                    },
                ]}
                wrapperCol={{ offset: 0 }}
                className='main-account__item'
            >
                <Input placeholder='e-mail' className='main-account__input' />
            </Item>
            <Item
                name='username'
                rules={[
                    {
                        required: true,
                    },
                ]}
                wrapperCol={{ offset: 0 }}
                className='main-account__item'
            >
                <Input placeholder='Username' className='main-account__input' />
            </Item>
            <Item
                name='password'
                rules={[
                    {
                        required: true,
                    },
                ]}
                wrapperCol={{ offset: 0 }}
                className='main-account__item'
            >
                <Input placeholder='password' className='main-account__input' />
            </Item>
        </div>
    )
}

export default Account
