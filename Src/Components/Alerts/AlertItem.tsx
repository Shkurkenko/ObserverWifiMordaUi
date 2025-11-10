import { AlertGeneric } from './AlertGeneric'
import { Alerts } from '../../Shared/Interfaces/Alerts.interface'
import { ObserverConfig } from '../../Config/ObserverConfig'
import { useAlerts } from '../../Hooks/UseAlerts'

import './alert-item.css'

interface AlertProps {
  id: string
  type: Alerts.ILevel
  header: string
  message: string
  handleDismiss: Function | null
}

const renderNotificationItem = (
  id: string,
  type: Alerts.ILevel,
  header: string,
  message: string,
  dismissAlert: Function | null,
) => {
  switch (type) {
    case Alerts.ILevel.Error:
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
    case Alerts.ILevel.Success:
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
    case Alerts.ILevel.Warning:
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
    case Alerts.ILevel.Info:
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
