import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Steps } from 'antd'
import {
    CheckOutlined,
    LeftOutlined,
    RightOutlined,
    StarOutlined,
    UserAddOutlined,
} from '@ant-design/icons'

import Account from '../../../components/Steps/SignUp/Account/Account'
import LoginImage from './../../../assets/img/publicBackground.jpg'
import ContactData from '../../../components/Steps/SignUp/ContactData/ContactData'
import PersonalInformation from '../../../components/Steps/SignUp/PersonalInformation/PersonalInformation'

import {
    SignUpDefaultProps,
    SignUpPropTypes,
    SignUpProps,
    SignUpRoles,
    availableDataTypes,
} from './signUp.types'
import api from '../../../api'
import { useIntl } from '../../../hooks/useIntl'
import { useMutation, useGet } from '../../../hooks/api'
import { StepType, useStep } from '../../../hooks/useStep'
import { ROLES } from '../../../utils/constants/roles.enum'
import { ROUTES_PUBLIC as RP } from '../../../utils/constants/routes.constants'

import './signUp.scss'

export const SignUp: FC<SignUpProps> = () => {
    const { formatMessage } = useIntl()

    const { data: availableData, loading: loadingAvailableData } =
        useGet<availableDataTypes>(
            { functionFetch: api.defaultData.availableData },
            {}
        )

    const steps: StepType[] = [
        { key: 1, title: '', component: <PersonalInformation /> },
        {
            key: 2,
            title: '',
            component: (
                <ContactData
                    genders={availableData?.payload?.genders}
                    typeDocuments={availableData?.payload?.typeDocuments}
                    loading={loadingAvailableData}
                />
            ),
        },
        { key: 3, title: '', component: <Account /> },
    ]
    const [personaInformation, setPersonaInformation] = useState({})

    const { currentStep, content, isFirstStep, isLastStep, next, previous } =
        useStep(steps)
    const onPrev = () => previous()
    const onNext = () => next()
    const onCompleted = (data: any) => {}
    const onError = (data: any) => {}

    const [mutation] = useMutation(
        { functionFetch: api.auth.signUp },
        { onCompleted, onError, cancelError: false }
    )

    const onFinish = (values: any) => {
        if (!isLastStep) {
            onNext()
            setPersonaInformation({ ...personaInformation, ...values })
        } else {
            const isAdmin = availableData?.payload?.roles.find(
                (item: SignUpRoles) => item.role === ROLES.Admin
            )
            const { role } = isAdmin
            mutation({
                ...personaInformation,
                ...values,
                role: role || ROLES.Admin,
            })
        }
    }
    return (
        <div className='signUp'>
            <div className='signUp__container'>
                <img
                    className='signUp__img-container'
                    src={LoginImage}
                    alt='image'
                />
                <Form
                    className='signUp__form-data'
                    onFinish={onFinish}
                    autoComplete='off'
                    layout='vertical'
                >
                    <UserAddOutlined className='signUp__icon' />
                    <div className='start'>
                        <div className='start__line' />
                        <div className='start__legend'>
                            <StarOutlined />
                        </div>
                        <div className='start__line' />
                    </div>
                    <h2 className='signUp__title'>
                        {formatMessage({ id: 'title.signUp' })}
                    </h2>
                    <div className='signUp__steps'>
                        <Steps
                            current={currentStep}
                            items={steps}
                            className='signUp__steps-main'
                        />
                        {content}
                        <div className='signUp__main-submit-form'>
                            <Button
                                className='signUp__submit-form'
                                onClick={onPrev}
                                disabled={isFirstStep}
                            >
                                <LeftOutlined />
                            </Button>

                            <Button
                                className='signUp__submit-form'
                                htmlType='submit'
                            >
                                {!isLastStep ? <RightOutlined /> : <CheckOutlined />}
                            </Button>
                        </div>
                    </div>
                    <div className='signUp__link-login '>
                        <Link to={RP.login}>
                            {formatMessage({ id: 'link.SignIn' })}
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

SignUp.propTypes = SignUpPropTypes
SignUp.defaultProps = SignUpDefaultProps

export default SignUp
