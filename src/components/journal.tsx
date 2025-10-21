import { useEffect } from 'preact/hooks'
import { Alerts } from '../shared/interfaces/alerts.interface'
import { AlertList } from './alerts-list'
import { useAlerts } from '../Context/alert-context'
import { useFastNotifications } from './fast-notifications'

import './journal.css'

const journalModelExample: Alerts.AlertType[] = [
  {
    id: 0,
    type: Alerts.Level.Error,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 1,
    type: Alerts.Level.Info,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 2,
    type: Alerts.Level.Warning,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 3,
    type: Alerts.Level.Success,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 4,
    type: Alerts.Level.Success,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 5,
    type: Alerts.Level.Success,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 6,
    type: Alerts.Level.Success,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 7,
    type: Alerts.Level.Success,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
]

export function Journal() {
  const { alerts, addAlert } = useAlerts()
  const { addFastNotification, showFastNotification } = useFastNotifications()

  const emitTestAlerts = (data: Alerts.AlertType[]) => {
    // for (let i = 0; i < data.length; i++) {
    //   setTimeout(() => {
    //     console.log('Emiting test alerts', data[i])
    //     data[i].show = false
    //     addAlert(data[i])
    //     addFastNotification(data[i])
    //     showFastNotification(data[i].id)
    //   }, 3000 * i)
    // }
  }

  useEffect(() => {
    emitTestAlerts(journalModelExample)
  }, [journalModelExample])

  return (
    <div className='journal-container w-full'>
      <AlertList model={alerts} />
    </div>
  )
}
