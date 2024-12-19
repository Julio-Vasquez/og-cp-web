import api from '../../api'
import { useMutation } from '../../hooks/api'
import { LoginService, LoginType } from './auth.type'

export const loginService = ({ onCompleted }: LoginService) => {
  const mutation = useMutation<LoginType>(
    { functionFetch: api.auth.login },
    { onCompleted }
  )

  return { ...mutation }
}
