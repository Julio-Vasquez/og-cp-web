import { FC } from 'react'
import { Form, Input } from 'antd'

import './PersonalInformation.scss'

const { Item } = Form

const PersonalInformation = () => {
    return (
        <div className='main-personalInformation'>
            <Item
                name='firstName'
                rules={[
                    {
                        required: true,
                        message: 'Please input your first name!',
                    },
                ]}
                wrapperCol={{ offset: 0 }}
                className='main-personalInformation__item'
            >
                <Input
                    placeholder='first name'
                    className='main-personalInformation__item__input'
                />
            </Item>
            <Item
                name='secondName'
                rules={[
                    {
                        required: true,
                        message: 'Please input your second name!',
                    },
                ]}
                wrapperCol={{ offset: 0 }}
                className='main-personalInformation__item'
            >
                <Input
                    placeholder='second name'
                    className='main-personalInformation__item__input'
                />
            </Item>
            <Item
                name='lastName'
                rules={[
                    {
                        required: true,
                        message: 'Please input your lastName!',
                    },
                ]}
                wrapperCol={{ offset: 0 }}
                className='main-personalInformation__item'
            >
                <Input
                    placeholder='last name'
                    className='main-personalInformation__item__input'
                />
            </Item>

            <Item
                name='birthDay'
                rules={[
                    {
                        required: true,
                        message: 'Please input your birth day!',
                    },
                ]}
                wrapperCol={{ offset: 0 }}
                className='main-personalInformation__item'
            >
                <Input
                    placeholder='Birth Day'
                    className='main-personalInformation__item__input'
                />
            </Item>
        </div>
    )
}

export default PersonalInformation
