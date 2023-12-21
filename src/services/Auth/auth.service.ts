import api from '../../api'
import { LoginType } from './auth.types'
import { useMutation } from '../../hooks/api'
import { ApiResponseSuccess } from '../../utils/types/response.type'

type props = { onCompleted: ({ data, variables }: ApiResponseSuccess) => void }
//listado de ejecucion de endpoint,
export const loginService = ({ onCompleted }: props) => {
    const mutation = useMutation<LoginType>(
        { functionFetch: api.auth.login },
        { onCompleted }
    )

    return { ...mutation }
}
