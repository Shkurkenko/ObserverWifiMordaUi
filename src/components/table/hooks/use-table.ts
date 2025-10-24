import { useContext } from 'preact/hooks'
import { ObserverTableContext } from '../context/table-context'

export const useTable = () => {
  const {
    rows,
    headers,
    addRow,
    deleteRow,
    clearRows,
    selectColumn,
    currentSelectedColumn,
    setCurrentSelectedColumn,
    selectRow,
    renderEmpty,
  } = useContext(ObserverTableContext)

  return {
    rows,
    headers,
    addRow,
    deleteRow,
    clearRows,
    selectColumn,
    currentSelectedColumn,
    setCurrentSelectedColumn,
    selectRow,
    renderEmpty,
  }
}
