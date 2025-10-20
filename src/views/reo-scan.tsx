import { useEffect, useState } from 'preact/hooks'
import { TaskSidebar } from '../components/task-sidebar'
import { Menubar } from '../components/menubar'
import { Journal } from '../components/journal'
import { SlideSidebar } from '../components/slide-sidebar'
import { ReoContentView } from '../components/reo-content-view'

import { scanRows } from '../components/example-row-data'
import { anotherRows } from '../components/example-row-data-another'

import { useSidebar } from '../Context/sidebar-context'

import './reo-scan.css'

export enum ReoMenuBarSetup {
  Notifications = 'Notifications',
  TaskManager = 'TaskManager',
}

export enum ReoScanTypes {
  Gsm = 'GSM',
  Lte = 'LTE',
  Umts = 'UMTS',
  Bluetooth = 'Bluetooth',
  Wifi = 'WiFi',
  FiveG = '5G',
}

export enum ReoScanStatusTypes {
  Running,
  Pending,
  Failed,
}

export const ReoScan = () => {
  const [wssRows, setWssRow] = useState(scanRows)
  const [menubarCurrentIndex, setMenubarCurrentIndex] = useState(0)
  const { show, toggleSidebar } = useSidebar()

  const menubarModel = [
    {
      id: 0,
      role: ReoMenuBarSetup.TaskManager,
      icon: (
        <svg
          class='w-9 h-9 text-gray-800 dark:text-white'
          aria-hidden='true'
          width='24'
          height='24'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M6 6h8m-8 4h12M6 14h8m-8 4h12'
          />
        </svg>
      ),
    },
    {
      id: 1,
      role: ReoMenuBarSetup.Notifications,
      icon: (
        <svg
          class='w-6 h-6 text-gray-800 dark:text-white'
          aria-hidden='true'
          width='24'
          height='24'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z'
          />
        </svg>
      ),
    },
  ]

  const reoScanTaskListModel = [
    {
      name: 'Сканирование #1',
      date: '22.04.24',
      time: '13:04',
      types: [ReoScanTypes.Gsm, ReoScanTypes.Lte, ReoScanTypes.FiveG],
      status: ReoScanStatusTypes.Running,
    },
    {
      name: 'Сканирование #2',
      date: '23.04.24',
      time: '16:34',
      types: [ReoScanTypes.Gsm, ReoScanTypes.Lte, ReoScanTypes.Umts],
      status: ReoScanStatusTypes.Running,
    },
    {
      name: 'Сканирование #3',
      date: '24.04.24',
      time: '10:23',
      types: [
        ReoScanTypes.Gsm,
        ReoScanTypes.Lte,
        ReoScanTypes.Umts,
        ReoScanTypes.Bluetooth,
        ReoScanTypes.Wifi,
        ReoScanTypes.FiveG,
      ],
      status: ReoScanStatusTypes.Pending,
    },
    {
      name: 'Сканирование #4',
      date: '25.04.24',
      time: '18:12',
      types: [ReoScanTypes.Gsm, ReoScanTypes.Lte, ReoScanTypes.Umts],
      status: ReoScanStatusTypes.Pending,
    },
    {
      name: 'Сканирование #5',
      date: '26.04.24',
      time: '11:55',
      types: [ReoScanTypes.Gsm, ReoScanTypes.Lte],
      status: ReoScanStatusTypes.Pending,
    },
    {
      name: 'Сканирование #6',
      date: '27.04.24',
      time: '12:09',
      types: [ReoScanTypes.Gsm, ReoScanTypes.Lte, ReoScanTypes.Umts, ReoScanTypes.Wifi],
      status: ReoScanStatusTypes.Failed,
    },
    {
      name: 'Сканирование #7',
      date: '28.04.24',
      time: '17:07',
      types: [ReoScanTypes.Gsm, ReoScanTypes.Umts],
      status: ReoScanStatusTypes.Failed,
    },
  ]

  const reoScanTabsModel = [
    { id: 'tabs-with-underline-item-1', label: 'GSM', data: scanRows },
    { id: 'tabs-with-underline-item-2', label: 'LTE', data: anotherRows },
    { id: 'tabs-with-underline-item-3', label: 'UMTS', data: scanRows },
    { id: 'tabs-with-underline-item-4', label: 'WiFi', data: anotherRows },
    { id: 'tabs-with-underline-item-5', label: 'Bluetooth', data: anotherRows },
    { id: 'tabs-with-underline-item-6', label: '5G', data: scanRows },
  ]

  const menuClickCounter = new Map<number, number>()

  function menubarHandleClick(clickedIndex: number) {
    setMenubarCurrentIndex(clickedIndex)
  }

  const renderMenubarContent = (item) => {
    switch (item.role) {
      case ReoMenuBarSetup.TaskManager:
        return <TaskSidebar reoScanTaskListModel={reoScanTaskListModel} />
      case ReoMenuBarSetup.Notifications:
        return <Journal />
      default:
        return <h1>Странная тема</h1>
    }
  }

  return (
    <div className='reo-scan-container w-full flex'>
      <Menubar
        model={menubarModel}
        itemOnClick={menubarHandleClick}
        currentIndex={menubarCurrentIndex}
      />
      <SlideSidebar>{renderMenubarContent(menubarModel[menubarCurrentIndex])}</SlideSidebar>
      <ReoContentView model={reoScanTabsModel} />
    </div>
  )
}
