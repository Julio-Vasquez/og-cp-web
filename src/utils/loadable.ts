import { lazy, Suspense } from 'react'

import LoadingPage from '../../views/LoadingPage/LoadingPage'

const loadable = importFn => {
  const LazyComponent = lazy(importFn)

  return props => (
    <Suspense fallback={<LoadingPage />}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default loadable
