import { createContext } from 'preact'
import { useCallback, useState } from 'preact/hooks'
import { TableSpace } from '../../../Shared/Interfaces/Table.interface'
import { MockGenHelpers } from '../../../Utils/MockGen'

export interface ITableContext {
  rows: TableSpace.IRow[]
  headers: TableSpace.IHeader[]
  currentSelectedRow: { rowIndex: number }
  currentSelectedColumn: { colIndex: number }
  currentSelectedCell: { rowIndex: number; colIndex: number }
  setHeaders: (headers: TableSpace.IHeader[]) => void
  setDefaultHeaders: () => void
  addRow: (row: TableSpace.IRow) => void
  deleteRow: (index: number) => void
  clearRows: () => void
  selectColumn: (colIndex: number) => void
  selectRow: (rowIndex: number) => void
  selectCell: (coords: TableSpace.IPoint) => void
  mockAddRows: (interval: number, count: number) => void
  renderEmpty: () => JSX.Element
}

export const TableContext = createContext<ITableContext>(null)

export const TableProvider = ({ children, data, renderEmpty }) => {
  const [rows, setRows] = useState([])

  const [currentSelectedRow, setCurrentSelectedRow] = useState<{ rowIndex: number }>({
    rowIndex: -1,
  })

  const [currentSelectedColumn, setCurrentSelectedColumn] = useState<{ colIndex: number }>({
    colIndex: -1,
  })

  const [currentSelectedCell, setCurrentSelectedCell] = useState<TableSpace.IPoint>({
    rowIndex: -1,
    colIndex: -1,
  })

  const [headers, setHeaders] = useState<TableSpace.IHeader[]>([])

  const mockAddRows = useCallback((interval: number, count: number) => {
    MockGenHelpers.processRowAddition(interval, count, addRow)
  }, [])

  const setDefaultHeaders = useCallback(() => {
    setHeaders(
      data.length > 0
        ? data[0].columns.map((column: TableSpace.IColumn) =>
            column.type !== TableSpace.IColumnTypes.Enum
              ? {
                  label: column.role.toUpperCase(),
                }
              : null,
          )
        : [],
    )
  }, [])

  const addRow = useCallback((row: TableSpace.IRow) => {
    setRows((prev) => [...prev, row])
  }, [])

  const deleteRow = useCallback((rowIndex: number) => {
    setRows((prev) => prev.filter((_, index) => index !== rowIndex))
  }, [])

  const clearRows = useCallback(() => {
    setRows((prev) => [])
  }, [])

  const selectCell = useCallback((coords: TableSpace.IPoint) => {
    setCurrentSelectedCell(coords)
  }, [])

  const selectColumn = useCallback((colIndex: number) => {
    setCurrentSelectedColumn({ colIndex })
  }, [])

  const selectRow = useCallback((rowIndex: number) => {
    setCurrentSelectedRow({ rowIndex })
  }, [])

  return (
    <TableContext.Provider
      value={{
        rows,
        headers,
        currentSelectedColumn,
        currentSelectedRow,
        currentSelectedCell,
        setHeaders,
        addRow,
        deleteRow,
        clearRows,
        selectColumn,
        selectRow,
        renderEmpty,
        setDefaultHeaders,
        mockAddRows,
        selectCell,
      }}
    >
      {children}
    </TableContext.Provider>
  )
}

export default TableProvider
