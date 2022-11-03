import { FC } from 'react'

import {
    LayoutPrivateProps,
    LayoutPrivateDefaultProps,
    LayoutPrivatePropsTypes,
} from './layoutPrivate.types'

export const LayoutPrivate: FC<LayoutPrivateProps> = () => {
    return <h1>Layout</h1>
}

LayoutPrivate.propTypes = LayoutPrivatePropsTypes

LayoutPrivate.defaultProps = LayoutPrivateDefaultProps

export default LayoutPrivate
