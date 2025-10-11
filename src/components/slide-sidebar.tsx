import { useState } from 'preact/hooks'

import './slide-sedebar.css'

export function SlideSidebar({ show, children }) {
  const [isShow, setIsShow] = useState(show)

  return (
    <div className={`slide-sidebar-container ${isShow && 'slide-sidebar-container-active'}`}>
      {isShow && children}
    </div>
  )
}
