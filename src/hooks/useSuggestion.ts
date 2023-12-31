import { useState } from 'react'

import { useCacheContext } from './useCacheContext'
import { api } from '../apis'
import { GetSickResponse } from '../apis/suggestion'

function useSuggestion(queryKey: string) {
  const [data, setData] = useState<GetSickResponse>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const cacheClient = useCacheContext()

  const fetchData = async (searchTerm: string) => {
    if (!searchTerm) {
      setData([])
      return
    }
    const cacheData = cacheClient.get(searchTerm)
    if (cacheData) {
      setData(cacheData)
      return
    }
    setIsLoading(true)
    try {
      const res = await api.suggestion.get(searchTerm)
      setData(res.data)
      cacheClient.set(searchTerm, res.data)
    } catch (e) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data,
    isLoading,
    isError,
    fetchData,
  }
}

export default useSuggestion
