import { createContext } from 'react'

import CacheClient from '../store/cacheClient'

export const CacheContext = createContext<CacheClient | null>(null)
