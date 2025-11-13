import { ReoSpace } from '../../Shared/Interfaces/Reo.interface'
import { TaskSidebarItem } from './TaskSidebarItem'
import { useTasks } from './UseTasks'
import { AddTask } from './TaskSidebarItemAdd'
import { SearchInput } from '../SearchInput'

import './index.css'

export function TaskSidebar() {
  const { tasks } = useTasks()

  return (
    <div className='task-sidebar h-full w-full'>
      <SearchInput />
      <AddTask />

      <div className='task-list-container scrollbar-thin'>
        <ul className='task-list'>
          {tasks.map((task: ReoSpace.IScanTask) => (
            <TaskSidebarItem task={task} />
          ))}
        </ul>
      </div>
    </div>
  )
}
