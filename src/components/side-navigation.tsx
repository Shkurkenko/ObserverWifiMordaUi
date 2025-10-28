import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { MenubarModel } from './menubar'
import { Menubar } from './menubar'
import { MenubarItem } from './menubar-item'
import { SlideSidebar } from './slide-sidebar'
import { ObserverConfig } from '../config/ObserverConfig/observer-config'
import { useSidebar } from '../hooks/use-sidebar'

import './side-navigation.css'

export function SideNavigation() {
  const [menubarModel, setMenubarModel] = useState<MenubarModel>(ObserverConfig.MenubarConfig)
  const { show, toggleSidebar, showSidebar, hideSidebar } = useSidebar()

  const loadContent = (index: number) => {
    setMenubarModel((prev: MenubarModel) => ({
      ...prev,
      currentIndex: index,
    }))
  }

  const setActiveTab = (index: number) => {
    setMenubarModel((prev: MenubarModel) => ({
      items: prev.items.map((item: MenubarItem) =>
        item.id === index ? { ...item, active: true } : item,
      ),
      currentIndex: index,
    }))
  }

  function menubarHandleClick(clickedIndex: number): void {
    if (!show) showSidebar()

    if (clickedIndex === menubarModel.currentIndex && show) {
      hideSidebar()
    }

    setActiveTab(clickedIndex)
    loadContent(clickedIndex)
  }

  return (
    <>
      <Menubar model={menubarModel} itemOnClick={menubarHandleClick} />
      <SlideSidebar>{menubarModel.items[menubarModel.currentIndex].content}</SlideSidebar>
    </>
  )
}
