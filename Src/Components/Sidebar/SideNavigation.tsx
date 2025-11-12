import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { IMenubarModel } from '../Menubar'
import { Menubar } from '../Menubar'
import { IMenubarItem } from '../Menubar/MenubarItem'
import { SlideSidebar } from './SlideSidebar'
import { ObserverConfig } from '../../Config/ObserverConfig'
import { useSidebar } from './Hooks/UseSidebar'

import './SideNavigation.css'

export function SideNavigation() {
  const [menubarModel, setMenubarModel] = useState<IMenubarModel>(ObserverConfig.MenubarConfig)
  const { show, showSidebar, hideSidebar } = useSidebar()

  const loadContent = (index: number) => {
    setMenubarModel((prev: IMenubarModel) => ({
      ...prev,
      currentIndex: index,
    }))
  }

  const setActiveTab = (index: number) => {
    setMenubarModel((prev: IMenubarModel) => ({
      items: prev.items.map((item: IMenubarItem) =>
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
      <SlideSidebar>
        {show ? menubarModel.items[menubarModel.currentIndex].content : <></>}
      </SlideSidebar>
    </>
  )
}
