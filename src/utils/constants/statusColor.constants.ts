import { userState } from '../../views/Private/UsersList/usersList.type'
import { State } from './state.enum'

export const colors: Record<State, userState> = {
    Activo: 'success',
    Inactivo: 'error',
    Pendiente: 'processing',
}
