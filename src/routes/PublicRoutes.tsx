import { lazy, Suspense, FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'

const Home = lazy(() => import('../Views/Public/Home/Home'))
const Login = lazy(() => import('../Views/Public/Login/Login'))
const Error404 = lazy(() => import('./../components/Error/Error404'))
const Register = lazy(() => import('../Views/Public/Register/Register'))

export const PublicRoutes: FC = () => {
    return (
        <Suspense fallback={<Loading message='loading' />}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/404' element={<Error404 />} />
                    <Route path='*' element={<Navigate replace to='/404' />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
