import { useRef, useContext, useState } from 'preact/hooks'
import { Alerts } from '../shared/interfaces/alerts.interface'
import { AlertsContext } from '../Context/alert-context'

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
