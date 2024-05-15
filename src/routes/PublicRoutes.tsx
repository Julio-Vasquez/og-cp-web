import { lazy, Suspense, FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'
import { ROUTES_PUBLIC as RP } from '../utils/constants/routes.constants'

const Login = lazy(() => import('../views/Public/Login'))
const SignUp = lazy(() => import('../views/Public/SignUp'))
const Error404 = lazy(() => import('./../components/Error/Error404'))
const SetPassword = lazy(() => import('../views/Public/SetPassword'))
const ForgotPassword = lazy(() => import('../views/Public/ForgotPassword'))
const ActivateAccount = lazy(() => import('../views/Public/ActivateAccount'))

export const PublicRoutes: FC = () => {
    return (
        <Suspense fallback={<Loading message='loading' />}>
            <BrowserRouter>
                <Routes>
                    <Route path={RP.login} element={<Login />} />
                    <Route path={RP.default} element={<Login />} />
                    <Route path={RP.register} element={<SignUp />} />
                    <Route path={RP.setPassword} element={<SetPassword />} />
                    <Route path={RP.forgotPassword} element={<ForgotPassword />} />
                    <Route path={RP.activateAccount} element={<ActivateAccount />} />
                    <Route path={RP.error404} element={<Error404 />} />
                    <Route path='*' element={<Navigate replace to={RP.login} />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

/**/
