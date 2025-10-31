import { createContext } from 'preact'
import { useState } from 'preact/hooks'
import { Reo } from '../shared/interfaces/reo.interface'

export const TasksContext = createContext(null)
export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState<Reo.ScanTask[]>([])

  const addTask = (task: Reo.ScanTask) => {
    setTasks((prev: Reo.ScanTask[]) => [...prev, task])
  }

  const deleteTask = (id: string) => {
    setTasks((prev: Reo.ScanTask[]) => prev.filter((task: Reo.ScanTask) => task.id !== id))
  }

  const setTaskStatus = (id: string, status: Reo.ScanStatusTypes) => {
    setTasks((prev: Reo.ScanTask[]) =>
      prev.map((task: Reo.ScanTask) => (id === task.id ? { ...task, status } : task)),
    )
  }

  const startTask = (id: string) => {
    setTaskStatus(id, Reo.ScanStatusTypes.Running)
  }

  const stopTask = (id: string) => {
    setTaskStatus(id, Reo.ScanStatusTypes.Finished)
  }

  const waitTask = (id: string) => {
    setTaskStatus(id, Reo.ScanStatusTypes.Pending)
  }

  const failTask = (id: string) => {
    setTaskStatus(id, Reo.ScanStatusTypes.Failed)
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
