import { Button } from 'antd'
import { useParams } from 'react-router-dom'

import Error from '../../../components/Token/Error'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useMutation } from '../../../hooks/api'
import { ValidateToken } from '../../../utils/storage/storage'

const ActivateAccount = () => {
    const { token } = useParams()
    const { formatMessage } = useIntl()
    const validateToken = ValidateToken(token ? token : '')

    const onCompleted = (data: any) => {
        console.log('completed', data)
    }

    const onError = (data: any) => {
        console.log('error', data)
    }

    const [mutation] = useMutation(
        { functionFetch: api.auth.activateAccount },
        { onCompleted, onError, cancelError: false }
    )

    if (!validateToken) return <Error />

    const handleClick = () => mutation({ token, activate: true })

    return (
        <Button onClick={handleClick}>
            {formatMessage({ id: 'button.activeAccount' })}
        </Button>
    )
}

export default ActivateAccount
