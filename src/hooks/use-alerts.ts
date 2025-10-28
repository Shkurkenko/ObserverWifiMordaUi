import { useContext } from 'preact/hooks'
import { AlertsContext } from '../Context/alert-context'

export const useAlerts = () => {
  const { alerts, addAlert, dismissAlert } = useContext(AlertsContext)

  return { alerts, addAlert, dismissAlert }
}
