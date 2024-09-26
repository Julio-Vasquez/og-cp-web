import { lazy, Suspense, FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'
import { ROUTES_PRIVATE as RP } from '../utils/constants/routes.constants'

const Profile = lazy(() => import('../views/Private/Profile'))
const UsersList = lazy(() => import('../views/Private/UsersList'))
const Error404 = lazy(() => import('./../components/Error/Error404'))
const Ranking = lazy(() => import('../views/Private/Ranking/Ranking'))
const LayoutPrivate = lazy(() => import('../components/LayoutPrivate'))
const Dashboard = lazy(() => import('../views/Private/Dashboard/Dashboard'))
const ActivityDetail = lazy(() => import('../views/Private/ActivityDetail'))
const Statistics = lazy(() => import('../views/Private/Statistics/Statistics'))

export const PrivateRoutes: FC = () => {
    return (
        <Suspense fallback={<Loading message='loading...' />}>
            <BrowserRouter>
                <LayoutPrivate>
                    <Routes>
                        <Route
                            path={RP.activityDetail}
                            element={<ActivityDetail />}
                        />
                        <Route path={RP.profile} element={<Profile />} />
                        <Route path={RP.users} element={<UsersList />} />
                        <Route path={RP.ranking} element={<Ranking />} />
                        <Route
                            path='/*'
                            element={<Navigate replace to={RP.error404} />}
                        />
                        <Route path={RP.error404} element={<Error404 />} />
                        <Route path={RP.default} element={<Dashboard />} />
                        <Route path={RP.dashboard} element={<Dashboard />} />
                        <Route path={RP.statistics} element={<Statistics />} />
                    </Routes>
                </LayoutPrivate>
            </BrowserRouter>
        </Suspense>
    )
}
