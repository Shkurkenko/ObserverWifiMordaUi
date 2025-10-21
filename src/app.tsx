import { Link, Route } from 'wouter'
import { ReoScan } from './views/reo-scan'
import { HeaderSection } from './components/header-section'
import { FastNotifications } from './components/fast-alerts/fast-notifications'
import { FastNotificationsProvider } from './Context/fast-notifications-context'
import AlertsProvider from './Context/alert-context'
import SidebarProvider from './Context/sidebar-context'

import './app.css'

export const App = () => (
  <SidebarProvider>
    <FastNotificationsProvider>
      <AlertsProvider>
        {/* <HeaderSection /> */}
        <div class='main'>
          <div class='flex flex-col items-center justify-center'>
            <Route path='/'>
              <ReoScan />
              <FastNotifications />
            </Route>
          </div>
        </div>
      </AlertsProvider>
    </FastNotificationsProvider>
  </SidebarProvider>
)
