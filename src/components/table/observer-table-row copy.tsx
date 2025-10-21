import { ColumnSignal } from './column-signal'
import { ColumnOperator } from './column-operator'
import { ColumnEnum } from './column-enum'
import { ColumnText } from './column-text'
import { TableColumn, TableColumnTypes } from './table-body'
import { TextColumnProps } from './table-body'
import { OperatorColumnProps } from './table-body'
import { SignalColumnProps } from './table-body'

import './observer-table-row.css'

export function ObserverTableRow({ data }) {
  return (
    <tr key={data.rowIndex} className='table-body-row'>
      {data.columns.map((column: TableColumn, index: number) => {
        switch (column.type) {
          case TableColumnTypes.Enum:
            return <ColumnEnum key={index} index={data.index} />
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
}
