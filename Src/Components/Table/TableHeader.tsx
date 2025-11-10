import { useEffect, useState } from 'preact/hooks'

import './table-header.css'

interface HeaderColumn {
  label: string
}

interface TableHeaderProps {
  headers: Array<HeaderColumn>
}

export const TableHeader = ({ headers }: TableHeaderProps) => {
  return (
    <thead className='sticky top-0 z-10 shadow-lg table-header w-full'>
      <tr className='table-header-row'>
        <th>#</th>
        {headers.map((header: HeaderColumn, index) => {
          return (
            <td key={index} className='table-header-column'>
              <b>{header.label}</b>
            </td>
          )
        })}
      </tr>
    </thead>
  )
}
