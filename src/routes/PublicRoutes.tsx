import { lazy, Suspense, FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'
import { ROUTES_PUBLIC as RP } from '../utils/constants/routes.constants'

const Login = lazy(() => import('../views/Public/Login'))
const SignUp = lazy(() => import('../views/Public/SignUp'))
const ForgotPassword = lazy(
    () => import('../views/Public/ForgotPassword/ForgotPassword')
)
const Error404 = lazy(() => import('./../components/Error/Error404'))
const SetPassword = lazy(() => import('../views/Public/SetPassword'))
const ActivateAccount = lazy(() => import('../views/Public/ActivateAccount'))

export const PublicRoutes: FC = () => {
    return (
        <Suspense fallback={<Loading message='loading' />}>
            <BrowserRouter>
                <Routes>
                    <Route path={RP.login} element={<Login />} />
                    <Route
                        path={RP.default}
                        element={<Navigate to={RP.login} />}
                    />{' '}
                    <Route path={RP.register} element={<SignUp />} />
                    <Route path={RP.error404} element={<Error404 />} />
                    <Route path={RP.setPassword} element={<SetPassword />} />
                    <Route path={RP.forgotPassword} element={<ForgotPassword />} />
                    <Route path={RP.activateAccount} element={<ActivateAccount />} />
                    <Route
                        path='*'
                        element={<Navigate replace to={RP.error404} />}
                    />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

/**/
