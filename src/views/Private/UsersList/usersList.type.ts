interface User {
    username: string
    mail: string
    publicKey: string
    state: string
}

interface Role {
    publicKey: string
    role: string
}

export interface Person {
    publicKey: string
    name: string
    middleName: string
    lastNameOne: string
    lastNameTwo: string
    birthDate: string
}

export interface UserList {
    user: User
    role: Role
    person: Person
}
