import api from '../../api'
import { loginType } from './auth.types'
import { useMutation } from '../../hooks/api'

type props = { onCompleted: Function }

export const loginService = ({ onCompleted }: props) => {
    const mutation = useMutation<loginType>(
        { functionFetch: api.auth.login },
        { onCompleted }
    )

    return { ...mutation }
}
