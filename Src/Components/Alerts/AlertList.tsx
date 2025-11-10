import { Alert } from './AlertItem'
import { Alerts } from '../../Shared/Interfaces/Alerts.interface'

import './alerts-list.css'

interface AlertListProps {
  model: Alerts.IAlertType[]
}

export function AlertList({ model }: AlertListProps) {
  return (
    <div className='alert-list w-full scrollbar-thin'>
      {model.map((alert: Alerts.IAlertType) => (
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
