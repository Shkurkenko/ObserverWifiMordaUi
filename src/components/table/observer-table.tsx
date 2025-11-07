import { TableBody } from './table-body'
import { TableHeader } from './table-header'
import { TableHelper } from './table-helper'
import { TableSearch } from './table-search'
import { useTable } from './hooks/use-table'
import { useEffect } from 'preact/hooks'
import { Table } from '../../shared/interfaces/table.interface'

import './observer-table.css'

interface TableProps {
  headers: Table.HeaderColumn[]
  records: Table.Row[]
}

export function TableContainer({ headers, records, customEmpty }) {
  const { renderEmpty } = useTable()
  return (
    <div className='table-viewport w-full overflow-auto scrollbar-thin'>
      <table className='reo-data-table w-full'>
        {records.length !== 0 && <TableHeader headers={headers} />}
        {records.length !== 0 ? (
          <TableBody rows={records} />
        ) : customEmpty ? (
          customEmpty()
        ) : (
          renderEmpty()
        )}
      </table>
    </div>
  )
}

export function ObserverTable() {
  const { rows, headers, setDefaultHeaders, mockAddRows, renderEmpty } = useTable()

  useEffect(() => {
    // setDefaultHeaders()
    mockAddRows(1500) // Use fetch ws api from esp here instead
  }, [])

  return (
    <div className='table-container relative w-full h-full flex flex-col'>
      <TableSearch />
      <TableHelper />
      <TableContainer headers={headers} records={rows} />
    </div>
  )
}
