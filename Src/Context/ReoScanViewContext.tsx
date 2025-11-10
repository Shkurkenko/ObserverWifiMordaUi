import { createContext, ComponentChildren } from 'preact'
import { useState, useCallback } from 'preact/hooks'
import { ReoView } from '../Views/ReoScan'

interface ScanViewProviderProps {
  children: ComponentChildren
}

export const ScanViewContext = createContext(null)
const ScanViewProvider = ({ children }: ScanViewProviderProps) => {
  const [scanViews, setScanViews] = useState<ReoView[]>([])

  const addView = useCallback((view: ReoView): void => {
    setScanViews((prev: ReoView[]) => [...prev, view])
  }, [])

  const deleteView = useCallback((id: number): void => {
    setScanViews((prev: ReoView[]) => prev.filter((view: ReoView) => id !== view.taskId))
  }, [])

  const setViewVisibility = useCallback((id: number, status: boolean): void => {
    setScanViews((prev: ReoView[]) =>
      prev.map((view: ReoView) =>
        id === view.taskId ? { ...view, show: status } : { ...view, show: !status },
      ),
    )
  }, [])

  const toggleView = useCallback((id: number): void => {
    setScanViews((prev: ReoView[]) =>
      prev.map((view: ReoView) => (id === view.taskId ? { ...view, show: !view.show } : view)),
    )
  }, [])

  const showView = useCallback((id: number): void => {
    setViewVisibility(id, true)
  }, [])

  const hideView = useCallback((id: number): void => {
    setViewVisibility(id, false)
  }, [])

  return (
    <ScanViewContext.Provider
      value={{ scanViews, addView, deleteView, setScanViews, toggleView, showView, hideView }}
    >
      {children}
    </ScanViewContext.Provider>
  )
}

export default ScanViewProvider
