import { put, takeLatest, all } from 'redux-saga/effects'

import api from './../../common/api'
import { loginAction } from './auth.types'
import { IResponse } from '../../utils/api.util'
import { clearData, SaveItem } from '../../common/storage'
import { login, loginSuccess, loginFailed, logout } from './auth.slice'

function* fetchLogin({ payload }: loginAction) {
    try {
        const res: IResponse = yield api.auth.login({ body: payload })

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
    } catch (e: any) {
        console.log(e)
        yield put(loginFailed({ error: true, message: e.message }))
    }
}

const handleLogout = () => clearData()

function* ActionWatcher() {
    yield takeLatest(login, fetchLogin)
    yield takeLatest(logout, handleLogout)
}

export default function* AuthSaga() {
    yield all([ActionWatcher()])
}
