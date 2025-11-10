import { useContext } from 'preact/hooks'
import { TableContext, ITableContext } from '../Context/TableContext'

export function useTable(): ITableContext {
  const {
    rows,
    headers,
    currentSelectedRow,
    currentSelectedColumn,
    currentSelectedCell,
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
    currentSelectedRow,
    currentSelectedColumn,
    currentSelectedCell,
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
