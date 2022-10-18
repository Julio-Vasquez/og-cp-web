import { useState, useEffect } from 'react'
import { errorNotification } from '../../utils/notification.action'

import { state, queryType, func } from './types'

export const useGet = <T>(
    { functionFetch }: func,
    { cancelFirstEffect, cancelError, onError, variables }: queryType<T>
) => {
    const [req, setReq] = useState<state>({
        data: [],
        loading: false,
        error: false,
    })

    useEffect(() => {
        if (!cancelFirstEffect) getData()
    }, [cancelFirstEffect])

    const getData = async (newVariables?: T) => {
        const fetchVariables = !newVariables ? variables : newVariables

        setReq({ data: [], loading: true, error: false })
        try {
            const data = await functionFetch(fetchVariables)
            setReq({ data, loading: false })
        } catch (error: any) {
            if (!cancelError) errorNotification(error)
            setReq({ data: [], loading: false, error: true })
            if (onError) onError(error)
        }
    }

    return { ...req, refetch: getData }
}
