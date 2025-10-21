import { Alerts } from '../../shared/interfaces/alerts.interface'
import { FastNotificationItem } from './fast-notificaiton-item'
import { ObserverConfig } from '../../config/ObserverConfig/observer-config'
import { useFastNotifications } from '../../hooks/use-notifications'

import './fast-notifications.css'

export function FastNotifications() {
  const { fastAlerts } = useFastNotifications()

  const renderFastNotification = (
    type: Alerts.Level,
    message: string,
    alertObject: Alerts.AlertType,
  ): JSX.Element => {
    switch (type) {
      case Alerts.Level.Error:
        return (
          <FastNotificationItem
            backgroundColor={ObserverConfig.FastAlerts.error.backgroundColor}
            borderColor={ObserverConfig.FastAlerts.error.borderColor}
            color={ObserverConfig.FastAlerts.error.color}
            icon={ObserverConfig.FastAlerts.error.icon}
            transitionTime={ObserverConfig.FastAlerts.general.transition}
            message={message}
            data={alertObject}
          />
        )
      case Alerts.Level.Info:
        return (
          <FastNotificationItem
            backgroundColor={ObserverConfig.FastAlerts.info.backgroundColor}
            borderColor={ObserverConfig.FastAlerts.info.borderColor}
            color={ObserverConfig.FastAlerts.info.color}
            icon={ObserverConfig.FastAlerts.info.icon}
            message={message}
            transitionTime={ObserverConfig.FastAlerts.general.transition}
            data={alertObject}
          />
        )
      case Alerts.Level.Warning:
        return (
          <FastNotificationItem
            backgroundColor={ObserverConfig.FastAlerts.warning.backgroundColor}
            borderColor={ObserverConfig.FastAlerts.warning.borderColor}
            color={ObserverConfig.FastAlerts.warning.color}
            icon={ObserverConfig.FastAlerts.warning.icon}
            transitionTime={ObserverConfig.FastAlerts.general.transition}
            message={message}
            data={alertObject}
          />
        )
      case Alerts.Level.Success:
        return (
          <FastNotificationItem
            backgroundColor={ObserverConfig.FastAlerts.success.backgroundColor}
            borderColor={ObserverConfig.FastAlerts.success.borderColor}
            color={ObserverConfig.FastAlerts.success.color}
            icon={ObserverConfig.FastAlerts.success.icon}
            transitionTime={ObserverConfig.FastAlerts.general.transition}
            message={message}
            data={alertObject}
          />
        )
      default:
        return (
          <FastNotificationItem
            backgroundColor={ObserverConfig.FastAlerts.success.backgroundColor}
            borderColor={ObserverConfig.FastAlerts.success.borderColor}
            color={ObserverConfig.FastAlerts.success.color}
            icon={ObserverConfig.FastAlerts.success.icon}
            transitionTime={ObserverConfig.FastAlerts.general.transition}
            message={message}
            data={alertObject}
          />
        )
    }
  }

  return (
    <div className='fast-notifications'>
      {fastAlerts.map((notification: Alerts.AlertType) => (
        <div
          className={`notification-item-container ${notification.show ? 'fast-notification-show' : 'fast-notification-hide'}`}
        >
          {renderFastNotification(notification.type, notification.header, notification)}
        </div>
      ))}
    </div>
  )
}
