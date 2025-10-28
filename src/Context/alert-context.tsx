import { createContext } from 'preact'
import { useState } from 'preact/hooks'
import { Alerts } from '../shared/interfaces/alerts.interface'

export const AlertsContext = createContext(null)
export const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([])

  const addAlert = (alert: Alerts.AlertType) => {
    const id = Date.now()
    setAlerts((prev) => [{ ...alert, id }, ...prev])
    return id
  }

  const dismissAlert = (id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id))
  }

  return (
    <AlertsContext.Provider value={{ alerts, addAlert, dismissAlert }}>
      {children}
    </AlertsContext.Provider>
  )
}

export default AlertsProvider
