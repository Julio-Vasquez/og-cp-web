import propTypes from 'prop-types'

export const HeaderPrivatePropsTypes = {
    children: propTypes.element,
    collapsed: propTypes.bool.isRequired,
    setCollapsed: propTypes.func.isRequired,
}

export const HeaderPrivateDefaultProps = {
    collapsed: true,
}

export type HeaderPrivateProps = Omit<
    propTypes.InferProps<typeof HeaderPrivatePropsTypes>,
    'setCollapsed'
> & {
    setCollapsed: (value: boolean | ((prev: boolean) => boolean)) => void
}
