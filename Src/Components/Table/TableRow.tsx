import { TableSpace } from '../../Shared/Interfaces/Table.interface'
import { ColumnBase } from './Columns/ColumnBase'
import { ColumnSignal } from './Columns/ColumnSignal'
import { ColumnOperator } from './Columns/ColumnOperator'
import { ColumnEnum } from './Columns/ColumnEnum'
import { ColumnText } from './Columns/ColumnText'
import { ColumnCountry } from './Columns/ColumnCountry'

import './TableRow.css'

export interface ITableRowProps {
  rowData: TableSpace.IRow
}

export function TableRow({ rowData }: ITableRowProps) {
  return (
    <tr key={rowData.index} className='observer-table-body-row'>
      {rowData.columns.map((column: TableSpace.ICell<unknown>, counter: number) => {
        switch (column.type) {
          case TableSpace.IColumnTypes.Enum:
            return (
              <ColumnBase key={counter}>
                <ColumnEnum
                  index={(rowData.columns[counter].data as TableSpace.IEnumCellData).rowIndex}
                />
              </ColumnBase>
            )
          case TableSpace.IColumnTypes.Text:
            return (
              <ColumnBase key={counter}>
                <ColumnText data={rowData.columns[counter].data as TableSpace.ITextCellData} />
              </ColumnBase>
            )
          case TableSpace.IColumnTypes.Operator:
            return (
              <ColumnBase key={counter}>
                <ColumnOperator
                  data={rowData.columns[counter].data as TableSpace.IOperatorCellData}
                />
              </ColumnBase>
            )
          case TableSpace.IColumnTypes.Signal:
            return (
              <ColumnBase key={counter}>
                <ColumnSignal data={rowData.columns[counter].data as TableSpace.ISignalCellData} />
              </ColumnBase>
            )
          case TableSpace.IColumnTypes.Country:
            return (
              <ColumnBase key={counter}>
                <ColumnCountry
                  data={rowData.columns[counter].data as TableSpace.ICountryCellData}
                />
              </ColumnBase>
            )
          case TableSpace.IColumnTypes.Checkbox:
            return (
              <ColumnBase key={counter}>
                <ColumnCountry
                  data={rowData.columns[counter].data as TableSpace.ICountryCellData}
                />
              </ColumnBase>
            )
          default:
            return (
              <ColumnBase key={counter}>
                <span>Unknown Column Type</span>
              </ColumnBase>
            )
        }
      })}
    </tr>
  )
}
