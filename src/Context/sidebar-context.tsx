import { createContext } from 'preact'
import { useState } from 'preact/hooks'

export const SidebarContext = createContext(null)
export const SidebarProvider = ({ children }) => {
  const [show, setShow] = useState(false)
  const [prevId, setPrevId] = useState(-1)
  const [currentId, setCurrentId] = useState(0)

  const toggleSidebar = () => {
    console.log(`====> ToggleSidebar`)
    console.log(`CurrentId: ${currentId}`)
    console.log(`PrevId: ${prevId}`)
    console.log(`Show: ${show}`)

    setShow((prev: boolean) => !prev)
  }

  return (
    <SidebarContext.Provider
      value={{ show, currentId, prevId, setPrevId, setCurrentId, toggleSidebar, setShow }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
