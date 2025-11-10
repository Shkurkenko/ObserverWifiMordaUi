import { Alerts } from '../../Shared/Interfaces/Alerts.interface'
import { FastNotificationItem } from './FastNotificationItem'
import { ObserverConfig } from '../../Config/ObserverConfig'
import { useFastNotifications } from '../../Hooks/UseNotifications'

import './fast-notifications.css'

export function FastNotifications() {
  const { fastAlerts } = useFastNotifications()

  const renderFastNotification = (
    type: Alerts.ILevel,
    message: string,
    alertObject: Alerts.IAlertType,
  ) => {
    switch (type) {
      case Alerts.ILevel.Error:
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
      case Alerts.ILevel.Info:
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
      case Alerts.ILevel.Warning:
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
      case Alerts.ILevel.Success:
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
      {fastAlerts.map((notification: Alerts.IAlertType) =>
        renderFastNotification(notification.type, notification.header, notification),
      )}
    </div>
  )
}
