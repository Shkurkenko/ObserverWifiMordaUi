import { useContext } from 'preact/hooks'
import { TasksContext } from '../Context/tasks-context'

export const useTasks = () => {
  const {
    tasks,
    setTasks,
    addTasks,
    deleteTasks,
    setTaskStatus,
    startTask,
    stopTask,
    waitTask,
    failTask,
  } = useContext(TasksContext)

  return {
    tasks,
    setTasks,
    addTasks,
    deleteTasks,
    setTaskStatus,
    startTask,
    stopTask,
    waitTask,
    failTask,
  }
}
