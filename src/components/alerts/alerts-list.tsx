import { useEffect } from 'preact/hooks'
import { Alert } from './alert-item'
import { Alerts } from '../../shared/interfaces/alerts.interface'

import './alerts-list.css'

export function AlertList({ model }) {
  return (
    <div className='alert-list w-full scrollbar-thin'>
      {model.map((alert: Alerts.AlertType, index: number) => (
        <Alert type={alert.type} header={alert.header} message={alert.message} key={alert.id} />
      ))}
    </div>
  )
}
