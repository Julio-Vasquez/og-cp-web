import { put, takeLatest, all } from 'redux-saga/effects'

import api from '../../api'
import { loginAction } from './auth.types'
import { IResponse } from '../../utils/api/api.util'
import { ClearData, SaveItem } from '../../utils/storage'
import { login, loginSuccess, loginFailed, logout } from './auth.slice'
import { errorMessage } from '../../utils/notifications/message.action'

function* fetchLogin({ payload }: loginAction) {
    try {
        const res: IResponse = yield api.auth.login(payload)
        console.log(res)
        if (res && !res.error && res?.payload) {
            yield put(
                loginSuccess({
                    token: res?.payload.token,
                    message: res?.message,
                    success: true,
                })
            )
            SaveItem({ newItem: res?.payload.token })
        } else yield put(loginFailed({ error: true, message: res.message }))
        errorMessage(res.message)
    } catch (e: any) {
        yield put(loginFailed({ error: true, message: e.message }))
    }
}

const handleLogout = () => ClearData()

function* ActionWatcher() {
    yield takeLatest(login, fetchLogin)
    yield takeLatest(logout, handleLogout)
}

export default function* AuthSaga() {
    yield all([ActionWatcher()])
}
