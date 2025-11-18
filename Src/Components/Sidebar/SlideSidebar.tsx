import { useSidebar } from './Hooks/UseSidebar'

import './SlideSidebar.css'

interface ISlideSidebarProps {
  children: JSX.Element
}

export function SlideSidebar({ children }: ISlideSidebarProps) {
  const { show } = useSidebar()

  return (
    <div
      className={`slide-sidebar-container w-full ${show ? 'slide-sidebar-container-active' : ''}`}
    >
      {show && children}
    </div>
  )
}
