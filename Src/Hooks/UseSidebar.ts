import { useContext } from 'preact/hooks'
import { SidebarContext } from '../Context/SidebarContext'

export const useSidebar = () => {
  const {
    show,
    currentId,
    prevId,
    setPrevId,
    setCurrentId,
    toggleSidebar,
    setShow,
    showSidebar,
    hideSidebar,
  } = useContext(SidebarContext)

  return {
    show,
    currentId,
    prevId,
    setPrevId,
    setCurrentId,
    toggleSidebar,
    setShow,
    showSidebar,
    hideSidebar,
  }
}
