import { createContext } from 'preact'
import { useState } from 'preact/hooks'

interface ReoView {
  id: number
  data: object
}

export const ReoContentView = createContext(null)
export const ReoContentViewProvider = ({ children }) => {
  const [views, setViews] = useState<Map<number, ReoView>>(new Map())

  return <ReoContentView.Provider value={{ views, setViews }}>{children}</ReoContentView.Provider>
}
