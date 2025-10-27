import { createContext } from 'preact'
import { useState } from 'preact/hooks'

export const SidebarContext = createContext(null)
export const SidebarProvider = ({ children }) => {
  const [show, setShow] = useState(false)

  const toggleSidebar = () => {
    setShow((prev: boolean) => !prev)
  }

  const showSidebar = () => {
    setShow((prev: boolean) => true)
  }

  const hideSidebar = () => {
    setShow((prev: boolean) => false)
  }

  return (
    <SidebarContext.Provider value={{ show, setShow, toggleSidebar, showSidebar, hideSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
