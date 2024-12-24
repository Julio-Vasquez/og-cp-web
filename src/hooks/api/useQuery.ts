import { useState, useEffect } from 'react'

import { createInitialState } from './api.util'
import { ResponseFetch } from '../../utils/api/api.util'
import { ResponseState, QueryType, Func } from './api.types'
import { HttpStatus } from '../../utils/types/response.type'
import { errorNotification } from '../../utils/notifications/notification.action'

const validCases = [HttpStatus.OK, HttpStatus.NO_CONTENT]

export const useQuery = <T>(
  { functionFetch }: Func<T>,
  { cancelFirstEffect, cancelError, onError, variables }: QueryType<T> = {}
) => {
  const [req, setReq] = useState<ResponseState<T>>(createInitialState)

  useEffect(() => {
    if (!cancelFirstEffect) getData()
  }, [cancelFirstEffect])

  const handleError = ({ message }: ResponseFetch<T>) => {
    setReq({ ...createInitialState<T>(), error: true })
    if (onError) onError({ message, status: 'error' })
    if (!cancelError) errorNotification(message || 'An error occurred')
  }

  const getData = async <N = unknown>(newVariables?: N) => {
    const fetchVariables = newVariables ?? variables

    setReq({ ...createInitialState<T>(), loading: true })

    try {
      const data = await functionFetch(fetchVariables)

      if (data.status === 'error' || !data.statusCode) {
        handleError(data)
        return
      }

      if (validCases.includes(data.statusCode)) {
        setReq({ data, loading: false, error: false })
        return data
      }

      setReq({ ...createInitialState<T>(), error: true })
    } catch (error: any) {
      handleError(error)
    }
  }

  return { ...req, refetch: getData }
}
