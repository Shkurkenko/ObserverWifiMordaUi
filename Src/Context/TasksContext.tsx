import { createContext, ComponentChildren } from 'preact'
import { useState } from 'preact/hooks'
import { ReoSpace } from '../Shared/Interfaces/Reo.interface'

interface TaskProviderProps {
  children: ComponentChildren
}

export const TasksContext = createContext(null)
export const TasksProvider = ({ children }: TaskProviderProps) => {
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
