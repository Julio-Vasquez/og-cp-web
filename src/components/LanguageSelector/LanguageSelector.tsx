import dayjs from 'dayjs'
import { FC, useState } from 'react'
import enUS from 'antd/lib/locale/en_US'
import enES from 'antd/lib/locale/es_ES'
import type { Locale } from 'antd/es/locale'
import { Radio, RadioChangeEvent } from 'antd'

import 'dayjs/locale/en'
import { Props } from './languateSelector.type'

dayjs.locale('en')
export const LanguageSelector: FC<Props> = ({ setLocal, locale }) => {
    const handleLocale = (e: RadioChangeEvent) => {
        const localeValue = e.target.value
        console.log(e.target.value)

        setLocal(localeValue)
        if (!localeValue) {
            dayjs.locale('en')
        } else {
            dayjs.locale('es')
        }
    }

    return (
        <div style={{ marginBottom: 16 }}>
            <span style={{ marginRight: 16 }}>Change locale of components:</span>
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
