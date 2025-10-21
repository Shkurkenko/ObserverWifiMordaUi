import { createContext } from 'preact'
import { useState } from 'preact/hooks'
import { Alerts } from '../shared/interfaces/alerts.interface'

export const AlertsContext = createContext(null)
export const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([])

  const addAlert = (alert: Alerts.AlertType) => {
    const id = Math.random().toString(36).slice(2, 9) + new Date().getTime().toString(36)
    setAlerts((prev) => [{ ...alert, id: id }, ...prev])
    return id
  }

  const dismisAlert = (id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id))
  }

  return (
    <AlertsContext.Provider value={{ alerts, addAlert, dismisAlert }}>
      {children}
    </AlertsContext.Provider>
  )
}

export default AlertsProvider
