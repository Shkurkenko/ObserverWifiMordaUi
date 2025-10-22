import { createContext } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'

interface TablePoint {
  rowIndex?: number
  colIndex?: number
}

interface TableHeader {
  label: string
}

export const ObserverTableContext = createContext(null)

export const ObserverTableProvider = ({ children, data, renderEmpty }) => {
  const [rows, setRows] = useState(data)
  const [currentSelectedColumn, setCurrentSelectedColumn] = useState<TablePoint>({})
  const [headers, setHeaders] = useState<TableHeader[]>([
    { label: 'Operator' },
    { label: 'CID' },
    { label: 'LAC' },
    { label: 'MCC' },
    { label: 'MNC' },
    { label: 'RSSI' },
  ])

  useEffect(() => setRows(data), [data])

  const addRow = useCallback(() => {
    console.log('Add row logic here')
  }, [])

  const deleteRow = useCallback(() => {
    console.log('Delete row logic here')
  }, [])

  const clearRows = useCallback(() => {
    setRows((prev) => [])
  }, [])

  const selectColumn = useCallback(() => {
    console.log('Slect column logic here')
  }, [])

  const selectRow = useCallback(() => {
    console.log('Select row logic here')
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
      }}
    >
      {children}
    </ObserverTableContext.Provider>
  )
}
