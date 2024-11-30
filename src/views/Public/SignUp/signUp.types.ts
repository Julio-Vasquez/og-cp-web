type publicKey = {
    publicKey: string
}

export type SignUpRoles = {
    role: string
} & publicKey

export type SignUpGenders = {
    gender: string
} & publicKey

export type SignUpTypeDocument = {
    abbr: string
    typeDocument: string
} & publicKey

export type response = {
    roles: SignUpRoles[]
    genders: SignUpGenders[]
    typeDocuments: SignUpTypeDocument[]
}

export type AvailableDataTypes = response
