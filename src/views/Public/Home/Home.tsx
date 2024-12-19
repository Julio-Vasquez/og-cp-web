import { FC } from 'react'
import { Link } from 'react-router-dom'

import useIntl from '../../../hooks/useIntl'

import { ROUTES_PUBLIC as RP } from '../../../utils/constants/routes.constants'

export const Home: FC = () => {
  const { formatMessage } = useIntl()
  return (
    <div>
      <Link to={RP.login}>{formatMessage({ id: 'link.SignIn' })}</Link>
      <Link to={RP.register}>{formatMessage({ id: 'link.SignUp' })}</Link>
    </div>
  )
}

export default Home
