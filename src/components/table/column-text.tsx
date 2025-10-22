import { useEffect, useState } from 'preact/hooks'
import { TextColumnProps } from './table-body'

import './column-text.css'

export const ColumnText = ({ text }: TextColumnProps) => {
  return <div className='w-full h-full column-text'>{text}</div>
}
