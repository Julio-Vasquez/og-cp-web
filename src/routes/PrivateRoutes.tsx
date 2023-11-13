import { lazy, Suspense, FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'
import { ROUTES_PRIVATE as RP } from '../utils/constants/routes.constants'

const Dashboard = lazy(() => import('../views/Private/Dashboard/Dashboard'))
const Statistics = lazy(() => import('../views/Private/Statistics/Statistics'))
const Ranking = lazy(() => import('../views/Private/Ranking/Ranking'))
const Error404 = lazy(() => import('./../components/Error/Error404'))
const LayoutPrivate = lazy(() => import('../components/LayoutPrivate'))

export const PrivateRoutes: FC = () => {
    return (
        <Suspense fallback={<Loading message='loading' />}>
            <BrowserRouter>
                <LayoutPrivate>
                    <Routes>
                        <Route path={RP.dashboard} element={<Dashboard />} />
                        <Route path={RP.default} element={<Dashboard />} />
                        <Route path={RP.ranking} element={<Ranking />} />
                        <Route path={RP.statistics} element={<Statistics />} />
                        <Route path={RP.error404} element={<Error404 />} />
                        <Route
                            path='*'
                            element={<Navigate replace to={RP.error404} />}
                        />
                    </Routes>
                </LayoutPrivate>
            </BrowserRouter>
        </Suspense>
    )
}
