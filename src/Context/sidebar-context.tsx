import { createContext } from 'preact'
import { useState } from 'preact/hooks'

export const SidebarContext = createContext(null)
export const SidebarProvider = ({ children }) => {
  const [show, setShow] = useState(false)

  const toggleSidebar = () => {
    setShow((prev: boolean) => !prev)
  }

  return (
    <SidebarContext.Provider value={{ show, setShow, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
