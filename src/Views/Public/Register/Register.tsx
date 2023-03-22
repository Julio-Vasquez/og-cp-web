import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Steps } from 'antd'
import { StarOutlined, UserAddOutlined } from '@ant-design/icons'

import Account from '../../../components/Steps/Account/Account'
import LoginImage from './../../../assets/img/publicBackground.jpg'
import PersonalInformation from '../../../components/Steps/PersonalInformation/PersonalInformation'

import api from '../../../api'
import { StepType, useStep } from '../../../hooks/useStep'
import { useIntl } from './../../../hooks/useIntl'
import { useMutation /*useGet*/ } from './../../../hooks/api'

import {
    RegisterDefaultProps,
    RegisterPropTypes,
    RegisterProps,
} from './register.types'

import './Register.scss'

export const Register: FC<RegisterProps> = () => {
    const { formatMessage } = useIntl()
    const onCompleted = (data: any) => {
        console.log(data)
    }

    const onError = (err: any) => {
        console.log(err)
    }

    const [mutation, { loading, error, data }] = useMutation(
        { functionFetch: api.auth.signUp },
        { onCompleted, onError, cancelError: false }
    )

    //const {loading: LoadingGet} = useGet({ functionFetch: api.auth.signUp }, {})

    const steps: StepType[] = [
        { key: 1, title: 'primero', component: <PersonalInformation /> },
        { key: 2, title: 'segundo', component: <Account /> },
    ]

    const { currentStep, content, isFirstStep, isLastStep, next, previous } =
        useStep(steps)

    const onFinish = (values: any) => {
        console.log('Success:', values)
        
        mutation(values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    const onPrev = () => previous()

    const onNext = () => next()

    return (
        <div className='register'>
            <div className='register__container'>
                <img src={LoginImage} alt='image' />

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
                        <div className='start__line'/>
                        <div className='start__legend'>
                            <StarOutlined />
                        </div>
                        <div className='start__line'></div>
                    </div>
                    <h2>Sign in</h2>

                    <div className='register__container__form__steps'>
                        <Steps
                            current={currentStep}
                            items={steps.map(item => ({ ...item }))}
                        />

                        {content}

                        <Button onClick={onPrev} disabled={isFirstStep}>
                            prev
                        </Button>

                        {!isLastStep ? (
                            <Button onClick={onNext}>
                                {formatMessage({ id: 'button.next' })}{' '}
                            </Button>
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
