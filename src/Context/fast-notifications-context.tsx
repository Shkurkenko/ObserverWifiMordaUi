import { useRef } from 'preact/hooks'
import { createContext } from 'preact'
import { useState, useCallback } from 'preact/hooks'
import { Alerts } from '../shared/interfaces/alerts.interface'
import { fastAlertsData } from '../data/fast-alerts'

export const FastNotificationsContext = createContext(null)
export const FastNotificationsProvider = ({ children }) => {
  const [fastAlerts, setFastAlerts] = useState<Alerts.AlertType[]>(fastAlertsData)

  const toggleFastNotification = useCallback((id: string): void => {
    setFastAlerts((prev: Alerts.AlertType[]) =>
      prev.map((notification: Alerts.AlertType) => {
        return notification.id === id && { ...notification, show: !notification.show }
      }),
    )
  }, [])

  const showFastNotification = useCallback((id: string): void => {
    setFastAlerts((prev: Alerts.AlertType[]) =>
      prev.map((notification: Alerts.AlertType) => {
        return notification.id === id && { ...notification, show: true }
      }),
    )
  }, [])

  const hideFastNotification = useCallback((id: string, callback: Function): void => {
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

  const hideFastNotificationWithDelay = useCallback(
    (delay: number, id: string, callback: Function) => {
      setTimeout(() => hideFastNotification(id, callback), delay)
    }, [])

  const addFastNotification = useCallback((alert: Alerts.AlertType): void => {
    setFastAlerts((prev: Alerts.AlertType[]) => [...prev, alert])
  }, [])

  const deleteFastNotification = useCallback((id: string): void => {
    setFastAlerts((prev: Alerts.AlertType[]) =>
      prev.filter((notification) => notification.id !== id),
    )
  }, [])

  const deleteFastNotificationWithDelay = useCallback((delay: number, id: string): void => {
    setTimeout(() => {
      deleteFastNotification(id)
    }, delay)
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
