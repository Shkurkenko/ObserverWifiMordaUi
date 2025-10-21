import { ReoContentView } from '../components/reo-content-view'
import { SideNavigation } from '../components/side-navigation'

import { reoTabsData1 } from '../data/reo-tabs'

import './reo-scan.css'

export const ReoScan = () => {
  return (
    <div className='reo-scan-container w-full flex'>
      <SideNavigation />
      <ReoContentView model={reoTabsData1} />
    </div>
  )
}
