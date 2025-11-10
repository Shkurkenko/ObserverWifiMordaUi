import { AlertList } from '../Alerts/AlertList'
import { useAlerts } from '../../Hooks/UseAlerts'

import './journal.css'

export function Journal() {
  const { alerts } = useAlerts()

  return (
    <div className='journal-container w-full'>
      <AlertList model={alerts} />
    </div>
  )
}
