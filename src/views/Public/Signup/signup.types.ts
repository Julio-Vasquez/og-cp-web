import propTypes from 'prop-types'
import { ResponseFetch } from '../../../utils/api/api.util'

export const SignUpPropTypes = {
    loading: propTypes.bool.isRequired,
    setLoading: propTypes.func.isRequired,
}

export const SignUpDefaultProps = {
    loading: false,
    setLoading: () => {},
}

export type SignUpProps = propTypes.InferProps<typeof SignUpPropTypes>

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

export type availableDataTypes = ResponseFetch<response>
