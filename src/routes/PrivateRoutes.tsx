import { lazy, Suspense, FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'

import { LayoutPrivate } from '../components/LayoutPrivate/LayoutPrivate'

const Home = lazy(() => import('../Views/Private/Home'))
const Error404 = lazy(() => import('./../components/Error/Error404'))

export const PrivateRoutes: FC = () => {
    return (
        <Suspense fallback={<Loading message='s' />}>
            <BrowserRouter>
                <LayoutPrivate>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/404' element={<Error404 />} />
                        <Route path='*' element={<Navigate replace to='/404' />} />
                    </Routes>
                </LayoutPrivate>
            </BrowserRouter>
        </Suspense>
    )
}
