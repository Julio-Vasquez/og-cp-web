import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'

const Error404 = lazy(() => import('./../components/Error/Error404'))
const Login = lazy(() => import('../views/Public/Login'))

export const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading message='Cargando' />}>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/404' element={<Error404 />} />
                    <Route path='*' element={<Navigate replace to='/404' />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
