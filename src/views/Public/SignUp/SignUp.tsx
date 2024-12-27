import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Steps, Form, Button, Spin, Tooltip } from 'antd'
import {
  StarOutlined,
  LeftOutlined,
  CheckOutlined,
  RightOutlined,
} from '@ant-design/icons'

import Account from '../../../components/Steps/Account'
import ContactData from '../../../components/Steps/LegalInformation'
import PersonalInformation from '../../../components/Steps/PersonalInformation'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { AvailableDataTypes } from './signUp.types'
import { useMutation, useQuery } from '../../../hooks/api'
import { Status } from '../../../utils/constants/status.enum'
import { type StepType, useStep } from '../../../hooks/useStep'
import { ROUTES_PUBLIC } from '../../../utils/constants/routes.constants'
import type {
  ApiResponseError,
  ApiResponseSuccess,
} from '../../../utils/types/response.type'
import {
  errorNotification,
  successNotification,
} from '../../../utils/notifications/notification.action'

import './SignUp.scss'

export const SignUp = () => {
  const navigate = useNavigate()
  const { formatMessage } = useIntl()
  const [personaInformation, setPersonaInformation] = useState({})

  const { data, loading } = useQuery<AvailableDataTypes>({
    functionFetch: api.defaultData.availableData,
  })

  const { genders = [], typeDocuments = [] } =
    data.status === Status.success ? data.payload : {}

  const onCompleted = ({ data: { message } }: ApiResponseSuccess) => {
    successNotification(message)
    navigate(ROUTES_PUBLIC.login)
  }

  const onError = ({ message }: ApiResponseError) => errorNotification(message)

  const steps: StepType[] = [
    { key: 1, component: <PersonalInformation loading={loading} /> },
    {
      key: 2,
      component: (
        <ContactData
          loading={loading}
          genders={genders}
          typeDocuments={typeDocuments}
        />
      ),
    },
    { key: 3, component: <Account loading={loading} /> },
  ]

  const { currentStep, content, isFirstStep, isLastStep, next, previous } =
    useStep(steps)

  const nextOrFinish = isLastStep ? (
    <Tooltip title={formatMessage({ id: 'button.signUp' })}>
      <CheckOutlined />
    </Tooltip>
  ) : (
    <Tooltip title={formatMessage({ id: 'button.next' })}>
      <RightOutlined />
    </Tooltip>
  )

  const [mutation, { loading: loadingMutation }] = useMutation(
    { functionFetch: api.auth.signUp },
    { onCompleted, onError }
  )

  const onFinish = (values: any) => {
    if (!isLastStep) {
      next()
      setPersonaInformation({ ...personaInformation, ...values })
    } else mutation({ ...personaInformation, ...values })
  }

  return (
    <Spin spinning={loadingMutation}>
      <div className='signup'>
        <div className='signup-form'>
          <div className='signup-form__header'>
            <StarOutlined />
            <h2>{formatMessage({ id: 'title.signUp' })}</h2>
          </div>
          <Form onFinish={onFinish} autoComplete='off' layout='vertical'>
            <Steps current={currentStep} items={steps} />
            <div className='signup-form__steps'>
              <div className='signup-form__btn-prev'>
                <Button
                  onClick={previous}
                  disabled={isFirstStep}
                  icon={
                    <Tooltip title={formatMessage({ id: 'button.prev' })}>
                      <LeftOutlined />
                    </Tooltip>
                  }
                  type='link'
                />
              </div>
              <div className='signup-form__content'>{content}</div>
              <div className='signup-form__btn-next'>
                <Button icon={nextOrFinish} htmlType='submit' type='link' />
              </div>
            </div>

            <div className='signup-form__actions'>
              <Link to={ROUTES_PUBLIC.login}>
                {formatMessage({ id: 'link.signIn' })}
              </Link>
            </div>
          </Form>
        </div>
        <div className='signup-image' />
      </div>
    </Spin>
  )
}

export default SignUp
