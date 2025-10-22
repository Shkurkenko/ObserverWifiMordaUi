import { ColumnSignal } from './column-signal'
import { ColumnOperator } from './column-operator'
import { ColumnEnum } from './column-enum'
import { ColumnText } from './column-text'
import { TableColumn, TableColumnTypes } from './table-body'
import { TextColumnProps } from './table-body'
import { OperatorColumnProps } from './table-body'
import { SignalColumnProps } from './table-body'
import { TableColumnBase } from './table-column-base'

import './observer-table-row.css'
import { useState } from 'preact/hooks'

export function ObserverTableRow({ data }) {
  const [rowSelected, setRowSelected] = useState(false)

  return (
    <tr key={data.rowIndex} className='observer-table-body-row'>
      {data.columns.map((column: TableColumn, index: number) => {
        switch (column.type) {
          case TableColumnTypes.Enum:
            return (
              <TableColumnBase
                hovered={column?.hovered}
                selected={column?.selected}
                handleHoverEnter={() => console.log('TextColumn hovered')}
                handleHoverLeave={() => console.log('HoverLeave')}
              >
                <ColumnEnum key={index} index={data.index} />
              </TableColumnBase>
            )
          case TableColumnTypes.Text:
            return (
              <TableColumnBase
                hovered={column?.hovered}
                selected={column?.selected}
                handleHoverEnter={() => console.log('TextColumn hovered')}
                handleHoverLeave={() => console.log('HoverLeave')}
              >
                <ColumnText key={index} text={(column.data as TextColumnProps).text} />
              </TableColumnBase>
            )
          case TableColumnTypes.Operator:
            return (
              <TableColumnBase
                hovered={column?.hovered}
                selected={column?.selected}
                handleHoverEnter={() => console.log('TextColumn hovered')}
                handleHoverLeave={() => console.log('HoverLeave')}
              >
                <ColumnOperator
                  key={index}
                  name={(column.data as OperatorColumnProps).name}
                  code={(column.data as OperatorColumnProps).code}
                  iconPath={(column.data as OperatorColumnProps).iconPath}
                />
              </TableColumnBase>
            )
          case TableColumnTypes.Signal:
            return (
              <TableColumnBase
                hovered={column?.hovered}
                selected={column?.selected}
                handleHoverEnter={() => console.log('TextColumn hovered')}
                handleHoverLeave={() => console.log('HoverLeave')}
              >
                <ColumnSignal key={index} text={(column.data as SignalColumnProps).text} />
              </TableColumnBase>
            )
        }
      })}
    </tr>
  )
}
