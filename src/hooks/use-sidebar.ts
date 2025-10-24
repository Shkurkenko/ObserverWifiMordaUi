import { useContext } from 'preact/hooks'
import { SidebarContext } from '../Context/sidebar-context'

export const useSidebar = () => {
  const { show, currentId, prevId, setPrevId, setCurrentId, toggleSidebar, setShow } =
    useContext(SidebarContext)

  return { show, currentId, prevId, setPrevId, setCurrentId, toggleSidebar, setShow }
}
