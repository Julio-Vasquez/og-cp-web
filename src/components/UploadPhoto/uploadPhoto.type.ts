import propTypes from 'prop-types'

export const UploadPhotosPropTypes = {
    getBase64: propTypes.func.isRequired,
    beforeUpload: propTypes.func.isRequired,
}

export type UploadPhotosProps = propTypes.InferProps<typeof UploadPhotosPropTypes>
