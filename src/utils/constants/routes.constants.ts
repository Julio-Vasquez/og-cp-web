export const ROUTES_PUBLIC = {
    activateAccount: '/activate-account/:token',
    default: '/',
    error404: '/404',
    forgotPassword: '/forgot-password',
    login: '/login',
    register: '/register',
    setPassword: '/set-password/:token',
}

export const ROUTES_PRIVATE = {
    dashboard: '/dashboard',
    default: '/',
    error404: '/404',
    profile: '/profile',
    ranking: '/ranking',
    statistics: '/statistics',
    users: '/users',
}
