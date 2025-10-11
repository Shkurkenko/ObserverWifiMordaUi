import { useEffect, useState } from 'preact/hooks'
import { TextColumnProps } from './table-body'

import './column-text.css'

export const ColumnText = ({ text }: TextColumnProps) => {
  return <td className='column-text'>{text}</td>
}
