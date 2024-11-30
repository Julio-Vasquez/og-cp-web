import dayjs from 'dayjs'
import { FC } from 'react'
import { Select } from 'antd'
import { useTranslation } from 'react-i18next'

import useIntl from '../../../hooks/useIntl'

import './LanguageSelector.scss'

export const LanguageSelector: FC = () => {
    const { i18n } = useTranslation()
    const { formatMessage } = useIntl()

    const handleChangeLocale = (locale: string) => {
        i18n.changeLanguage(locale)
        dayjs.locale(locale)
    }

    return (
        <Select
            className='language-selector'
            onSelect={handleChangeLocale}
            optionLabelProp='label'
            placeholder={formatMessage({ id: 'language.selectLanguage' })}
            options={[
                { label: formatMessage({ id: 'language.spanish' }), value: 'es' },
                { label: formatMessage({ id: 'language.english' }), value: 'en' },
            ]}
        />
    )
}

export default LanguageSelector
