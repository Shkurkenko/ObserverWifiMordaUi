import { AlertList } from './alerts/alerts-list'
import { useAlerts } from '../hooks/use-alerts'

import './journal.css'

export function Journal() {
  const { alerts } = useAlerts()

  return (
    <div className='journal-container w-full'>
      <AlertList model={alerts} />
    </div>
  )
}
