import { lazy, Suspense, FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'

const Error404 = lazy(() => import('./../components/Error/Error404'))

export const PrivateRoutes: FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading message='loading' />}>
                <Routes>
                    <Route path='/' element={<Error404 />} />

                    <Route path='/404' element={<Error404 />} />
                    <Route path='*' element={<Navigate replace to='/404' />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
