import i18n from '../i18n/config'
import { Link } from 'react-router-dom'

import { ROLES } from '../utils/constants/roles.enum'
import { Actions, Menu } from '../services/Auth/auth.types'
import { GetInfoToken } from '../utils/storage/storage'
import { LANGS } from '../utils/constants/language.constant'
import { ROUTES_PRIVATE as RP } from '../utils/constants/routes.constants'

const getIcon = (path: string) => <img src={path} width={25} />

export const useMenuItems = (data: Menu) => {
    const token: any = GetInfoToken()
    const lang = i18n.language === LANGS.en.value

    return data?.map(({ en, es, icon }, key) => {
        if (token.role === ROLES.User || token.role === ROLES.Therapist) {
            if (key !== 2) {
                return {
                    key,
                    label: (
                        <Link to={RP[en.toLowerCase() as keyof typeof RP]}>
                            {lang ? en : es}
                        </Link>
                    ),
                    icon: getIcon(icon),
                }
            }
        } else
            return {
                key,
                label: (
                    <Link to={RP[en.toLowerCase() as keyof typeof RP]}>
                        {lang ? en : es}
                    </Link>
                ),
                icon: getIcon(icon),
            }
    })
}
