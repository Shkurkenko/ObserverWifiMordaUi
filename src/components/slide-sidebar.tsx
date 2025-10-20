import { useSidebar } from '../Context/sidebar-context'

import './slide-sedebar.css'

export function SlideSidebar({ children }) {

  const { show } = useSidebar()

  return (
    <div className={`slide-sidebar-container ${show && 'slide-sidebar-container-active'}`}>
      {show && children}
    </div>
  )
}
