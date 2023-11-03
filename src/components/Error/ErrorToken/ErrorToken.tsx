import { Link } from 'react-router-dom'

import { formTranslate } from '../../../utils/functions/translation.function'

import './ErrorToken.scss'

export const ErrorToken = () => {
    return (
        <div id='notFound'>
            <div className='notFound'>
                <div className='notFound-404'>
                    <h1>404</h1>
                    <h2>{formTranslate({ id: 'subtitle.requestSend' })}</h2>
                </div>
                <Link to='/'>{formTranslate({ id: 'link.start' })}</Link>
            </div>
        </div>
    )
}
