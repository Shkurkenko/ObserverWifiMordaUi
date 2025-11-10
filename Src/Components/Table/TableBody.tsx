import { TableRow } from './TableRow'
import { TableSpace } from '../../Shared/Interfaces/Table.interface'

import './table-body.css'

interface ITableBodyProps {
  rows: TableSpace.IRow[]
}

export const TableBody = ({ rows }: ITableBodyProps) => {
  return (
    <tbody className='table-body w-full h-full'>
      {rows.map((row: TableSpace.IRow, rowIndex: number) => {
        row.index = rowIndex
        return <TableRow data={row} />
      })}
    </tbody>
  )
}
