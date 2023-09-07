import { PropsWithChildren } from 'react'

import { CacheContext } from '../context/cacheContext'
import CacheClient from '../store/cacheClient'

export function CacheContextProvider({ children }: PropsWithChildren) {
  const client = new CacheClient()
  return <CacheContext.Provider value={client}>{children} </CacheContext.Provider>
}
