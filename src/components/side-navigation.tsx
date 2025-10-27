import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { Menubar } from './menubar'
import { MenubarModel } from './menubar'
import { SlideSidebar } from './slide-sidebar'
import { ObserverConfig } from '../config/ObserverConfig/observer-config'
import { useSidebar } from '../hooks/use-sidebar'

import './side-navigation.css'

export function SideNavigation() {
  const [menubarModel, setMenubarModel] = useState<MenubarModel>(ObserverConfig.MenubarConfig)
  const [isSwitch, setSwitch] = useState<boolean>(false)
  const { show, toggleSidebar, showSidebar, hideSidebar } = useSidebar()

  const loadContent = (index: number) => {
    setMenubarModel((prev: MenubarModel) => ({
      ...prev,
      currentIndex: index,
    }))
  }

  function menubarHandleClick(clickedIndex: number): void {
    showSidebar()
    loadContent(clickedIndex)
  }

  return (
    <>
      <Menubar model={menubarModel} itemOnClick={menubarHandleClick} />
      <SlideSidebar>{menubarModel.items[menubarModel.currentIndex].content}</SlideSidebar>
    </>
  )
}
