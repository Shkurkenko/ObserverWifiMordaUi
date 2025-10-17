import { createContext } from 'preact'
import { useCallback, useEffect, useState, useRef, useContext } from 'preact/hooks'
import { useAlerts } from '../Context/alert-context'
import { deafultNotificationSetup, NotificationTypes } from './alert-item'
import { AlertType } from './alerts-list'
import { FastNotificationItem } from './fast-notificaiton-item'

import './fast-notification-item.css'

interface FastNotificationItemStyle {
  icon: JSX.Element
  backgroundColor: string
  color: string
  borderColor: string
}

interface FastNotificationStyle {
  error: FastNotificationItemStyle
  warning: FastNotificationItemStyle
  success: FastNotificationItemStyle
  info: FastNotificationItemStyle
}

const defaultFastNotificationSetup: FastNotificationStyle = {
  error: {
    icon: deafultNotificationSetup.error.icon,
    backgroundColor: '#341b2a',
    color: '#ecc6c9',
    borderColor: '#4b1d2c',
  },
  success: {
    icon: deafultNotificationSetup.success.icon,
    backgroundColor: '#0e2a2c',
    color: '#b9f8b5',
    borderColor: '#0d3b30',
  },
  warning: {
    icon: deafultNotificationSetup.info.icon,
    backgroundColor: '#262724',
    color: '#fef9b8',
    borderColor: '#322f22',
  },
  info: {
    icon: deafultNotificationSetup.info.icon,
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
    },
    {
      id: 101,
      type: NotificationTypes.Error,
      header: 'Some header',
      message: 'Some message',
    },
    {
      id: 102,
      type: NotificationTypes.Warning,
      header: 'Some header',
      message: 'Some message',
    },
    {
      id: 103,
      type: NotificationTypes.Info,
      header: 'Some header',
      message: 'Some message',
    },
  ])

  const deleteFastNotification = useCallback((id: number) => {
    setFastAlerts((prev: AlertType[]) => prev.filter((notification) => notification.id !== id))
  }, [])

  const addFastNotification = useCallback((alert: AlertType) => {
    setFastAlerts((prev: AlertType[]) => [...prev, alert])
  }, [])

  const clearFastNotification = useCallback(() => {
    setFastAlerts((prev: AlertType[]) => [])
  }, [])

  return (
    <FastNotificationsContext.Provider
      value={{ fastAlerts, addFastNotification, deleteFastNotification }}
    >
      {children}
    </FastNotificationsContext.Provider>
  )
}

export function useFastNotifications() {
  const [fastAlertIds, setFastAlertIds] = useState([])
  const fastAlertIdsRef = useRef(fastAlertIds)
  const { fastAlerts, addFastNotification, deleteFastNotification } =
    useContext(FastNotificationsContext)

  const addFastAlertWithId = (alert: AlertType) => {
    const id = addFastNotification(alert)
    fastAlertIdsRef.current.push(id)
    setFastAlertIds(fastAlertIdsRef.current)
  }

  const clearFastAlertsIds = () => {
    fastAlertIdsRef.current.forEach((id) => deleteFastNotification(id))
    fastAlertIdsRef.current = []
    setFastAlertIds([])
  }

  return {
    fastAlerts,
    addFastNotification,
    deleteFastNotification,
  }
}

export function FastNotifications() {
  const {
    fastAlerts,
    addFastNotification,
    deleteFastNotification,
    // clearFastNotification,
  } = useFastNotifications()

  useEffect(() => {
    console.log('Alert data changed')
  }, [fastAlerts.alertData])

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
            icon={deafultNotificationSetup.error.icon}
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
            icon={deafultNotificationSetup.info.icon}
            message={message}
            data={alertObject}
          />
        )
      case NotificationTypes.Warning:
        return (
          <FastNotificationItem
            backgroundColor={defaultFastNotificationSetup.warning.backgroundColor}
            borderColor={defaultFastNotificationSetup.warning.borderColor}
            color={defaultFastNotificationSetup.warning.color}
            icon={deafultNotificationSetup.warning.icon}
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
            icon={deafultNotificationSetup.success.icon}
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
            icon={deafultNotificationSetup.success.icon}
            message={message}
            data={alertObject}
          />
        )
    }
  }

  return (
    <div className='fast-notifications'>
      {fastAlerts.map((notification: AlertType) => (
        <div className='notification-item-container'>
          {renderFastNotification(notification.type, notification.header, notification)}
        </div>
      ))}
    </div>
  )
}
