import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import './sass/main.scss'
import store from './store'
import App from './Views/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
