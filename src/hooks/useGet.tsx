import { useState, useEffect } from 'react'

export const useGet = (
  axiosFunc,
  variables,
  { isObj, cancelFirstEffect, cancelErrorNotification, onError } = {}
) => {
  const defData = isObj ? {} : []
  const [req, setReq] = useState({
    data: defData,
    loading: false,
    error: false,
  })

  useEffect(() => {
    if (!cancelFirstEffect) getData()
  }, [cancelFirstEffect])

  const getData = async newVariables => {
    const axiosFunctionVariables =
      !newVariables || !!newVariables?._reactName ? variables : newVariables

    setReq({ data: defData, loading: true, error: false })
    try {
      const { data } = await axiosFunc(axiosFunctionVariables)
      setReq({ data, loading: false })
    } catch (error) {
      console.log('error', error)
      if (!cancelErrorNotification) errorNotification(error)
      setReq({ data: defData, loading: false, error })
      if (onError) onError(error)
    }
  }

  return { ...req, refetch: getData }
}
