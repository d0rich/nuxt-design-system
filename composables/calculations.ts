const cache = new Map<string, any>()

export function useCache<T>(key: string, fn: () => T): T {
  if (cache.has(key)) {
    return cache.get(key)
  }
  const value = fn()
  cache.set(key, value)
  return value
}
