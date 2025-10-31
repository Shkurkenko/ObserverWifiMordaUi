import { AlertGeneric } from './alert-generic'
import { Alerts } from '../../shared/interfaces/alerts.interface'
import { ObserverConfig } from '../../config/ObserverConfig/observer-config'
import { useAlerts } from '../../hooks/use-alerts'

import './alert-item.css'

interface AlertProps {
  id: string
  type: Alerts.Level
  header: string
  message: string
  handleDismiss: Function | null
}

const renderNotificationItem = (
  id: string,
  type: Alerts.Level,
  header: string,
  message: string,
  dismissAlert: Function | null,
) => {
  switch (type) {
    case Alerts.Level.Error:
      return (
        <AlertGeneric
          id={id}
          color={ObserverConfig.AlertsConfig.error.color}
          icon={ObserverConfig.AlertsConfig.error.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
    case Alerts.Level.Success:
      return (
        <AlertGeneric
          id={id}
          color={ObserverConfig.AlertsConfig.success.color}
          icon={ObserverConfig.AlertsConfig.success.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
    case Alerts.Level.Warning:
      return (
        <AlertGeneric
          id={id}
          color={ObserverConfig.AlertsConfig.warning.color}
          icon={ObserverConfig.AlertsConfig.warning.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
    case Alerts.Level.Info:
      return (
        <AlertGeneric
          id={id}
          color={ObserverConfig.AlertsConfig.info.color}
          icon={ObserverConfig.AlertsConfig.info.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
    default:
      return (
        <AlertGeneric
          id={id}
          color={ObserverConfig.AlertsConfig.info.color}
          icon={ObserverConfig.AlertsConfig.info.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
  }
}

export function Alert({ id, type, header, message, handleDismiss = null }: AlertProps) {
  const { dismissAlert } = useAlerts()

  return (
    <div className='alert-item-container w-full'>
      {renderNotificationItem(id, type, header, message, dismissAlert)}
    </div>
  )
}
