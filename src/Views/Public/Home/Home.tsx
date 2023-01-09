import { FC } from 'react'
import { Link } from 'react-router-dom'
import { HomeDefaultProps, HomeProps, HomePropTypes } from './home.types'

export const Home: FC<HomeProps> = () => {
    return (
        <div>
            Home
            <Link to='login'>Login</Link>
            <Link to='register'>register</Link>
            <Link to='404'>404</Link>
        </div>
    )
}

Home.propTypes = HomePropTypes
Home.defaultProps = HomeDefaultProps

export default Home
