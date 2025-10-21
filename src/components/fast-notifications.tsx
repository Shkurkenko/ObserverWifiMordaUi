import { createContext } from 'preact'
import { useCallback, useState, useContext } from 'preact/hooks'
import { Alerts } from '../shared/interfaces/alerts.interface'
import { FastNotificationItem } from './fast-notificaiton-item'
import { ObserverConfig } from '../config/ObserverConfig/observer-config'
import { fastAlertsData } from '../data/fast-alerts'

import './fast-notifications.css'

const FastNotificationsContext = createContext(null)

export const FastNotificationsProvider = ({ children }) => {
  const [fastAlerts, setFastAlerts] = useState<Alerts.AlertType[]>(fastAlertsData)

  const toggleFastNotification = useCallback((id: number): void => {
    setFastAlerts((prev: Alerts.AlertType[]) =>
      prev.map((notification: Alerts.AlertType) => {
        return notification.id === id && { ...notification, show: !notification.show }
      }),
    )
  }, [])

  const showFastNotification = useCallback((id: number): void => {
    setFastAlerts((prev: Alerts.AlertType[]) =>
      prev.map((notification: Alerts.AlertType) => {
        return notification.id === id && { ...notification, show: true }
      }),
    )
  }, [])

  const hideFastNotification = useCallback((id: number, callback: Function): void => {
    setFastAlerts((prev: Alerts.AlertType[]) =>
      prev.map((notification: Alerts.AlertType) => {
        if (notification.id === id) {
          return { ...notification, show: false }
        }
        return { ...notification }
      }),
    )
    callback()
  }, [])

  const addFastNotification = useCallback((alert: Alerts.AlertType): void => {
    setFastAlerts((prev: Alerts.AlertType[]) => [...prev, alert])
  }, [])

  const deleteFastNotification = useCallback((id: number): void => {
    setFastAlerts((prev: Alerts.AlertType[]) =>
      prev.filter((notification) => notification.id !== id),
    )
  }, [])

  const clearFastNotifications = useCallback(() => {
    setFastAlerts((prev: Alerts.AlertType[]) => [])
  }, [])

  return (
    <FastNotificationsContext.Provider
      value={{
        fastAlerts,
        addFastNotification,
        deleteFastNotification,
        clearFastNotifications,
        toggleFastNotification,
        showFastNotification,
        hideFastNotification,
      }}
    >
      {children}
    </FastNotificationsContext.Provider>
  )
}

export function useFastNotifications() {
  const {
    fastAlerts,
    addFastNotification,
    deleteFastNotification,
    showFastNotification,
    hideFastNotification,
    toggleFastNotification,
  } = useContext(FastNotificationsContext)

  return {
    fastAlerts,
    addFastNotification,
    deleteFastNotification,
    showFastNotification,
    hideFastNotification,
    toggleFastNotification,
  }
}

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
