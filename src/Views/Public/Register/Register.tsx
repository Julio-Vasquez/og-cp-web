import { FC, MouseEventHandler, useState } from 'react'
import { Button, Form, Input, message, Steps } from 'antd'
import { UserOutlined, StarOutlined, UserAddOutlined } from '@ant-design/icons'

import Account from '../../../components/Steps/Account/Account'
import PersonalInformation from '../../../components/Steps/PersonalInformation/PersonalInformation'

import { stepsTypes, useStep } from '../../../hooks/useStep'

import {
    RegisterDefaultProps,
    RegisterPropTypes,
    RegisterProps,
} from './register.types'

import { Link } from 'react-router-dom'

import JImg from './../../../assets/img/publicBackground.jpg'

import './Register.scss'

const { Step } = Steps

export const Register: FC<RegisterProps> = () => {
    const steps: stepsTypes[] = [
        {
            key: 1,
            title: 'primero',
            component: <PersonalInformation />,
        },
        {
            key: 2,
            title: 'segundo',

            component: <Account />,
        },
    ]

    const { current, content, isFirstStep, isLastStep, next, prev } = useStep(steps)

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

                    <div className='register__container__form__steps'>
                        <Steps current={current}>
                            {steps.map(item => (
                                <Step key={item.key} />
                            ))}
                        </Steps>
                        {content}
                        <Button onClick={prev} disabled={isFirstStep}>
                            prev
                        </Button>
                        {!isLastStep ? (
                            <Button onClick={next}>next</Button>
                        ) : (
                            <Button onClick={onFinish}>finish</Button>
                        )}
                    </div>

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
