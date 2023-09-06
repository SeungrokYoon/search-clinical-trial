import { useCallback, useEffect } from 'react'

import { debounce } from '../utils/debounce'

function useDebounce<T extends (...args: any[]) => void>(callback: T, delay = 500, deps = []) {
  const debouncedCallback = useCallback(debounce(callback, delay), [delay, ...deps])
  useEffect(() => {
    return () => {
      debouncedCallback.cancel()
    }
  }, [delay, ...deps])

  return debouncedCallback
}

export default useDebounce
