import { useState } from 'preact/hooks'
import { TableBody } from './table-body'
import { TableHeader } from './table-header'
import { TableHelper } from './table-helper'
import { TableSearch } from './table-search'

import './observer-table.css'

export function ObserverTable({ data }) {
  const [labels, setLables] = useState([
    { label: 'Operator' },
    { label: 'CID' },
    { label: 'LAC' },
    { label: 'MCC' },
    { label: 'MNC' },
    { label: 'RSSI' },
  ])

  // TODO: Get socket based data about currentCycle from Anduha using some ESP server enpoint here.
  return (
    <div className='table-container overflow-auto relative w-full h-full scrollbar-thin'>
      <TableSearch />
      <TableHelper headers={labels} rows={data} currentCycle={4} />
      <table className='reo-data-table w-full h-auto'>
        {data.length !== 0 && <TableHeader headers={labels} />}
        <TableBody rows={data} />
      </table>
    </div>
  )
}
