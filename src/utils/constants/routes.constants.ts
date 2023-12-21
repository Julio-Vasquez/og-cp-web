export const ROUTES_PUBLIC = {
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot-password',
    setPassword: '/set-password/:token',
    activateAccount: '/activate-account/:token',
    error404: '/404',
    default: '/',
}
export const ROUTES_PRIVATE = {
    error404: '/404',
    default: '/',
    dashboard: '/dashboard',
    statistics: '/statistics',
    ranking: '/ranking',
}
