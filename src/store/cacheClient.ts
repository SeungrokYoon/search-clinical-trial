import { CacheStore } from './cacheStore'

interface QueryData<T> {
  data: T[]
  expireTime: number
}

class CacheClient {
  #cache
  #expireDelta
  constructor(expireMinute: number) {
    this.#cache = CacheStore
    this.#expireDelta = expireMinute * 60000
  }

  set<T>(queryKey: string, data: T[]) {
    const requestTime = Date.now()
    const queryData: QueryData<T> = { data, expireTime: requestTime + this.#expireDelta }
    this.#cache.set(queryKey, queryData)
  }

  get(queryKey: string) {
    const requestTime = Date.now()
    if (this.#cache.has(queryKey)) {
      const expired = this.#cache.get(queryKey).expireTime < requestTime
      return expired ? null : this.#cache.get(queryKey).data
    }
    return null
  }
}

export default CacheClient
