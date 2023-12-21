import { FC } from 'react'
import { I18nextProvider } from 'react-i18next'

import { PrivateRoutes, PublicRoutes } from '../routes'

import i18n from '../i18n/config'
import useData from '../hooks/useData'
import { AUTH } from '../utils/constants/redux.constants'
import { ProviderAntd } from '../utils/config-provider/Provider'

const App: FC = () => {
    const { authentication } = useData({ reducer: AUTH })
    return (
        <I18nextProvider i18n={i18n}>
            <ProviderAntd>
                {authentication ? <PrivateRoutes /> : <PublicRoutes />}
            </ProviderAntd>
        </I18nextProvider>
    )
}

export default App
