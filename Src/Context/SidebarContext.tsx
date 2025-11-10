import { createContext, ComponentChildren } from 'preact'
import { useCallback, useState } from 'preact/hooks'

interface SidebarProviderProps {
  children: ComponentChildren
}

export const SidebarContext = createContext(null)
export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [show, setShow] = useState(false)

  const toggleSidebar = useCallback(() => {
    setShow((prev: boolean) => !prev)
  }, [])

  const showSidebar = useCallback(() => {
    setShow((prev: boolean) => true)
  }, [])

  const hideSidebar = useCallback(() => {
    setShow((prev: boolean) => false)
  }, [])

  return (
    <SidebarContext.Provider value={{ show, setShow, toggleSidebar, showSidebar, hideSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
