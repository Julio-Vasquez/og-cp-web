import { FC } from 'react'
import CustomGroupPaint from '../CustomGroupPaint'

import { CardPresentationProps } from './cardPresentation.type'

import useIntl from '../../hooks/useIntl'
import { OPTIONS } from '../../utils/constants/options.constant'

import './CardPresentation.scss'
import { Space } from 'antd'
import { formatDate } from '../../utils/types/date.util'

export const CardPresentation: FC<CardPresentationProps> = ({ payload }) => {
    const { formatMessage } = useIntl()
    return (
        <div className='main-card-presentation'>
            <div className='main-card-presentation__barre' />
            <div className='main-card-presentation__data'>
                <div className='main-card-presentation__names'>
                    <CustomGroupPaint
                        pString={`${
                            payload.fullName ??
                            formatMessage({ id: 'text.fullName' })
                        }`}
                        spanString={`${
                            payload.role ?? formatMessage({ id: 'text.role' })
                        }`}
                    />
                </div>
                <div className='main-card-presentation__l' />
                <div className='main-card-presentation__contact'>
                    <CustomGroupPaint
                        pString={`${formatMessage({ id: 'text.username' })}`}
                        spanString={`${
                            payload.username ?? formatMessage({ id: 'text.user' })
                        }`}
                    />
                    <CustomGroupPaint
                        pString={`${formatMessage({ id: 'text.mail' })}`}
                        spanString={`${
                            payload.mail ?? formatMessage({ id: 'text.mail' })
                        }`}
                    />
                    <CustomGroupPaint
                        pString={`${formatMessage({ id: 'text.birthDate' })}`}
                        spanString={formatDate({
                            date: new Date(payload.birthDate),
                            location: 'es-Es',
                        })}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardPresentation
