import { ROLES } from './constants/roles.enum'

const isAdmin = (role: string): boolean =>
  role.toLowerCase() === ROLES.Admin.toLowerCase()

const isAnalyst = (role: string): boolean =>
  role.toLowerCase() === ROLES.Analyst.toLowerCase()

const isUser = (role: string): boolean =>
  role.toLowerCase() === ROLES.User.toLowerCase()

const isNotAdmin = (role: string): boolean => {
  return isAnalyst(role) || isUser(role)
}

export { isAdmin, isAnalyst, isUser, isNotAdmin }
