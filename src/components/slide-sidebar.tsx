import { useSidebar } from '../hooks/use-sidebar'
import './slide-sedebar.css'

export function SlideSidebar({ children }) {

  const { show } = useSidebar()

  return (
    <div className={`slide-sidebar-container ${show ? 'slide-sidebar-container-active' : ''}`}>
      {show && children}
    </div>
  )
}
