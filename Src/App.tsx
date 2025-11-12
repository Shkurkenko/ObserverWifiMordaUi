import { Route } from 'wouter'
import { ReoScan } from './Views/Pages/ReoScan'
import { FastAlerts } from './Components/FastAlerts'
import { FastAlertsProvider } from './Context/FastAlertsContext'
import { HeaderSection } from './Views/Components/HeaderSection'
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
          {/* <HeaderSection /> */}
          <Route path='/'>
            <ScanViewProvider>
              <ReoScan />
            </ScanViewProvider>
            <FastAlerts />
          </Route>
        </AlertsProvider>
      </FastAlertsProvider>
    </SidebarProvider>
  </TasksProvider>
)
