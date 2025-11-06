import { useContext } from 'preact/hooks'
import { ObserverTableContext } from '../context/table-context'

export const useTable = (): ObserverTableContext => {
  const {
    rows,
    headers,
    currentSelctedRow,
    currentSelectedColumn,
    currentSlectedCell,
    addRow,
    deleteRow,
    clearRows,
    selectColumn,
    selectCell,
    selectRow,
    renderEmpty,
    setDefaultHeaders,
    mockAddRows,
  } = useContext(ObserverTableContext)

  return {
    rows,
    headers,
    currentSelctedRow,
    currentSelectedColumn,
    currentSlectedCell,
    addRow,
    deleteRow,
    clearRows,
    selectColumn,
    selectRow,
    selectCell,
    renderEmpty,
    setDefaultHeaders,
    mockAddRows,
  }
}
