import { useState } from 'preact/hooks'
import { Menubar } from './menubar'
import { MenubarItem } from './menubar-item'
import { MenubarModel } from './menubar'
import { SlideSidebar } from './slide-sidebar'
import { TaskSidebar } from './task-sidebar'
import { Journal } from './journal'
import { ObserverConfig } from '../config/ObserverConfig/observer-config'
import { Reo } from '../shared/interfaces/reo.interface'
import { ReoTestData } from '../data/reo-tasks'

import './side-navigation.css'

export function SideNavigation() {
  const [menubarModel, setMenubarModel] = useState<MenubarModel>(ObserverConfig.MenubarConfig)

  function menubarHandleClick(clickedIndex: number): void {
    setMenubarModel((prev: MenubarModel) => ({ ...prev, currentIndex: clickedIndex }))
  }

  const renderMenubarContent = (item: MenubarItem): JSX.Element => {
    switch (item.role) {
      case Reo.MenubarSetup.TaskManager:
        return <TaskSidebar reoScanTaskListModel={ReoTestData.scanTasks} />
      case Reo.MenubarSetup.Notifications:
        return <Journal />
      default:
        return <h1>Странная тема</h1>
    }
  }

  return (
    <>
      <Menubar model={menubarModel} itemOnClick={menubarHandleClick} />
      <SlideSidebar>
        {renderMenubarContent(menubarModel.items[menubarModel.currentIndex])}
      </SlideSidebar>
    </>
  )
}
