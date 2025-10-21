import { useContext } from 'preact/hooks'
import { SidebarContext } from '../Context/sidebar-context'

export const useSidebar = () => {
  const { show, toggleSidebar, setShow } = useContext(SidebarContext)

  return { show, toggleSidebar, setShow }
}
