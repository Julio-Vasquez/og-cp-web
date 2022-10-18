type obj = { action: any; token: string }

type token = Omit<obj, 'action'>

export const getHeader = ({ action, token }: obj) => ({
    action,
    headers: {
        Authorization: `Bearer ${token}`,
    },
})

export const getSoloAuthorization = ({ token }: token) => ({
    headers: {
        Authorization: `Bearer ${token}`,
    },
})
