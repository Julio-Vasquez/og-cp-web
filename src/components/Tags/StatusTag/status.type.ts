import propTypes, { InferProps } from 'prop-types'

export const StatusTagPropTypes = {
  status: propTypes.oneOf(['Activo', 'Inactivo', 'Pendiente']).isRequired,
}

export type StatusTagProps = InferProps<typeof StatusTagPropTypes>

export type StatusType = {
  key: string
  color: string
  text: string
}
