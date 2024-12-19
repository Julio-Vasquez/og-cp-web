import { useTranslation } from 'react-i18next'

type props = {
  id: string
  objVars?: Object
}

export const useIntl = () => {
  const { t, i18n } = useTranslation()

  const formatMessage = ({ id, objVars }: props): string =>
    objVars ? t(id, objVars) : t(id)

  return { formatMessage, lng: i18n.language as 'en' | 'es' }
}

export default useIntl
