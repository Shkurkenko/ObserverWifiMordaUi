import { Link, Route } from 'wouter'
import { ReoScan } from './views/reo-scan'
import { HeaderSection } from './components/header-section'
import AlertsProvider from './Context/alert-context'

import './app.css'

export const App = () => (
  <AlertsProvider>
    <div>
      {/* <HeaderSection /> */}
      <div class='main'>
        <div class='flex flex-col items-center justify-center'>
          <Route path='/'>
            <ReoScan />
          </Route>
        </div>
      </div>
    </div>
  </AlertsProvider>
)

const InboxPage = () => <div>inbox</div>
