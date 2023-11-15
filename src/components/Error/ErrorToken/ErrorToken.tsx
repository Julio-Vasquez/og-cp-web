import { Link } from 'react-router-dom'

import useIntl from '../../../hooks/useIntl'

import './ErrorToken.scss'

export const ErrorToken = () => {
    const { formatMessage } = useIntl()

    return (
        <div id='not-found'>
            <div className='not-found'>
                <div className='not-found__404'>
                    <h1>404</h1>
                    <h2>{formatMessage({ id: 'subTitle.requestInvalid' })}</h2>
                </div>
                <Link to='/'>{formatMessage({ id: 'link.home' })}</Link>
            </div>
        </div>
    )
}
