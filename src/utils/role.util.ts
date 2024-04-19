import { ROLES } from './constants/roles.enum'

const isAdmin = (role: string): boolean =>
    role.toLowerCase() === ROLES.Admin.toLowerCase()

const isTherapist = (role: string): boolean =>
    role.toLowerCase() === ROLES.Therapist.toLowerCase()

const isUser = (role: string): boolean =>
    role.toLowerCase() === ROLES.User.toLowerCase()

export { isAdmin, isTherapist, isUser }
