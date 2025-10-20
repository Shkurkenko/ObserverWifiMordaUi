import { useContext, useEffect, useState } from 'preact/hooks'
import { AlertType } from './alerts-list'

import './journal.css'
import { Alert, NotificationTypes } from './alert-item'
import { AlertList } from './alerts-list'
import { useAlerts } from '../Context/alert-context'
import { useFastNotifications } from './fast-notifications'

const journalModelExample: Array<AlertType> = [
  {
    id: 0,
    type: NotificationTypes.Error,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 1,
    type: NotificationTypes.Info,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 2,
    type: NotificationTypes.Warning,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 3,
    type: NotificationTypes.Success,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 4,
    type: NotificationTypes.Success,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 5,
    type: NotificationTypes.Success,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 6,
    type: NotificationTypes.Success,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
  {
    id: 7,
    type: NotificationTypes.Success,
    header: 'First alert',
    message: 'All right bro!',
    show: true,
  },
]

export function Journal() {
  const { alerts, addAlert } = useAlerts()
  const { addFastNotification, showFastNotification } = useFastNotifications()

  const emitTestAlerts = (data: AlertType[]) => {
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
    emitTestAlerts(journalModelExample)
  }, [journalModelExample])

  return (
    <div className='journal-container w-full'>
      <AlertList model={alerts} />
    </div>
  )
}
