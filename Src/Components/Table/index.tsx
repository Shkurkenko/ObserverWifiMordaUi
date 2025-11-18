import { useEffect } from 'preact/hooks'
import { TableContainer } from './TableContainer'
import { TableHelper } from './TableHelper'
import { TableSearch } from './TableSearch'
import { useTable } from './Hooks/use-table'
import { TableSpace } from '../../Shared/Interfaces/Table.interface'

import './index.css'

interface ITableProps {
  columnsProp?: TableSpace.IColumn[]
  recordsProp?: TableSpace.IRow[]
}

export function Table({ columnsProp, recordsProp }: ITableProps) {
  const { rows, columns, setColumns } = useTable()

  useEffect(() => {
    console.log(rows)
  }, [])

  return (
    <div className='table-container relative w-full h-full flex flex-col'>
      <TableSearch />
      <TableHelper />
      <TableContainer
        columns={columnsProp && columnsProp?.length !== 0 ? columnsProp : columns}
        records={recordsProp && recordsProp?.length !== 0 ? recordsProp : rows}
      />
    </div>
  )
}
