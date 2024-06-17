export interface USER {
    username: string
    mail: string
    publicKey: string
    state: string
}

interface ROLE {
    publicKey: string
    role: string
}

export interface PERSON {
    publicKey: string
    name: string
    middleName: string
    lastNameOne: string
    lastNameTwo: string
    birthDate: string
}

export interface USER_LIST {
    user: USER
    role: ROLE
    person?: PERSON
}

export type UserState = 'success' | 'error' | 'processing'
