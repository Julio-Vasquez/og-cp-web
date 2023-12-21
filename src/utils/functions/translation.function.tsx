import i18next from 'i18next'

type props = {
    id: string
    objVars?: Object
}

export const formTranslate = ({ id, objVars }: props): string =>
    objVars ? i18next.t(id, objVars) : i18next.t(id)
