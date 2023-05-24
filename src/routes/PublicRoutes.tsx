import { lazy, Suspense, FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'
const Home = lazy(() => import('../Views/Public/Home'))
const Login = lazy(() => import('../Views/Public/Login'))
const Signup = lazy(() => import('../Views/Public/SignUp/SignUp'))
const ForgotPassword = lazy(
    () => import('../Views/Public/ForgotPassword/ForgotPassword')
)
const Error404 = lazy(() => import('./../components/Error/Error404'))

export const PublicRoutes: FC = () => {
    return (
        <Suspense fallback={<Loading message='loading' />}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Signup />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/404' element={<Error404 />} />
                    <Route path='*' element={<Navigate replace to='/404' />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
