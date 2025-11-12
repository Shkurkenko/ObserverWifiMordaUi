import { TableSpace } from '../../../Shared/Interfaces/Table.interface'

import './ColumnSignal.css'

interface ISignalColumnProps {
  data: TableSpace.ISignalCellData
}

export const ColumnSignal = ({ data }: ISignalColumnProps) => {
  return <div className='w-full h-full column-signal'>{data.value}</div>
}
