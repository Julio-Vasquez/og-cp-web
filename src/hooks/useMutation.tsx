import { useState } from 'react'

const useMutation = (
  axiosFunc,
  { cancelErrorNotification, onCompleted, onError } = {}
) => {
  const defData = undefined
  const [req, setReq] = useState({ loading: false, error: false })

  const execFunction = async variables => {
    setReq({ loading: true, error: false })
    try {
      const { data } = await axiosFunc(variables)
      setReq({ data, loading: false })
      if (onCompleted) onCompleted({ data, variables })
      return data
    } catch (error) {
      if (!cancelErrorNotification) errorNotification(error)
      setReq({ loading: false })
      if (onError) onError(error)
      return defData
    }
  }

  return [execFunction, { ...req }]
}
