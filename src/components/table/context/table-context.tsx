import { createContext } from 'preact'
import { useCallback, useState } from 'preact/hooks'
import { Reo } from '../../../shared/interfaces/reo.interface'
import { Table } from '../../../shared/interfaces/table.interface'

export interface TableContext {
  rows: ReoTableRow[]
  headers: ReoTableHeader[]
  currentSelctedRow: { rowIndex: number }
  currentSelectedColumn: { colIndex: number }
  currentSlectedCell: { rowIndex: number; colIndex: number }
  setHeaders: ()
  addRow: (row: Table.Row) => void
  deleteRow: (index: number) => void
  clearRows: () => void
  selectColumn: (colIndex: number) => void
  selectRow: (rowIndex: number) => void
  selectCell: (coords: Table.Point) => void
  setDefaultHeaders: () => void
  mockAddRows: (interval: number) => void
  renderEmpty: () => JSX.Element
}

export const TableContext = createContext<TableContext>(null)

export const TableProvider = ({ children, data, renderEmpty }) => {
  const [rows, setRows] = useState([])

  const [currentSelectedRow, setCurrentSelectedRow] = useState<{ rowIndex: number }>({
    rowIndex: -1,
  })

  const [currentSelectedColumn, setCurrentSelectedColumn] = useState<{ colIndex: number }>({
    colIndex: -1,
  })

  const [currentSelectedCell, setCurrentSelectedCell] = useState<Table.Point>({
    rowIndex: -1,
    colIndex: -1,
  })

  const [headers, setHeaders] = useState<Table.Header[]>([
    /* { label: 'CID' }, ... */
  ])

  const mockAddRows = useCallback((interval: number) => {
    if (data.length === 0) return

    for (let i = 0; i < data.length; i++) {
      setTimeout(() => {
        addRow(data[i])
      }, i * interval)
    }
  }, [])

  const setDefaultHeaders = useCallback(() => {
    setHeaders(
      data.length > 0
        ? data[0].columns.map((column: Table.Column) =>
            column.type !== Table.ColumnTypes.Enum
              ? {
                  label: column.role.toUpperCase(),
                }
              : null,
          )
        : [],
    )
  }, [])

  const addRow = useCallback((row: Table.Row[]) => {
    setRows((prev) => [...prev, row])
  }, [])

  const deleteRow = useCallback((rowIndex: number) => {
    setRows((prev) => prev.filter((_, index) => index !== rowIndex))
  }, [])

  const clearRows = useCallback(() => {
    setRows((prev) => [])
  }, [])

  const selectCell = useCallback((coords: TablePoint) => {
    setCurrentSelectedCell(coords)
  }, [])

  const selectColumn = useCallback((colIndex: number) => {
    setCurrentSelectedColumn({ colIndex })
  }, [])

  const selectRow = useCallback((rowIndex: number) => {
    setCurrentSelectedRow({ rowIndex })
  }, [])

  return (
    <ObserverTableContext.Provider
      value={{
        rows,
        headers,
        setHeaders,
        currentSelectedColumn,
        setCurrentSelectedColumn,
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
    </ObserverTableContext.Provider>
  )
}
