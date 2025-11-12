import { useContext } from 'preact/hooks'
import { TasksContext } from '../../Context/TasksContext'

export const useTasks = () => {
  const {
    tasks,
    setTasks,
    addTask,
    deleteTask,
    setTaskStatus,
    startTask,
    stopTask,
    waitTask,
    failTask,
  } = useContext(TasksContext)

  return {
    tasks,
    setTasks,
    addTask,
    deleteTask,
    setTaskStatus,
    startTask,
    stopTask,
    waitTask,
    failTask,
  }
}
