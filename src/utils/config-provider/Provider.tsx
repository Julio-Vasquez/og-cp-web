import dayjs from 'dayjs'
import { FC, useState } from 'react'
import { ConfigProvider } from 'antd'
import enUS from 'antd/lib/locale/en_US'
import type { Locale } from 'antd/es/locale'

import { ProviderProps } from './provider.type'

import 'dayjs/locale/en'

dayjs.locale('en')

export const ProviderAntd: FC<ProviderProps> = ({ children }) => {
    const [data, setData] = useState({ colorPrimary: '#1677FF' })
    const [locale, setLocal] = useState<Locale>(enUS)

    return (
        <>
            {/*   <LanguageSelector locale={locale} setLocal={setLocal} />
            <ThemeSelector data={data} setData={setData} /> */}
            <ConfigProvider
                locale={locale}
                theme={{
                    token: { colorPrimary: data.colorPrimary },
                }}
            >
                {children}
            </ConfigProvider>
        </>
    )
}
