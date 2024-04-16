import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import store from './store'
import App from './views/App'

import './sass/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)
