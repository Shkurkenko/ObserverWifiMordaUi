import { useContext, useEffect, useState } from 'preact/hooks'
import { AlertType } from './alerts-list'

import './journal.css'
import { Alert, NotificationTypes } from './alert-item'
import { AlertList } from './alerts-list'
import { useAlerts } from '../Context/alert-context'

const journalModelExample: Array<AlertType> = [
  {
    id: 0,
    type: NotificationTypes.Error,
    header: 'First alert',
    message: 'All right bro!',
  },
  {
    id: 1,
    type: NotificationTypes.Info,
    header: 'First alert',
    message: 'All right bro!',
  },
  {
    id: 2,
    type: NotificationTypes.Warning,
    header: 'First alert',
    message: 'All right bro!',
  },
  {
    id: 3,
    type: NotificationTypes.Success,
    header: 'First alert',
    message: 'All right bro!',
  },
  {
    id: 4,
    type: NotificationTypes.Success,
    header: 'First alert',
    message: 'All right bro!',
  },
  {
    id: 5,
    type: NotificationTypes.Success,
    header: 'First alert',
    message: 'All right bro!',
  },
  {
    id: 6,
    type: NotificationTypes.Success,
    header: 'First alert',
    message: 'All right bro!',
  },
  {
    id: 7,
    type: NotificationTypes.Success,
    header: 'First alert',
    message: 'All right bro!',
  },
]

export function Journal() {
  const { alerts, addAlert, clearAlerts } = useAlerts()

  const emitTestAlerts = (data: AlertType[]) => {
    // for (let i = 0; i < data.length; i++) {
    //   setTimeout(() => {
    //     console.log('Emiting test alerts', data[i])
    //     addAlert(data[i])
    //   }, 3000 * i)
    // }
    addAlert(data[4])
    addAlert(data[0])
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
