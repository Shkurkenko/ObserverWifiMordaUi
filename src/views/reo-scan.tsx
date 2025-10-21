import { useState } from 'preact/hooks'
import { ReoContentView } from '../components/reo-content-view'

import { scanRows } from '../components/example-row-data'
import { anotherRows } from '../components/example-row-data-another'

import { SideNavigation } from '../components/side-navigation'

import './reo-scan.css'

export const ReoScan = () => {
  const [wssRows, setWssRow] = useState(scanRows)

  const reoScanTabsModel = [
    { id: 'tabs-with-underline-item-1', label: 'GSM', data: scanRows },
    { id: 'tabs-with-underline-item-2', label: 'LTE', data: anotherRows },
    { id: 'tabs-with-underline-item-3', label: 'UMTS', data: scanRows },
    { id: 'tabs-with-underline-item-4', label: 'WiFi', data: anotherRows },
    { id: 'tabs-with-underline-item-5', label: 'Bluetooth', data: anotherRows },
    { id: 'tabs-with-underline-item-6', label: '5G', data: scanRows },
  ]

  return (
    <div className='reo-scan-container w-full flex'>
      <SideNavigation />
      <ReoContentView model={reoScanTabsModel} />
    </div>
  )
}
