import { useEffect } from 'preact/hooks'
import { Alerts } from '../shared/interfaces/alerts.interface'
import { AlertList } from './alerts/alerts-list'
import { useAlerts } from '../hooks/use-alerts'
import { useFastNotifications } from '../hooks/use-notifications'
import { journalAlertsData } from '../data/journal-alerts'

import './journal.css'

export function Journal() {
  const { alerts, addAlert } = useAlerts()
  const { addFastNotification, showFastNotification } = useFastNotifications()

  const emitTestAlerts = (data: Alerts.AlertType[]) => {
    for (let i = 0; i < data.length; i++) {
      setTimeout(() => {
        console.log('Emiting test alerts', data[i])
        data[i].show = false
        addAlert(data[i])
        addFastNotification(data[i])
        showFastNotification(data[i].id)
      }, 3000 * i)
    }
  }

  useEffect(() => {
    emitTestAlerts(journalAlertsData)
  }, [journalAlertsData])

  return (
    <div className='journal-container w-full'>
      <AlertList model={alerts} />
    </div>
  )
}
