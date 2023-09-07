export function debounce<T extends (...args: any[]) => any>(func: T, delay: number) {
  let timeoutId: NodeJS.Timeout
  const debouncedFunction = (...args: Parameters<T>) => {
    const lastestFunction = () => {
      clearTimeout(timeoutId)
      func(...args)
    }
    clearTimeout(timeoutId)
    timeoutId = setTimeout(lastestFunction, delay)
    return debouncedFunction
  }

  debouncedFunction.cancel = function () {
    clearTimeout(timeoutId)
  }

  return debouncedFunction
}
