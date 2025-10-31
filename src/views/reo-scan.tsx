import { ReoContentView } from '../components/reo-content-view'
import { SideNavigation } from '../components/side-navigation'
import { useTasks } from '../hooks/use-tasks'
import { Reo } from '../shared/interfaces/reo.interface'
import { Alerts } from '../shared/interfaces/alerts.interface'
import { scanRowsData1 } from '../data/table-data'
import { useEffect } from 'preact/hooks'
import { useScanView } from '../hooks/use-scan-view'
import { ReoTestData } from '../data/reo-tasks'
import { useFastNotifications } from '../hooks/use-notifications'
import { useAlerts } from '../hooks/use-alerts'
import { journalAlertsData } from '../data/journal-alerts'

import './reo-scan.css'

export interface ReoView {
  show: boolean
  taskId: number
  tabsModel: Reo.Tab[]
}

export const ReoScan = () => {
  const { tasks, addTask } = useTasks()
  const { scanViews, addView } = useScanView()
  const { addAlert } = useAlerts()
  const { showFastNotification, addFastNotification } = useFastNotifications()

  const getTabs = (task: Reo.ScanTask): Reo.Tab[] => {
    return task.types.map((type: Reo.ScanTypes, index: number) => ({
      id: `tabs-with-underline-item-${index}}`,
      label: type,
      data: scanRowsData1,
    }))
  }

  useEffect(() => {
    const emitTestAlerts = async (data: Alerts.AlertType[], testDelay: number) => {
      for (let i = 0; i < data.length; i++) {
        setTimeout(() => {
          data[i].show = false
          addAlert(data[i])
          addFastNotification(data[i])
          showFastNotification(data[i].id)
        }, testDelay * i)
      }
    }

    emitTestAlerts(journalAlertsData, 2000)
  }, [])

  useEffect(() => {
    const loadTasks = async () => {
      for (let i = 0; i < ReoTestData.scanTasks.length; i++) {
        setTimeout(() => {
          addTask(ReoTestData.scanTasks[i])
          addView({
            show: i === 0,
            taskId: ReoTestData.scanTasks[i].id,
            tabsModel: getTabs(ReoTestData.scanTasks[i]),
          })
        }, i * 3000)
      }
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
