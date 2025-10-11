import { useEffect, useState } from 'preact/hooks'
import { OperatorColumnProps } from './table-body'

import './column-operator.css'

export const ColumnOperator = ({ name, code, iconPath }: OperatorColumnProps) => {
  return <td className='column-operator'>{name}</td>
}
