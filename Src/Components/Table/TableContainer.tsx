import { TableSpace } from '../../Shared/Interfaces/Table.interface'
import { useTable } from './Hooks/use-table'
import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'

import './TableContainer.css'
import { useEffect } from 'preact/hooks'

interface ITableContainerProps {
  columns: TableSpace.IColumn[]
  records: TableSpace.IRow[]
  customEmpty?: () => preact.JSX.Element
}

export function TableContainer({ columns, records, customEmpty }: ITableContainerProps) {
  const { renderEmpty } = useTable()

  useEffect(() => {
    console.log('columns: ', columns)
    console.log('records: ', records)
  }, [])

  return (
    <div className='table-viewport w-full overflow-auto scrollbar-thin'>
      <table className='reo-data-table w-full'>
        {records.length !== 0 && <TableHeader headers={columns} />}
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
