import { ReoContentView } from '../components/reo-content-view'
import { SideNavigation } from '../components/side-navigation'
import { useTasks } from '../hooks/use-tasks'
import { Reo } from '../shared/interfaces/reo.interface'
import { scanRowsData1 } from '../data/table-data'
import { useEffect } from 'preact/hooks'
import { useScanView } from '../hooks/use-scan-view'
import { ReoTestData } from '../data/reo-tasks'

import './reo-scan.css'

export interface ReoView {
  show: boolean
  taskId: number
  tabsModel: Reo.Tab[]
}

export const ReoScan = () => {
  const { tasks, addTask } = useTasks()
  const { scanViews, addView } = useScanView()

  const getTabs = (task: Reo.ScanTask): Reo.Tab[] => {
    return task.types.map((type: Reo.ScanTypes, index: number) => ({
      id: `tabs-with-underline-item-${index}}`,
      label: type,
      data: scanRowsData1,
    }))
  }

  const loadTasks = () => {
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

  useEffect(() => {
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
