import { query } from '../../api/core/api.types'
import { URL_API } from '../constants/environment.constant'

export const getHeader = (token: string | null) => {
    const exists = token !== null && { Authorization: `Bearer ${token}` }
    return {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'https://javascript.info',
            ...exists,
        },
    }
}

export const getUrl = ({ url, params }: query): URL => {
    console.log('url', URL_API)
    const _url = new URL(`${URL_API}/${url}`)
    if (params)
        Object.keys(params).forEach(key =>
            _url.searchParams.append(key, params[key])
        )
    return _url
}

export const validateResponse = (status: string) => {}

export interface IResponse {
    error?: boolean
    message: string
    payload: [] | {} | any
    statusCode?: number
    success?: boolean
}

export interface ResponseFetch<T> {
    error?: boolean
    message: string
    payload: T | [] | {} | any
    statusCode?: number
    success?: boolean
}
