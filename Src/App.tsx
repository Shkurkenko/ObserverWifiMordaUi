import { Route } from 'wouter'
import { ReoScan } from './Views/ReoScan'
import { FastNotifications } from './Components/FastAlerts/FastNotifications'
import { FastNotificationsProvider } from './Context/FastNotificationsContext'
import { HeaderSection } from './Components/HeaderSection'
import ScanViewProvider from './Context/ReoScanViewContext'
import TasksProvider from './Context/TasksContext'
import AlertsProvider from './Context/AlertsContext'
import SidebarProvider from './Context/SidebarContext'

import './app.css'

export const App = () => (
  <TasksProvider>
    <SidebarProvider>
      <FastNotificationsProvider>
        <AlertsProvider>
          {/* <HeaderSection /> */}
          <Route path='/'>
            <ScanViewProvider>
              <ReoScan />
            </ScanViewProvider>
            <FastNotifications />
          </Route>
        </AlertsProvider>
      </FastNotificationsProvider>
    </SidebarProvider>
  </TasksProvider>
)
