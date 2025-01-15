import { State } from './state.enum'
import { userState } from '../../views/Private/UsersList/usersList.type'

export const COLORS: Record<State, userState> = {
  Activo: 'success',
  Inactivo: 'error',
  Pendiente: 'processing',
}
