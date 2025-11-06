import { ObserverTableRow } from './observer-table-row'
import { Table } from '../../shared/interfaces/table.interface'

import './table-body.css'

export const TableBody = ({ rows }: Table.TableBodyProps) => {
  return (
    <tbody className='table-body w-full h-full'>
      {rows.map((row: Table.TableRowProps, rowIndex: number) => {
        row.index = rowIndex
        return <ObserverTableRow data={row} />
      })}
    </tbody>
  )
}
