import { useState, useEffect } from 'preact/hooks'

export function useStorage(key: string, initialValue: any, storageType = 'localStorage') {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = window[storageType].getItem(key)
      return storedValue ? JSON.parse(storedValue) : initialValue
    } catch (error) {
      console.error(`Error reading ${key} from ${storageType}:`, error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window[storageType].setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error writing ${key} to ${storageType}:`, error)
    }
  }, [value, setValue])
}
