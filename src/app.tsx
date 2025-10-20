import { Link, Route } from 'wouter'
import { ReoScan } from './views/reo-scan'
import { HeaderSection } from './components/header-section'
import { FastNotifications, FastNotificationsProvider } from './components/fast-notifications'
import AlertsProvider from './Context/alert-context'
import SidebarProvider from './Context/sidebar-context'

import './app.css'

export const App = () => (
  <SidebarProvider>
    <FastNotificationsProvider>
      <AlertsProvider>
        <div>
          {/* <HeaderSection /> */}
          <div class='main'>
            <div class='flex flex-col items-center justify-center'>
              <Route path='/'>
                <ReoScan />
                <FastNotifications />
              </Route>
            </div>
          </div>
        </div>
      </AlertsProvider>
    </FastNotificationsProvider>
  </SidebarProvider>
)
