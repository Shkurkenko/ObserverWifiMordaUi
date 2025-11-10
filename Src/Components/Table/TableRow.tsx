import { ColumnSignal } from './Columns/ColumnSignal'
import { ColumnOperator } from './Columns/ColumnOperator'
import { ColumnEnum } from './Columns/ColumnEnum'
import { ColumnText } from './Columns/ColumnText'
import { Table } from '../../Shared/Interfaces/Table.interface'
import { TableColumnBase } from './TableColumnBase'
import { ColumnCountry } from './Columns/ColumnCountry'

import './observer-table-row.css'

export function TableRow({ data }) {
  return (
    <tr key={data.rowIndex} className='observer-table-body-row'>
      {data.columns.map((column: Table.Column, index: number) => {
        switch (column.type) {
          case Table.ColumnTypes.Enum:
            return (
              <TableColumnBase>
                <ColumnEnum key={index} index={data.index} />
              </TableColumnBase>
            )
          case Table.ColumnTypes.Text:
            return (
              <TableColumnBase>
                <ColumnText key={index} />
              </TableColumnBase>
            )
          case Table.ColumnTypes.Operator:
            return (
              <TableColumnBase>
                <ColumnOperator />
              </TableColumnBase>
            )
          case Table.ColumnTypes.Signal:
            return (
              <TableColumnBase>
                <ColumnSignal key={index} />
              </TableColumnBase>
            )
          case Table.ColumnTypes.Signal:
            return (
              <TableColumnBase>
                <ColumnCountry countryCode={'gr'} />
              </TableColumnBase>
            )
        }
      })}
    </tr>
  )
}
