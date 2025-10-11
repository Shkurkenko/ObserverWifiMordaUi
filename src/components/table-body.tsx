import { useEffect, useState } from 'preact/hooks'
import { ColumnText } from './column-text'
import { ColumnEnum } from './column-enum'
import { ColumnOperator } from './column-operator'
import { ColumnSignal } from './column-signal'

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
  columns: TableColumn[]
}

export interface TableBodyProps {
  rows: TableRowProps[]
}

export const TableBody = ({ rows }: TableBodyProps) => {
  return (
    <tbody className='table-body w-full'>
      {rows.map((row, rowIndex) => {
        return (
          <tr key={rowIndex} className='table-body-row'>
            {row.columns.map((column, index) => {
              switch (column.type) {
                case TableColumnTypes.Enum:
                  return <ColumnEnum key={index} index={rowIndex} />
                case TableColumnTypes.Text:
                  return <ColumnText key={index} text={(column.data as TextColumnProps).text} />
                case TableColumnTypes.Operator:
                  return (
                    <ColumnOperator
                      key={index}
                      name={(column.data as OperatorColumnProps).name}
                      code={(column.data as OperatorColumnProps).code}
                      iconPath={(column.data as OperatorColumnProps).iconPath}
                    />
                  )
                case TableColumnTypes.Signal:
                  return <ColumnSignal key={index} text={(column.data as SignalColumnProps).text} />
              }
            })}
          </tr>
        )
      })}
    </tbody>
  )
}
