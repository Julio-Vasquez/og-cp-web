import { query } from '../common/api/core/api.types'
import { URL_API } from '../common/constants/environment.constant'
import { RESPONSE_API } from '../common/constants/response.constant'

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
    const _url = new URL(`${URL_API}/${url}`)
    if (params)
        Object.keys(params).forEach(key =>
            _url.searchParams.append(key, params[key])
        )
    return _url
}

export enum Methods {
    post = 'POST',
    get = 'GET',
    delete = 'DELETE',
    put = 'PUT',
}

export const validateResponse = (status: string) => {}

export interface IResponse {
    error?: boolean
    success?: boolean
    message: string
    payload: [] | {} | any
    statusCode?: number
}
