import { createContext } from 'preact'
import { useState } from 'preact/hooks'
import { Reo } from '../shared/interfaces/reo.interface'

export const TasksContext = createContext(null)
export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState<Reo.ScanTask[]>([])

  const addTask = (task: Reo.ScanTask) => {
    console.log('New task: ', task)
    setTasks((prev: Reo.ScanTask[]) => [...prev, task])
  }

  const deleteTask = (id: number) => {
    setTasks((prev: Reo.ScanTask[]) => prev.filter((task: Reo.ScanTask) => task.id !== id))
  }

  const setTaskStatus = (id: number, status: Reo.ScanStatusTypes) => {
    setTasks((prev: Reo.ScanTask[]) =>
      prev.map((task: Reo.ScanTask) => (id === task.id ? { ...task, status } : task)),
    )
  }

  const startTask = (id: number) => {
    setTaskStatus(id, Reo.ScanStatusTypes.Running)
  }

  const stopTask = (id: number) => {
    setTaskStatus(id, Reo.ScanStatusTypes.Finished)
  }

  const waitTask = (id: number) => {
    setTaskStatus(id, Reo.ScanStatusTypes.Pending)
  }

  const failTask = (id: number) => {
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
