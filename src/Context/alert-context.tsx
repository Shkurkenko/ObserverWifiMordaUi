import { createContext } from 'preact'
import { useRef, useState, useContext } from 'preact/hooks'
import { Alerts } from '../shared/interfaces/alerts.interface'



const AlertsContext = createContext(null)
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

export const useAlerts = () => {
  const [alertIds, setAlertIds] = useState([])
  const alertIdsRef = useRef(alertIds)
  const { alerts, addAlert, dismissAlert } = useContext(AlertsContext)

  const addAlertWithId = (alert: Alerts.AlertType) => {
    const id = addAlert(alert)
    alertIdsRef.current.push(id)
    setAlertIds(alertIdsRef.current)
  }

  const clearAlerts = () => {
    alertIdsRef.current.forEach((id) => dismissAlert(id))
    alertIdsRef.current = []
    setAlertIds([])
  }

  return { alerts, addAlert: addAlertWithId, clearAlerts }
}

export default AlertsProvider
