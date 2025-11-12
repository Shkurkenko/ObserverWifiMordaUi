import { createContext, ComponentChildren } from 'preact'
import { useState } from 'preact/hooks'
import { ReoSpace } from '../Shared/Interfaces/Reo.interface'

interface ITasksContext {
  tasks: ReoSpace.IScanTask[]

  setTasks: (tasks: ReoSpace.IScanTask[]) => void

  addTask: (task: ReoSpace.IScanTask) => void

  deleteTask: (id: string) => void

  setTaskStatus: (id: string, status: ReoSpace.IScanStatusTypes) => void

  startTask: (id: string) => void

  stopTask: (id: string) => void

  waitTask: (id: string) => void

  failTask: (id: string) => void
}

interface ITaskProviderProps {
  children: ComponentChildren
}

export const TasksContext = createContext<ITasksContext | null>(null)
export const TasksProvider = ({ children }: ITaskProviderProps) => {
  const [tasks, setTasks] = useState<ReoSpace.IScanTask[]>([])

  const addTask = (task: ReoSpace.IScanTask) => {
    setTasks((prev: ReoSpace.IScanTask[]) => [...prev, task])
  }

  const deleteTask = (id: string) => {
    setTasks((prev: ReoSpace.IScanTask[]) =>
      prev.filter((task: ReoSpace.IScanTask) => task.id !== id),
    )
  }

  const setTaskStatus = (id: string, status: ReoSpace.IScanStatusTypes) => {
    setTasks((prev: ReoSpace.IScanTask[]) =>
      prev.map((task: ReoSpace.IScanTask) => (id === task.id ? { ...task, status } : task)),
    )
  }

  const startTask = (id: string) => {
    setTaskStatus(id, ReoSpace.IScanStatusTypes.Running)
  }

  const stopTask = (id: string) => {
    setTaskStatus(id, ReoSpace.IScanStatusTypes.Finished)
  }

  const waitTask = (id: string) => {
    setTaskStatus(id, ReoSpace.IScanStatusTypes.Pending)
  }

  const failTask = (id: string) => {
    setTaskStatus(id, ReoSpace.IScanStatusTypes.Failed)
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        deleteTask,
        setTaskStatus,
        startTask,
        stopTask,
        waitTask,
        failTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider
