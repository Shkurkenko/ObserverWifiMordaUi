import { Route } from 'wouter'
import { ReoScan } from './Views/Pages/ReoScan'
import { FastAlerts } from './Components/FastAlerts'
import { FastAlertsProvider } from './Context/FastAlertsContext'
import { HeaderSection } from './Views/Components/HeaderSection'
import { SideNavigation } from './Components/Sidebar/SideNavigation'
import ScanViewProvider from './Context/ReoScanViewContext'
import TasksProvider from './Context/TasksContext'
import AlertsProvider from './Context/AlertsContext'
import SidebarProvider from './Context/SidebarContext'

import './App.css'

export const App = () => (
  <TasksProvider>
    <SidebarProvider>
      <FastAlertsProvider>
        <AlertsProvider>
          <ScanViewProvider>
            {/* <HeaderSection /> */}
            <div className='app-container w-full flex'>
              <SideNavigation />
              <Route path='/'>
                <ReoScan />
                <FastAlerts />
              </Route>
            </div>
          </ScanViewProvider>
        </AlertsProvider>
      </FastAlertsProvider>
    </SidebarProvider>
  </TasksProvider>
)
