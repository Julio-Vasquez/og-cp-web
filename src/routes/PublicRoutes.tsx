import { lazy, Suspense, FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'
import { ROUTES_PUBLIC as RP } from '../utils/constants/routes.constants'

const Home = lazy(() => import('../views/Public/Home'))
const Login = lazy(() => import('../views/Public/Login'))
const SignUp = lazy(() => import('../views/Public/SignUp/SignUp'))
const ForgotPassword = lazy(
    () => import('../views/Public/ForgotPassword/ForgotPassword')
)

const Error404 = lazy(() => import('./../components/Error/Error404'))

export const PublicRoutes: FC = () => {
    return (
        <Suspense fallback={<Loading message='loading' />}>
            <BrowserRouter>
                <Routes>
                    <Route path={RP.default} element={<Login />} />
                    <Route path={RP.register} element={<SignUp />} />
                    <Route path={RP.forgotPassword} element={<ForgotPassword />} />
                    <Route path={RP.error404} element={<Error404 />} />
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
