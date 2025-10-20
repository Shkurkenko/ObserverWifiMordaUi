import { createContext } from 'preact'
import { useState, useContext } from 'preact/hooks'

const SidebarContext = createContext(null)
export const SidebarProvider = ({ children }) => {
  const [show, setShow] = useState(true)

  const toggleSidebar = () => {
    setShow((prev) => !prev)
  }

  return (
    <SidebarContext.Provider value={{ show, toggleSidebar, setShow }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const { show, toggleSidebar, setShow } = useContext(SidebarContext)

  return { show, toggleSidebar, setShow }
}

export default SidebarProvider
