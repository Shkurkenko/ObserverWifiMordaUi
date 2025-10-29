import { ReoContentView } from '../components/reo-content-view'
import { SideNavigation } from '../components/side-navigation'
import { useTasks } from '../hooks/use-tasks'
import { Reo } from '../shared/interfaces/reo.interface'
import { scanRowsData1 } from '../data/table-data'
import { useEffect, useState } from 'preact/hooks'

import './reo-scan.css'

export interface ReoView {
  show: boolean
  taskId: number
  tabsModel: Reo.Tab[]
}

export const ReoScan = () => {
  const { tasks } = useTasks()
  const [reoViews, setReoViews] = useState<ReoView[]>([])

  const getTabs = (task: Reo.ScanTask): Reo.Tab[] => {
    return task.types.map((type: Reo.ScanTypes, index: number) => ({
      id: `tabs-with-underline-item-${index}}`,
      label: type,
      data: scanRowsData1,
    }))
  }

  const getReoViewsFromTasks = (tasks: Reo.ScanTask[]): ReoView[] => {
    const reoViews = []
    for (let i = 0; i < tasks.length; i++) {
      reoViews.push({
        show: i === 0 ? true : false,
        taskId: tasks[i].id,
        tabsModel: getTabs(tasks[i]),
      })
    }
    return reoViews
  }

  useEffect(() => {
    setReoViews((prev) => getReoViewsFromTasks(tasks))
  }, [tasks])

  return (
    <div className='reo-scan-container w-full flex'>
      <SideNavigation />
      {reoViews.map((view: ReoView) => (
        <ReoContentView model={view} />
      ))}
    </div>
  )
}
