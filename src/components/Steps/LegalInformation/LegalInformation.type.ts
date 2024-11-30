import propTypes from 'prop-types'

export const ContactDataPropTypes = {
    typeDocuments: propTypes.arrayOf(
        propTypes.shape({
            abbr: propTypes.string.isRequired,
            publicKey: propTypes.string.isRequired,
            typeDocument: propTypes.string.isRequired,
        })
    ).isRequired,
    genders: propTypes.array.isRequired,
    loading: propTypes.bool.isRequired,
}
export const ContactDataDefaultProps = {
    typeDocuments: [],
    genders: [],
}

export type ContactDataProps = propTypes.InferProps<typeof ContactDataPropTypes>

export type T = {
    abbr: string
    publicKey: string
    typeDocument: string
}
