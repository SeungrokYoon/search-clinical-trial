import { CacheStore } from './cacheStore'

class CacheClient {
  #cache
  constructor() {
    this.#cache = CacheStore
  }

  set<T>(queryKey: string, data: T) {
    !this.#cache.has(queryKey) && this.#cache.set(queryKey, data)
  }
  get(queryKey: string) {
    return this.#cache.get(queryKey)
  }
}

export default CacheClient
