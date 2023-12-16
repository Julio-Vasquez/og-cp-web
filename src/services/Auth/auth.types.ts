type Actions = {
    create: boolean
    read: boolean
    update: boolean
    delete: boolean
}

type Menu = Record<string, Actions> | null

type LoginType = {
    username: string
    password: string
}

type LoginAction = {
    payload: LoginType
    type: string
}

type LoginSuccessType = {
    payload: {
        token: string
        message: string
        success: boolean
        menu: Menu
    }
    type: string
}

type LoginFailedType = {
    payload: {
        error: boolean
        message: string
    }
    type: string
}

type State = {
    authentication: boolean | Promise<boolean>
    error: boolean
    loading: boolean
    message: string
    success: boolean
    token: string
    user: string
    menu: Menu
}

export type { LoginAction, LoginSuccessType, LoginFailedType, State, LoginType }
