import { useState } from 'react'

import { mutationType, state, func } from './api.types'
import { HttpStatus } from '../../utils/types/response.type'
import { errorNotification } from '../../utils/notifications/notification.action'

export const useMutation = <T>(
    { functionFetch }: func,
    { onCompleted, cancelError, onError }: mutationType
): [Function, state<T>] => {
    const [req, setReq] = useState<state<T>>({
        loading: false,
        error: false,
        data: undefined,
    })

    const execFunction = async (variables: T) => {
        setReq({ loading: true, error: false })
        try {
            const data = await functionFetch(variables)
            if (
                [HttpStatus.ACCEPTED, HttpStatus.OK, HttpStatus.CREATED].includes(
                    data.statusCode
                )
            ) {
                setReq({ data, loading: false })
                if (onCompleted) onCompleted({ data, variables })
                return data
            } else {
                setReq({ loading: false })
                if (onError) onError(data)
                return undefined
            }
        } catch (error: any) {
            if (!cancelError) errorNotification(error)
            setReq({ loading: false })
            if (onError) onError(error)
            return undefined
        }
    }

    return [execFunction, { ...req }]
}
