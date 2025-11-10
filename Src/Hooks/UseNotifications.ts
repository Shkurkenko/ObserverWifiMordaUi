import { useContext } from 'preact/hooks'
import { FastNotificationsContext } from '../Context/FastNotificationsContext'

export function useFastNotifications() {
  const {
    fastAlerts,
    addFastNotification,
    deleteFastNotification,
    deleteFastNotificationWithDelay,
    showFastNotification,
    hideFastNotification,
    hideFastNotificationWithDelay,
    toggleFastNotification,
    proccessFastNotificationLoop,
  } = useContext(FastNotificationsContext)

  return {
    fastAlerts,
    addFastNotification,
    deleteFastNotification,
    deleteFastNotificationWithDelay,
    showFastNotification,
    hideFastNotification,
    hideFastNotificationWithDelay,
    toggleFastNotification,
    proccessFastNotificationLoop,
  }
}
