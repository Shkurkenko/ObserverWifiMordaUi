import { createContext } from 'preact'
import { useRef, useState, useContext } from 'preact/hooks'
import { NotificationTypes } from '../components/alert-item'
import { AlertList, AlertType } from '../components/alerts-list'

// const journalModelExample: Array<AlertType> = [
//   {
//     id: 0,
//     type: NotificationTypes.Error,
//     header: 'First alert',
//     message: 'All right bro!',
//   },
//   {
//     id: 1,
//     type: NotificationTypes.Info,
//     header: 'First alert',
//     message: 'All right bro!',
//   },
//   {
//     id: 2,
//     type: NotificationTypes.Warning,
//     header: 'First alert',
//     message: 'All right bro!',
//   },
//   {
//     id: 3,
//     type: NotificationTypes.Success,
//     header: 'First alert',
//     message: 'All right bro!',
//   },
//   {
//     id: 4,
//     type: NotificationTypes.Success,
//     header: 'First alert',
//     message: 'All right bro!',
//   },
//   {
//     id: 5,
//     type: NotificationTypes.Success,
//     header: 'First alert',
//     message: 'All right bro!',
//   },
//   {
//     id: 6,
//     type: NotificationTypes.Success,
//     header: 'First alert',
//     message: 'All right bro!',
//   },
//   {
//     id: 7,
//     type: NotificationTypes.Success,
//     header: 'First alert',
//     message: 'All right bro!',
//   },
// ]

const AlertsContext = createContext(null)
export const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([])

  const addAlert = (alert) => {
    const id = Math.random().toString(36).slice(2, 9) + new Date().getTime().toString(36)
    setAlerts((prev) => [{ ...alert, id: id }, ...prev])
    return id
  }

  const dismisAlert = (id) => {
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

  const addAlertWithId = (alert: AlertType) => {
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
