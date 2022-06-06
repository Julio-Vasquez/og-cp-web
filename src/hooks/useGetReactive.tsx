import { useState, useEffect } from 'react'

export const useGetReactive = (
  axiosFunc,
  variables,
  { onCompleted, onError, cancelErrorNotification, cancelFirstEffect } = {}
) => {
  const [req, setReq] = useState({ loading: false, error: false })

  useEffect(() => {
    if (!cancelFirstEffect) getData()
  }, [cancelFirstEffect])

  const getData = async newVariables => {
    setReq({ loading: true, error: false })
    try {
      const { data } = await axiosFunc(newVariables || variables)
      setReq({ loading: false })
      onCompleted(data)
    } catch (error) {
      if (!cancelErrorNotification) errorNotification(error)
      setReq({ loading: false, error })
      if (onError) onError(error)
    }
  }

  return { ...req, refetch: getData }
}
