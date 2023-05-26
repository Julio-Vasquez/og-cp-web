import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { FC, useState } from 'react'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import type { Locale } from 'antd/es/locale'
import { I18nextProvider } from 'react-i18next'
import { ConfigProvider, Radio, RadioChangeEvent } from 'antd'

import { PrivateRoutes, PublicRoutes } from '../routes'

import i18n from '../i18n/config'
import useData from '../hooks/useData'
import { AUTH } from '../utils/constants/redux.constants'

dayjs.locale('en')

const App: FC = () => {
    const { authentication } = useData({ reducer: AUTH })
    const [locale, setLocal] = useState<Locale>(enUS)
    const changeLocale = (e: RadioChangeEvent) => {
        const localeValue = e.target.value
        setLocal(localeValue)
        if (!localeValue) {
            dayjs.locale('en')
        } else {
            dayjs.locale('zh-cn')
        }
    }
    return (
        <>
            <I18nextProvider i18n={i18n}>
                <div style={{ marginBottom: 16 }}>
                    <span style={{ marginRight: 16 }}>
                        Change locale of components:
                    </span>
                    <Radio.Group value={locale} onChange={changeLocale}>
                        <Radio.Button key='en' value={enUS}>
                            English
                        </Radio.Button>
                        <Radio.Button key='cn' value={zhCN}>
                            中文
                        </Radio.Button>
                    </Radio.Group>
                </div>
                <ConfigProvider locale={locale}>
                    {authentication ? <PrivateRoutes /> : <PublicRoutes />}
                </ConfigProvider>
            </I18nextProvider>{' '}
        </>
    )
}

export default App
