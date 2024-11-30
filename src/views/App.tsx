import { I18nextProvider } from 'react-i18next'

import { PrivateRoutes, PublicRoutes } from '../routes'

import i18n from '../i18n/config'
import useData from '../hooks/useData'
import { AUTH } from '../utils/constants/redux.constants'
import ThemeProvider from '../context/Theme/ThemeProvider'

const App = () => {
    const { authentication } = useData({ reducer: AUTH })

    return (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider>
                {authentication ? <PrivateRoutes /> : <PublicRoutes />}
            </ThemeProvider>
        </I18nextProvider>
    )
}

export default App
