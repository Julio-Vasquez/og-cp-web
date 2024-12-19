import en from 'antd/lib/locale/en_US'
import es from 'antd/lib/locale/es_ES'
import { ConfigProvider } from 'antd'
import { type PropsWithChildren, FC } from 'react'

import useIntl from '../../hooks/useIntl'
import { configTheme } from '../../utils/constants/theme.constants'

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { lng } = useIntl()
  const locale = { en, es }

  console.log('the locale is', { lng, locale: locale[lng] })

  return (
    <ConfigProvider locale={locale[lng]} theme={{ token: configTheme }}>
      {children}
    </ConfigProvider>
  )
}

export default ThemeProvider
