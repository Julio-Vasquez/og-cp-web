import { lazy, Suspense, FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'
import { initialState } from '../context/Children/reducer'
import { ChildrenProvider } from '../context/Children/ChildrenProvider'
import { ROUTES_PRIVATE as RP } from '../utils/constants/routes.constants'

const Profile = lazy(() => import('../views/Private/Profile'))
const UsersList = lazy(() => import('../views/Private/UsersList'))
const Error404 = lazy(() => import('./../components/Error/Error404'))
const Ranking = lazy(() => import('../views/Private/Ranking/Ranking'))
const LayoutPrivate = lazy(() => import('../components/LayoutPrivate'))
const Dashboard = lazy(() => import('../views/Private/Dashboard/Dashboard'))
const ActivitiesList = lazy(() => import('../views/Private/ActivitiesList'))
const Statistics = lazy(() => import('../views/Private/Statistics/Statistics'))
const Players = lazy(() => import('../views/Private/Players/Players'))

export const PrivateRoutes: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ChildrenProvider value={initialState}>
          <LayoutPrivate>
            <Routes>
              <Route path={RP.activityDetail} element={<ActivitiesList />} />
              <Route path={RP.profile} element={<Profile />} />
              <Route path={RP.userList} element={<UsersList />} />
              <Route path={RP.ranking} element={<Ranking />} />
              <Route path={RP.default} element={<Dashboard />} />
              <Route path={RP.dashboard} element={<Dashboard />} />
              <Route path={RP.statistics} element={<Statistics />} />
              <Route path={RP.players} element={<Players />} />

              <Route path='/*' element={<Navigate replace to={RP.default} />} />
              <Route path={RP.error404} element={<Error404 />} />
            </Routes>
          </LayoutPrivate>
        </ChildrenProvider>
      </BrowserRouter>
    </Suspense>
  )
}
