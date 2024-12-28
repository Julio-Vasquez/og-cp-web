import i18next from 'i18next'

type Props = {
  id: string
  objVars?: Record<string | number, string | number>
}

export const formatMessage = ({ id, objVars }: Props): string =>
  objVars ? i18next.t(id, objVars) : i18next.t(id)
