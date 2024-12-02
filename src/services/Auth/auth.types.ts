import { ApiResponseSuccess } from '../../utils/types/response.type'

export type Actions = {
    create: boolean | 'partial'
    read: boolean | 'partial'
    update: boolean | 'partial'
    delete: boolean | 'partial'
}

export type Menu = { actions: Actions; en: string; es: string; icon: string }[]

export type Payload = {
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
    device: 'Desktop' | 'Mobile'
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

type LoginService = {
    onCompleted: ({ data, variables }: ApiResponseSuccess) => void
}

export type {
    LoginAction,
    LoginSuccessType,
    LoginFailedType,
    State,
    LoginType,
    LoginService,
}
