import { createContext } from 'preact'
import { useCallback, useEffect, useState, useRef, useContext } from 'preact/hooks'
import { useAlerts } from '../Context/alert-context'
import { defaultNotificationSetup, NotificationTypes } from './alert-item'
import { AlertType } from './alerts-list'
import { FastNotificationItem } from './fast-notificaiton-item'

import './fast-notifications.css'

interface FastNotificationItemStyle {
  icon: JSX.Element
  iconColor: string
  backgroundColor: string
  color: string
  borderColor: string
}

interface FastNotificationStyle {
  general: {
    transition: number
  }
  error: FastNotificationItemStyle
  warning: FastNotificationItemStyle
  success: FastNotificationItemStyle
  info: FastNotificationItemStyle
}

const defaultFastNotificationSetup: FastNotificationStyle = {
  general: {
    transition: 0.3,
  },
  error: {
    icon: defaultNotificationSetup.error.icon,
    iconColor: '#ea5233',
    backgroundColor: '#341b2a',
    color: '#ecc6c9',
    borderColor: '#4b1d2c',
  },
  success: {
    icon: defaultNotificationSetup.success.icon,
    iconColor: '#5dad58',
    backgroundColor: '#0e2a2c',
    color: '#b9f8b5',
    borderColor: '#0d3b30',
  },
  warning: {
    icon: defaultNotificationSetup.info.icon,
    iconColor: '#fad947',
    backgroundColor: '#262724',
    color: '#fef9b8',
    borderColor: '#322f22',
  },
  info: {
    icon: defaultNotificationSetup.info.icon,
    iconColor: '#0288D1',
    backgroundColor: '#12233e',
    color: '#8ec5ff',
    borderColor: '#162c54',
  },
}

const FastNotificationsContext = createContext(null)

export const FastNotificationsProvider = ({ children }) => {
  const [fastAlerts, setFastAlerts] = useState<AlertType[]>([
    {
      id: 100,
      type: NotificationTypes.Success,
      header: 'Some header',
      message: 'Some message',
      show: true,
    },
    {
      id: 101,
      type: NotificationTypes.Error,
      header: 'Some header',
      message: 'Some message',
      show: true,
    },
    {
      id: 102,
      type: NotificationTypes.Warning,
      header: 'Some header',
      message: 'Some message',
      show: true,
    },
    {
      id: 103,
      type: NotificationTypes.Info,
      header: 'Some header',
      message: 'Some message',
      show: true,
    },
  ])

  const toggleFastNotification = useCallback((id: number) => {
    setFastAlerts((prev: AlertType[]) =>
      prev.map((notification: AlertType) => {
        return notification.id === id && { ...notification, show: !notification.show }
      }),
    )
  }, [])

  const showFastNotification = useCallback((id: number) => {
    setFastAlerts((prev: AlertType[]) =>
      prev.map((notification: AlertType) => {
        return notification.id === id && { ...notification, show: true }
      }),
    )
  }, [])

  const hideFastNotification = useCallback((id: number, callback: Function) => {
    setFastAlerts((prev: AlertType[]) =>
      prev.map((notification: AlertType) => {
        if (notification.id === id) {
          return { ...notification, show: false }
        }
        return { ...notification }
      }),
    )
    callback()
  }, [])

  const addFastNotification = useCallback((alert: AlertType) => {
    setFastAlerts((prev: AlertType[]) => [...prev, alert])
  }, [])

  const deleteFastNotification = useCallback((id: number) => {
    setFastAlerts((prev: AlertType[]) => prev.filter((notification) => notification.id !== id))
  }, [])

  const clearFastNotifications = useCallback(() => {
    setFastAlerts((prev: AlertType[]) => [])
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
    type: NotificationTypes,
    message: string,
    alertObject: AlertType,
  ) => {
    switch (type) {
      case NotificationTypes.Error:
        return (
          <FastNotificationItem
            backgroundColor={defaultFastNotificationSetup.error.backgroundColor}
            borderColor={defaultFastNotificationSetup.error.borderColor}
            color={defaultFastNotificationSetup.error.color}
            icon={defaultNotificationSetup.error.icon}
            transitionTime={defaultFastNotificationSetup.general.transition}
            message={message}
            data={alertObject}
          />
        )
      case NotificationTypes.Info:
        return (
          <FastNotificationItem
            backgroundColor={defaultFastNotificationSetup.info.backgroundColor}
            borderColor={defaultFastNotificationSetup.info.borderColor}
            color={defaultFastNotificationSetup.info.color}
            icon={defaultNotificationSetup.info.icon}
            message={message}
            transitionTime={defaultFastNotificationSetup.general.transition}
            data={alertObject}
          />
        )
      case NotificationTypes.Warning:
        return (
          <FastNotificationItem
            backgroundColor={defaultFastNotificationSetup.warning.backgroundColor}
            borderColor={defaultFastNotificationSetup.warning.borderColor}
            color={defaultFastNotificationSetup.warning.color}
            icon={defaultNotificationSetup.warning.icon}
            transitionTime={defaultFastNotificationSetup.general.transition}
            message={message}
            data={alertObject}
          />
        )
      case NotificationTypes.Success:
        return (
          <FastNotificationItem
            backgroundColor={defaultFastNotificationSetup.success.backgroundColor}
            borderColor={defaultFastNotificationSetup.success.borderColor}
            color={defaultFastNotificationSetup.success.color}
            icon={defaultNotificationSetup.success.icon}
            transitionTime={defaultFastNotificationSetup.general.transition}
            message={message}
            data={alertObject}
          />
        )
      default:
        return (
          <FastNotificationItem
            backgroundColor={defaultFastNotificationSetup.success.backgroundColor}
            borderColor={defaultFastNotificationSetup.success.borderColor}
            color={defaultFastNotificationSetup.success.color}
            icon={defaultNotificationSetup.success.icon}
            transitionTime={defaultFastNotificationSetup.general.transition}
            message={message}
            data={alertObject}
          />
        )
    }
  }

  return (
    <div className='fast-notifications'>
      {fastAlerts.map((notification: AlertType) => (
        <div
          className={`notification-item-container ${notification.show ? 'fast-notification-show' : 'fast-notification-hide'}`}
        >
          {renderFastNotification(notification.type, notification.header, notification)}
        </div>
      ))}
    </div>
  )
}
