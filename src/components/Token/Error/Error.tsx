import { Link } from 'react-router-dom'

import { ROUTES_PUBLIC } from '../../../utils/constants/routes.constants'

import './Error.scss'
import useIntl from '../../../hooks/useIntl'
import { forgotPassword } from '../../../views/Public/ForgotPassword/forgotPassword.type'

export const Error = () => {
    const { formatMessage } = useIntl()

    return (
        <div id='not-Found'>
            <div className='not-Found'>
                <div className='not-Found__404'>
                    <h1>404</h1>
                    <h2>{formatMessage({ id: 'subTitle.requestSend' })}</h2>
                </div>
                <Link to={ROUTES_PUBLIC.default}>
                    {formatMessage({ id: 'link.start' })}
                </Link>
            </div>
        </div>
    )
}

export default Error
