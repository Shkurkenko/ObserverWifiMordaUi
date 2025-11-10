import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'
import { TableHelper } from './TableHelper'
import { TableSearch } from './TableSearch'
import { useTable } from './Hooks/use-table'
import { TableSpace } from '../../Shared/Interfaces/Table.interface'

import './observer-table.css'
import { useEffect } from 'preact/hooks'

interface ITableProps {
  labels?: TableSpace.IHeader[]
  columns?: TableSpace.IColumn[]
  records?: TableSpace.IRow[]
}

interface ITableContainerProps {
  headers: TableSpace.IHeader[]
  records: TableSpace.IRow[]
  customEmpty?: () => preact.JSX.Element
}

export function TableContainer({ headers, records, customEmpty }: ITableContainerProps) {
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

export function Table({ labels, columns, records }: ITableProps) {
  const { rows, headers, setHeaders, mockAddRows, renderEmpty } = useTable()

  // Note: Some magic with columns here

  useEffect(() => {
    if (labels) {
      setHeaders(labels)
    }
  }, [labels])

  return (
    <div className='table-container relative w-full h-full flex flex-col'>
      <TableSearch />
      <TableHelper />
      <TableContainer headers={labels ? labels : headers} records={records ? records : rows} />
    </div>
  )
}
