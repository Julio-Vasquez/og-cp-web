import { FC } from 'react'
import { Button, Form, Steps } from 'antd'
import { StarOutlined, UserAddOutlined } from '@ant-design/icons'

import Account from '../../../components/Steps/Account/Account'
import PersonalInformation from '../../../components/Steps/PersonalInformation/PersonalInformation'

import { StepType, useStep } from '../../../hooks/useStep'

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
    const steps: StepType[] = [
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

    const { currentStep, content, isFirstStep, isLastStep, next, previous } =
        useStep(steps)

    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    const onPrev = () => previous()

    const onNext = () => next()

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
                        <Steps current={currentStep}>
                            {steps.map(item => (
                                <Step key={item.key} />
                            ))}
                        </Steps>
                        {content}
                        <Button onClick={onPrev} disabled={isFirstStep}>
                            prev
                        </Button>
                        {!isLastStep ? (
                            <Button onClick={onNext}>next</Button>
                        ) : (
                            <Button onClick={onFinish}>finish</Button>
                        )}
                    </div>

                    <Link className='register__container__form__link ' to='/login'>
                        or Login
                    </Link>
                </Form>
            </div>
        </div>
    )
}
Register.propTypes = RegisterPropTypes
Register.defaultProps = RegisterDefaultProps

export default Register
