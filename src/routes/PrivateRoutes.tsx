import { lazy, Suspense, FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'
import { ROUTES_PRIVATE as RP } from '../utils/constants/routes.constants'

const Home = lazy(() => import('../views/Private/Home/Home'))
const Dashboard = lazy(() => import('../views/Private/Dashboard/Dashboard'))
const Error404 = lazy(() => import('./../components/Error/Error404'))
const LayoutPrivate = lazy(() => import('../components/LayoutPrivate'))

export const PrivateRoutes: FC = () => {
    return (
        <Suspense fallback={<Loading message='loading' />}>
            <LayoutPrivate>
                <BrowserRouter>
                    <Routes>
                        <Route path={RP.default} element={<Home />} />
                        <Route path={RP.dashboard} element={<Dashboard />} />
                        <Route path={RP.ranking} element={<Error404 />} />
                        <Route path={RP.statistics} element={<Error404 />} />
                        <Route path={RP.error404} element={<Error404 />} />
                        <Route path='/*' element={<Navigate replace to='/' />} />
                    </Routes>
                </BrowserRouter>
            </LayoutPrivate>
        </Suspense>
    )
}
