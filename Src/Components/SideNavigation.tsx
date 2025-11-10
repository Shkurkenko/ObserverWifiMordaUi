import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { MenubarModel } from './Menubar'
import { Menubar } from './Menubar'
import { MenubarItem } from './MenubarItem'
import { SlideSidebar } from './SlideSidebar'
import { ObserverConfig } from '../Config/ObserverConfig'
import { useSidebar } from '../Hooks/UseSidebar'

import './side-navigation.css'

export function SideNavigation() {
  const [menubarModel, setMenubarModel] = useState<MenubarModel>(ObserverConfig.MenubarConfig)
  const { show, showSidebar, hideSidebar } = useSidebar()

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
    if (!show) {
      showSidebar()
    }

    if (clickedIndex === menubarModel.currentIndex && show) {
      hideSidebar()
    }

    loadContent(clickedIndex)
  }

  return (
    <>
      <Menubar model={menubarModel} itemOnClick={menubarHandleClick} />
      <SlideSidebar>{show && menubarModel.items[menubarModel.currentIndex].content}</SlideSidebar>
    </>
  )
}
