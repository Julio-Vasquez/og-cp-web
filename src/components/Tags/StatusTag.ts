import { Tag } from 'antd'
import { string } from 'prop-types'

//import { ORDER_STATUS } from '../../../constants/orderConstants'

const OrderTag = ({ status }) => {
  const statusFound = ORDER_STATUS[status]

  return statusFound ? (
    <Tag color={statusFound.color}>{statusFound.text}</Tag>
  ) : (
    <Tag color='red'>No Defined</Tag>
  )
}

OrderTag.propTypes = {
  status: string.isRequired,
}

export default OrderTag
