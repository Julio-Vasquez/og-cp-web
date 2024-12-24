import { ResponseFetch } from '../../utils/api/api.util'
import { ResponseState } from './api.types'

export const createInitialState = <T>(): ResponseState<T> => ({
  data: {} as ResponseFetch<T>,
  loading: false,
  error: false,
})
