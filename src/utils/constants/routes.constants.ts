export const ROUTES_PUBLIC = {
    activateAccount: '/activate-account/:token',
    default: '/',
    error404: '/404',
    forgotPassword: '/forgot-password',
    login: '/login',
    register: '/register',
    setPassword: '/set-password/:token',
}

enum Routes {
    dashboard = '/dashboard',
    default = '/',
    error404 = '/404',
    profile = '/profile',
    ranking = '/ranking',
    statistics = '/statistics',
    activityDetail = '/statistics/detail/:id',
    userList = '/user-list',
    players = '/players',
}

type RoutesPrivate = Record<string, Routes>

export const ROUTES_PRIVATE: RoutesPrivate = {
    dashboard: Routes.dashboard,
    default: Routes.default,
    error404: Routes.error404,
    profile: Routes.profile,
    ranking: Routes.ranking,
    statistics: Routes.statistics,
    activityDetail: Routes.activityDetail,
    userList: Routes.userList,
    players: Routes.players,
}
