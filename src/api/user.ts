import { Methods } from '../utils/types/response.type'
import { DataUser } from '../utils/types/userData.type'

import { Mutation, Query } from './core'

const userMe = () => Query({ url: 'user/me' })
const userList = () => Query({ url: 'user/all-admin-users' })

const updateProfile = (body: DataUser) =>
    Mutation({
        method: Methods.put,
        body,
        url: 'user/edit-profile',
    })

const updateRole = (body: any) =>
    Mutation({
        method: Methods.patch,
        body,
        url: 'user/upgrade-or-degrade-user',
    })
export default { userMe, updateProfile, userList, updateRole }
