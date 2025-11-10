import { createContext, ComponentChildren } from 'preact'
import { useState, useCallback } from 'preact/hooks'
import { Alerts } from '../Shared/Interfaces/Alerts.interface'

interface FastNotificationsProviderProps {
  children: ComponentChildren
}

export const FastNotificationsContext = createContext(null)
export const FastNotificationsProvider = ({ children }: FastNotificationsProviderProps) => {
  const [notificaitonDelay, setNotificationDelay] = useState<number>(1000)
  const [maxCount, setMaxCount] = useState<number>(5)
  const [queue, setQueue] = useState<Alerts.IAlertType[]>([])
  const [fastAlerts, setFastAlerts] = useState<Alerts.IAlertType[]>([])

  const toggleFastNotification = useCallback((id: string): void => {
    setFastAlerts((prev: Alerts.IAlertType[]) =>
      prev.map((notification: Alerts.IAlertType) => {
        return notification.id === id && { ...notification, show: !notification.show }
      }),
    )
  }, [])

  const showFastNotification = useCallback((id: string): void => {
    setFastAlerts((prev: Alerts.IAlertType[]) =>
      prev.map((notification: Alerts.IAlertType) => {
        return notification.id === id && { ...notification, show: true }
      }),
    )
  }, [])

  const hideFastNotification = useCallback((id: string, callback: Function): void => {
    setFastAlerts((prev: Alerts.IAlertType[]) =>
      prev.map((notification: Alerts.IAlertType) => {
        if (notification.id === id) {
          return { ...notification, show: false }
        }
        return { ...notification }
      }),
    )
    callback()
  }, [])

  const hideFastNotificationWithDelay = useCallback(
    (delay: number, id: string, callback: Function) => {
      setTimeout(() => hideFastNotification(id, callback), delay)
    },
    [],
  )

  const addFastNotification = useCallback((alert: Alerts.IAlertType): void => {
    setFastAlerts((prev: Alerts.IAlertType[]) => [...prev, alert])
  }, [])

  const deleteFastNotification = useCallback((id: string): void => {
    setFastAlerts((prev: Alerts.IAlertType[]) =>
      prev.filter((notification) => notification.id !== id),
    )
  }, [])

  const deleteFastNotificationWithDelay = useCallback((delay: number, id: string): void => {
    setTimeout(() => {
      deleteFastNotification(id)
    }, delay)
  }, [])

  const clearFastNotifications = useCallback(() => {
    setFastAlerts((prev: Alerts.IAlertType[]) => [])
  }, [])

  return (
    <FastNotificationsContext.Provider
      value={{
        fastAlerts,
        addFastNotification,
        deleteFastNotification,
        deleteFastNotificationWithDelay,
        clearFastNotifications,
        toggleFastNotification,
        showFastNotification,
        hideFastNotification,
        hideFastNotificationWithDelay,
      }}
    >
      {children}
    </FastNotificationsContext.Provider>
  )
}
