import { Link } from 'react-router-dom'

import { GetIcon } from '../components/Icons/GetIcon'

import useIntl from './useIntl'
import { Menu } from '../services/Auth/auth.type'
import { prepareLabelUrl } from '../utils/types/string.util'
import { ROUTES_PRIVATE } from '../utils/constants/routes.constants'

export const useMenuItems = (data: Menu = []) => {
  const { lng } = useIntl()

  const filteredData =
    data.filter(({ actions }) => [true, 'partial'].includes(actions.read)) ?? []

  const sortedData = filteredData.sort((a, b) => a.en.localeCompare(b.en))

  return sortedData.map((item, key) => ({
    key,
    label: (
      <Link to={ROUTES_PRIVATE[prepareLabelUrl(item.en)]}>
        {lng ? item.en : item.es}
      </Link>
    ),
    icon: <GetIcon src={item.icon} />,
  }))
}
