import { Alert } from './alert-item'
import { Alerts } from '../../shared/interfaces/alerts.interface'

import './alerts-list.css'

interface AlertListProps {
  model: Alerts.AlertType[]
}

export function AlertList({ model }: AlertListProps) {
  return (
    <div className='alert-list w-full scrollbar-thin'>
      {model.map((alert: Alerts.AlertType) => (
        <Alert
          key={alert.id}
          id={alert.id}
          type={alert.type}
          header={alert.header}
          message={alert.message}
          handleDismiss={null}
        />
      ))}
    </div>
  )
}
