import { useState } from 'react'

import { api } from '../apis'
import { GetSickResponse } from '../apis/sick'

function useSuggestion() {
  const [data, setData] = useState<GetSickResponse>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchData = async (searchTerm: string) => {
    if (!searchTerm) {
      setData([])
      return
    }
    setIsLoading(true)
    try {
      const res = await api.sick.get(searchTerm)
      setData(res.data)
    } catch (e) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading, isError, fetchData }
}

export default useSuggestion
