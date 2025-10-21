import { createContext } from 'preact'
import { useState, useContext } from 'preact/hooks'

export const SidebarContext = createContext(null)
export const SidebarProvider = ({ children }) => {
  const [show, setShow] = useState(false)

  const toggleSidebar = () => {
    setShow((prev) => !prev)
  }

  return (
    <SidebarContext.Provider value={{ show, toggleSidebar, setShow }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
