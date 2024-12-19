import { FC } from 'react'

import { type SecureProps } from './secure.type'
import secure from '../../../assets/svg/set-password/secure.svg'

export const Secure: FC<SecureProps> = ({ className, size }) => (
  <img src={secure} alt='secure' className={className} height={size} width={size} />
)

export default Secure
