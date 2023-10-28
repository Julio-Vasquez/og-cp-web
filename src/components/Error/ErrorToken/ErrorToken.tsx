import useIntl from '../../../hooks/useIntl'

import './ErrorToken.scss'

export const ErrorToken = () => {
    const { formatMessage } = useIntl()
    return (
        <div id='notFound'>
            <div className='notFound'>
                <div className='notFound-404'>
                    <h1>404</h1>
                    <h2>{formatMessage({ id: 'subtitle.requestSend' })}</h2>
                </div>
                <a href='/'>{formatMessage({ id: 'link.start' })}</a>
            </div>
        </div>
    )
}
