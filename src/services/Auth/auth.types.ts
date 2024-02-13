type Actions = {
    create: boolean
    read: boolean
    update: boolean
    delete: boolean
}

type Menu = Record<string, Actions> | null

type Payload = {
    token: string
    message: string
    success: boolean
    menu: Menu
    fullName: string
    username: string
}

type LoginType = {
    username: string
    password: string
}

type LoginAction = {
    payload: LoginType
    type: string
}

type LoginSuccessType = {
    payload: Payload
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
} & Payload

export type { LoginAction, LoginSuccessType, LoginFailedType, State, LoginType }
