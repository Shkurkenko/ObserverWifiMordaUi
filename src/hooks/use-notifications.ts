import { useContext } from 'preact/hooks'
import { FastNotificationsContext } from '../Context/fast-notifications-context'

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
  }
}
