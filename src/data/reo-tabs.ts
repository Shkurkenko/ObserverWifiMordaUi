import { Reo } from '../shared/interfaces/reo.interface'

import { scanRowsData1 } from './table-data'
import { scanRowsData2 } from './table-data'

export const reoTabsData1: Reo.Tab[] = [
  { id: 'tabs-with-underline-item-1', label: 'GSM', data: scanRowsData1 },
  { id: 'tabs-with-underline-item-2', label: 'LTE', data: scanRowsData2 },
  { id: 'tabs-with-underline-item-3', label: 'UMTS', data: scanRowsData1 },
  { id: 'tabs-with-underline-item-4', label: 'WiFi', data: scanRowsData1 },
  { id: 'tabs-with-underline-item-5', label: 'Bluetooth', data: scanRowsData2 },
  { id: 'tabs-with-underline-item-6', label: '5G', data: scanRowsData1 },
]
