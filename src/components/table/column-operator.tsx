import { useEffect, useState } from 'preact/hooks'
import { OperatorColumnProps } from './table-body'

import './column-operator.css'

export const ColumnOperator = ({ name, code, iconPath }: OperatorColumnProps) => {
  return <div className='w-full h-full column-operator'>{name}</div>
}
