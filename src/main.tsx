import { render } from 'preact'
import { App } from './app'

import './index.css'
import '/node_modules/flag-icons/css/flag-icons.min.css'

render(<App />, document.getElementById('app')!)
