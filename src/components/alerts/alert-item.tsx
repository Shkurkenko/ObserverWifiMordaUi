import { AlertGeneric } from './alert-generic'
import { Alerts } from '../../shared/interfaces/alerts.interface'
import { ObserverConfig } from '../../config/ObserverConfig/observer-config'

import './alert-item.css'

const renderNotificationItem = (
  type: Alerts.Level,
  header: string,
  message: string,
  dismissAlert: Function | null,
) => {
  switch (type) {
    case Alerts.Level.Error:
      return (
        <AlertGeneric
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
          color={ObserverConfig.AlertsConfig.info.color}
          icon={ObserverConfig.AlertsConfig.info.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
  }
}

export function Alert({ type, header, message, handleDismiss = null }) {
  const dismissAlert = (e: Event) => {
    e.preventDefault()
    handleDismiss()
  }

  return (
    <div className='alert-item-container w-full'>
      {renderNotificationItem(type, header, message, dismissAlert)}
    </div>
  )
}
