import { TableSpace } from '../../../Shared/Interfaces/Table.interface'

import './ColumnOperator.css'

interface IColumnOperatorProps {
  iconPath?: string
  data: TableSpace.IOperatorCellData
}

export const ColumnOperator = ({ iconPath, data }: IColumnOperatorProps) => {
  return <div className='w-full h-full column-operator'>{data.name}</div>
}
