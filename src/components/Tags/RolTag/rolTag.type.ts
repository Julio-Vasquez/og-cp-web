import propTypes from 'prop-types'

import { Rol } from '../../../utils/types/roles.type'

const Roles: Rol[] = ['Administrador', 'Terapeuta', 'Usuario']

export const RolPropTypes = {
  value: propTypes.oneOf(Roles),
  id: propTypes.string,
}

export const RolDefaultPropTypes = {
  value: Roles[2],
  id: '1',
}

export type RolProps = propTypes.InferProps<typeof RolPropTypes>
