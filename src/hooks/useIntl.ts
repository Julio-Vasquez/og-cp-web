import { useTranslation } from 'react-i18next'

type Props = {
  id: string
  objVars?: Record<string, string>
}

export const useIntl = () => {
  const { t, i18n } = useTranslation()

  const formatMessage = ({ id, objVars }: Props): string =>
    objVars ? t(id, objVars) : t(id)

  return { formatMessage, lng: i18n.language as 'en' | 'es' }
}

export default useIntl
