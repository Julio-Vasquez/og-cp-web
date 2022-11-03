import { Provider } from 'react-redux'
import { FC, useState } from 'react'
import { I18nextProvider } from 'react-i18next'

import { useIntl } from './../hooks/useIntl'

import store from '../store'
import i18n from '../i18n/config'
import { PublicRoutes } from '../routes'

const App: FC = () => {
    const { formatMessage } = useIntl()
    const [auth, setAuth] = useState(null)
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
            {/* <p>{formatMessage({ id: 'button.login' })}</p> */}
             {auth ? <>Hello</>:<PublicRoutes/>}
            </I18nextProvider>
        </Provider>
    )
}

export default App
