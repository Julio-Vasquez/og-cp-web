import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { FC } from 'react'

type props = { reducer: string }

export const useData: FC<props> = ({ reducer }) => {
  const data = useSelector((state: any) => state[reducer])

  return { ...data }
}

useData.propTypes = {
  reducer: PropTypes.string.isRequired,
}
