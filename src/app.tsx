import { Route } from 'wouter'
import { ReoScan } from './views/reo-scan'
import { HeaderSection } from './components/header-section'
import { FastNotifications } from './components/fast-alerts/fast-notifications'
import { FastNotificationsProvider } from './Context/fast-notifications-context'
import { TasksProvider } from './Context/tasks-context'
import ScanViewProvider from './Context/reo-scan-view-context'
import AlertsProvider from './Context/alert-context'
import SidebarProvider from './Context/sidebar-context'

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
