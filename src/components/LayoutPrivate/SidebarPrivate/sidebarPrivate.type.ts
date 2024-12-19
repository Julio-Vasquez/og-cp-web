import propTypes from 'prop-types'

export const SidebarPrivatePropsTypes = {
  collapsed: propTypes.bool.isRequired,
}

export const SidebarPrivatePropsDefault = {}
export type SidebarPrivateProps = propTypes.InferProps<
  typeof SidebarPrivatePropsTypes
>
