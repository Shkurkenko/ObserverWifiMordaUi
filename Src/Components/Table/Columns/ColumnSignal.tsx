import { TableSpace } from '../../../Shared/Interfaces/Table.interface'
import { SignalStrength } from '../../SignalStrength'
import { ReoSpace } from '../../../Shared/Interfaces/Reo.interface'

import './ColumnSignal.css'

interface ISignalColumnProps {
  data: TableSpace.ISignalCellData
}

export const ColumnSignal = ({ data }: ISignalColumnProps) => {
  return (
    <div className='w-full h-full column-signal'>
      <SignalStrength dbm={data.value} />
    </div>
  )
}
