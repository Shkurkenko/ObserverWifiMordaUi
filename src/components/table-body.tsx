import { ObserverTableRow } from './observer-table-row'

import './table-body.css'

export enum TableColumnTypes {
  Enum,
  Text,
  Signal,
  Operator,
}

export interface TableColumn {
  type?: TableColumnTypes
  data?: any
}

export interface TextColumnProps extends TableColumn {
  text: string
}

export interface SignalColumnProps extends TableColumn {
  text: string
}

export interface OperatorColumnProps extends TableColumn {
  name?: string
  iconPath?: string
  code: number
}

export interface TableRowProps {
  index: number
  columns: TableColumn[]
}

export interface TableBodyProps {
  rows: TableRowProps[]
}

export const TableBody = ({ rows }: TableBodyProps) => {
  return (
    <tbody className='table-body w-full'>
      {rows.map((row: TableRowProps, rowIndex: number) => {
        row.index = rowIndex
        return <ObserverTableRow data={row} />
      })}
    </tbody>
  )
}
