import { useState } from 'react'

import { createInitialState } from './api.util'
import { ResponseFetch } from '../../utils/api/api.util'
import { Status } from '../../utils/constants/status.enum'
import { HttpStatus } from '../../utils/types/response.type'
import { MutationType, ResponseState, Func, ExecFunction } from './api.types'
import { errorNotification } from '../../utils/notifications/notification.action'

const validCases = [HttpStatus.ACCEPTED, HttpStatus.OK, HttpStatus.CREATED]

export const useMutation = <T>(
  { functionFetch }: Func<T>,
  { onCompleted, cancelError, onError }: MutationType
): [ExecFunction, ResponseState<T>] => {
  const [req, setReq] = useState<ResponseState<T>>(createInitialState)

  const handleError = ({ message }: ResponseFetch<T>) => {
    setReq({ ...createInitialState<T>(), error: true })
    if (onError) onError({ message, status: 'error' })
    if (!cancelError) errorNotification(message || 'An error occurred')
  }

  const execFunction = async <N>(variables: N) => {
    setReq({ loading: true, error: false, data: {} as ResponseFetch<T> })

    try {
      const data = await functionFetch(variables)

      if (validCases.includes(data.statusCode) && data.status === Status.success) {
        setReq({ data, loading: false })
        if (onCompleted) onCompleted<T, N>({ data, variables })
        return data
      } else {
        handleError(data)
        return undefined
      }
    } catch (error: any) {
      handleError(error)
      return undefined
    }
  }

  return [execFunction, { ...req }]
}
