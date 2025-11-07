import { useContext } from 'preact/hooks'
import { TableContext } from '../context/table-context'

export function useTable(): TableContext {
  const {
    rows,
    headers,
    currentSelctedRow,
    currentSelectedColumn,
    currentSlectedCell,
    setHeaders,
    addRow,
    deleteRow,
    clearRows,
    selectColumn,
    selectCell,
    selectRow,
    renderEmpty,
    setDefaultHeaders,
    mockAddRows,
  } = useContext(TableContext)

  return {
    rows,
    headers,
    currentSelctedRow,
    currentSelectedColumn,
    currentSlectedCell,
    setHeaders,
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
