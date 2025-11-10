import { ReoContentView } from '../Components/ReoContentView'
import { SideNavigation } from '../Components/SideNavigation'
import { useTasks } from '../Hooks/UseTasks'
import { ReoSpace } from '../Shared/Interfaces/Reo.interface'
import { ITab } from '../Shared/Interfaces/Main.interface'
import { Alerts } from '../Shared/Interfaces/Alerts.interface'
import { scanRowsData1 } from '../Data/TableData'
import { useEffect } from 'preact/hooks'
import { useScanView } from '../Hooks/UseScanView'
import { useFastNotifications } from '../Hooks/UseNotifications'
import { useAlerts } from '../Hooks/UseAlerts'
import { journalAlertsData } from '../Data/JournalAlerts'

import './reo-scan.css'
import { MockGenHelpers } from '../Utils/MockGen'
import { runWithInterval } from '../Utils/Helpers'

export interface ReoView {
  show: boolean
  taskId: number
  tabsModel: ITab[]
}

export const ReoScan = () => {
  const { tasks, addTask } = useTasks()
  const { scanViews, addView } = useScanView()
  const { addAlert } = useAlerts()
  const { addFastNotification } = useFastNotifications()

  const getTabs = (task: ReoSpace.IScanTask): ITab[] => {
    return task.types.map((type: ReoSpace.IScanTypes, index: number) => ({
      id: `tabs-with-underline-item-${index}}`,
      label: type,
      data: scanRowsData1,
    }))
  }

  const addReoTask = (task: ReoSpace.IScanTask) => {
    addTask(task)
    addView({
      show: scanViews.length === 0,
      taskId: task.id,
      tabsModel: getTabs(task),
    })
  }

  const emitTestAlerts = async (data: Alerts.IAlertType[], testDelay: number) => {
    for (let i = 0; i < data.length; i++) {
      setTimeout(() => {
        addAlert(data[i])
        addFastNotification(data[i])
      }, testDelay * i)
    }
  }

  useEffect(() => {
    emitTestAlerts(journalAlertsData, 1000)
  }, [journalAlertsData])

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = MockGenHelpers.generateMockScanTasks(10)
      runWithInterval<ReoSpace.IScanTask>(tasks, 3000, 30, (task: ReoSpace.IScanTask) => {
        addReoTask(task)
      })
    }
    loadTasks()
  }, [])

  return (
    <div className='reo-scan-container w-full flex'>
      <SideNavigation />
      {tasks.length !== 0 &&
        scanViews.length !== 0 &&
        scanViews.map((view: ReoView, index: number) => (
          <ReoContentView header={tasks[index].name} model={view} />
        ))}
    </div>
  )
}
