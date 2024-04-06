import { Methods } from '../utils/types/response.type'
import { DataUser } from '../utils/types/userData.type'

import { Mutation, Query } from './core'

const userMe = () => Query({ url: 'user/me' })

const updateProfile = (body: DataUser) =>
    Mutation({
        method: Methods.put,
        body,
        url: 'user/edit-profile',
    })

export default { userMe, updateProfile }
