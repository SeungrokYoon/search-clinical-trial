import { useContext } from 'react'

import { CacheContext } from '../context/cacheContext'

export function useCacheContext() {
  const ctx = useContext(CacheContext)
  if (!ctx) throw new Error('Cache context is null')
  return ctx
}
