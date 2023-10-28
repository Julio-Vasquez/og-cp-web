import 'dayjs/locale/en'
import dayjs from 'dayjs'
import { FC } from 'react'
import enUS from 'antd/lib/locale/en_US'
import enES from 'antd/lib/locale/es_ES'
import { Radio, RadioChangeEvent } from 'antd'
import { useTranslation } from 'react-i18next'

import { Props } from './languageSelector.type'

dayjs.locale('en')

export const LanguageSelector: FC<Props> = ({ setLocal, locale }) => {
    const { i18n } = useTranslation()
    const handleLocale = (e: RadioChangeEvent) => {
        const localeValue = e.target.value
        console.log(e.target.value)
        setLocal(localeValue)
        if (!localeValue) {
            i18n.changeLanguage('en')
            dayjs.locale('en')
        } else {
            i18n.changeLanguage('es')
            dayjs.locale('es')
        }
    }

    return (
        <div style={{ marginBottom: 16 }}>
            <Radio.Group value={locale} onChange={handleLocale}>
                <Radio.Button key='en' value={enUS}>
                    English
                </Radio.Button>
                <Radio.Button key='es' value={enES}>
                    Spanish
                </Radio.Button>
            </Radio.Group>
        </div>
    )
}
