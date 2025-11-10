import { createContext, ComponentChildren } from 'preact'
import { useState, useCallback } from 'preact/hooks'
import { Alerts } from '../Shared/Interfaces/Alerts.interface'

interface AlertsProviderProps {
  children: ComponentChildren
}

export const AlertsContext = createContext(null)
export const AlertsProvider = ({ children }: AlertsProviderProps) => {
  const [alerts, setAlerts] = useState([])

  const addAlert = useCallback((alert: Alerts.IAlertType) => {
    const id = Date.now()
    setAlerts((prev) => [{ ...alert, id }, ...prev])
    return id
  }, [])

  const dismissAlert = useCallback((id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id))
  }, [])

  return (
    <AlertsContext.Provider value={{ alerts, addAlert, dismissAlert }}>
      {children}
    </AlertsContext.Provider>
  )
}

export default AlertsProvider
