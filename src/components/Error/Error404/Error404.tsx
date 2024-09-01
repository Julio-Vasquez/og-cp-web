import { FC } from 'react'
import { Link } from 'react-router-dom'

import {
    Error404Props,
    Error404PropTypes,
    Error404DefaultProps,
} from './error.types'

import moon from './../../../assets/img/404/moon.svg'
import logo from './../../../assets/img/404/logo.svg'
import earth from './../../../assets/img/404/earth.svg'
import error404 from './../../../assets/img/404/404.svg'
import rocket from './../../../assets/img/404/rocket.svg'
import astronaut from './../../../assets/img/404/astronaut.svg'

import useIntl from '../../../hooks/useIntl'
import { ROUTES_PUBLIC as RP } from '../../../utils/constants/routes.constants'

import './Error404.scss'

export const Error404: FC<Error404Props> = () => {
    const { formatMessage } = useIntl()
    return (
        <div className='bg-purple'>
            <div className='stars'>
                <div className='custom-navbar'>
                    <div className='brand-logo'>
                        <img src={logo} width='80px' alt='the logo' />
                    </div>
                </div>
                <div className='central-body'>
                    <img
                        className='image-404'
                        src={error404}
                        width='300px'
                        alt='text 404'
                    />
                    <Link to={RP.login} className='btn-go-home'>
                        {formatMessage({ id: 'link.home' })}
                    </Link>
                </div>
                <div className='object'>
                    <img
                        className='object_rocket'
                        src={rocket}
                        width='40px'
                        alt='cohete'
                    />
                    <div className='earth-moon'>
                        <img
                            className='object_earth'
                            src={earth}
                            width='100px'
                            alt='planeta tierra'
                        />
                        <img
                            className='object_moon'
                            src={moon}
                            width='80px'
                            alt='la luna'
                        />
                    </div>
                    <div className='box_astronaut'>
                        <img
                            className='object_astronaut'
                            src={astronaut}
                            width='140px'
                            alt='astronauta'
                        />
                    </div>
                </div>
                <div className='glowing_stars'>
                    <div className='star' />
                    <div className='star' />
                    <div className='star' />
                    <div className='star' />
                    <div className='star' />
                </div>
            </div>
        </div>
    )
}

Error404.propTypes = Error404PropTypes

Error404.defaultProps = Error404DefaultProps

export default Error404
