import { FC } from 'react'

import useIntl from '../../hooks/useIntl'

import './Loading.scss'

export const Loading: FC = () => {
  const { formatMessage } = useIntl()

  return (
    <div className='loading'>
      <div className='loading__content'>
        <div className='shape shape-1'></div>
        <div className='shape shape-2'></div>
        <div className='shape shape-3'></div>
        <div className='shape shape-4'></div>
      </div>
      <p>{formatMessage({ id: 'text.loading' })}...</p>
    </div>
  )
}
