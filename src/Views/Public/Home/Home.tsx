import { FC } from 'react'
import { Link } from 'react-router-dom'

import useIntl from '../../../hooks/useIntl'
import { HomeDefaultProps, HomeProps, HomePropTypes } from './home.types'

export const Home: FC<HomeProps> = () => {
    const { formatMessage } = useIntl()
    return (
        <div>
            <Link to='login'>{formatMessage({ id: 'link.SignIn' })}</Link>
            <Link to='register'>{formatMessage({ id: 'link.SignUp' })}</Link>
        </div>
    )
}

Home.propTypes = HomePropTypes
Home.defaultProps = HomeDefaultProps

export default Home
