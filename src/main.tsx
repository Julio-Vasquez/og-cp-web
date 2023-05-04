import React from 'react'
import store from './store'
import App from './Views/App'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import './sass/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
