import { PropsWithChildren } from 'react'

import { CacheContext } from '../context/cacheContext'
import CacheClient from '../store/cacheClient'

const EXPIRE_MINUTE = 1

export function CacheContextProvider({ children }: PropsWithChildren) {
  const client = new CacheClient(EXPIRE_MINUTE)
  return <CacheContext.Provider value={client}>{children} </CacheContext.Provider>
}
