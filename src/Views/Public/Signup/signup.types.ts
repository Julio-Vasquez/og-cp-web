import propTypes from 'prop-types'
import { ResponseFetch } from './../../../utils/api/api.util'

export const signupPropTypes = {}

export const signupDefaultProps = {}

export type signupProps = propTypes.InferProps<typeof signupPropTypes>

type publicKey = {
    publicKey: string
}

export type signUpRoles = {
    role: string
} & publicKey

export type signUpGenders = {
    gender: string
} & publicKey

export type signUpTypeDocument = {
    abbr: string
    typeDocument: string
} & publicKey

export type response = {
    roles: signUpRoles[]
    genders: signUpGenders[]
    typeDocuments: signUpTypeDocument[]
}

export type availableDataTypes = ResponseFetch<response>
