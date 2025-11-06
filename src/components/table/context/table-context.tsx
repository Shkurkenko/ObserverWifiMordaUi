import { createContext } from 'preact'
import { useCallback, useState } from 'preact/hooks'
import { TableColumnTypes } from '../table-body'
import { Reo } from '../../../shared/interfaces/reo.interface'

export interface TablePoint {
  rowIndex: number
  colIndex: number
}

export interface TableHeader {
  label: string
  role: string
}

export enum TableRowStatus {
  Normal = 'normal',
  Highlighted = 'highlighted',
  Disabled = 'disabled',
}

export enum ReoTableRowStatus {
  Legit = 'legit',
  Illegit = 'illegit',
  Unknown = 'unknown',
}

export type ReoRowStatus = TableRowStatus | ReoTableRowStatus

export interface TableRow {
  columns: Array<{ type: TableColumnTypes; data: any }>
  status: ReoRowStatus
}

export interface ReoTableHeader extends TableHeader {
  role: Reo.Roles
}

export interface ReoTableRow {
  columns: ReoColumn[]
  status: ReoRowStatus
}
export interface ReoColumn {
  type: TableColumnTypes
  role: Reo.Roles
  data: any
}
export interface ObserverTableContext {
  rows: ReoTableRow[]
  headers: ReoTableHeader[]
  currentSelctedRow: { rowIndex: number }
  currentSelectedColumn: { colIndex: number }
  currentSlectedCell: { rowIndex: number; colIndex: number }
  addRow: (row: ReoTableRow) => void
  deleteRow: (index: number) => void
  clearRows: () => void
  selectColumn: (colIndex: number) => void
  selectRow: (rowIndex: number) => void
  selectCell: (coords: TablePoint) => void
  setDefaultHeaders: () => void
  mockAddRows: (interval: number) => void
  renderEmpty: () => JSX.Element
}

export const ObserverTableContext = createContext<ObserverTableContext>(null)

export const ObserverTableProvider = ({ children, data, renderEmpty }) => {
  const [rows, setRows] = useState([])

  const [currentSelectedRow, setCurrentSelectedRow] = useState<{ rowIndex: number }>({
    rowIndex: -1,
  })

  const [currentSelectedColumn, setCurrentSelectedColumn] = useState<{ colIndex: number }>({
    colIndex: -1,
  })

  const [currentSelectedCell, setCurrentSelectedCell] = useState<TablePoint>({
    rowIndex: -1,
    colIndex: -1,
  })

  const [headers, setHeaders] = useState<ReoTableHeader[]>([
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
        ? data[0].columns.map((column: ReoColumn) =>
            column.type !== TableColumnTypes.Enum
              ? {
                  label: column.role.toUpperCase(),
                }
              : null,
          )
        : [],
    )
  }, [])

  const addRow = useCallback((row: ReoTableRow[]) => {
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
