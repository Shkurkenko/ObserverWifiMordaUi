import { useState } from 'preact/hooks'
import { TableBody } from './table-body'
import { TableHeader } from './table-header'
import { TableHelper } from './table-helper'

import { Logo } from '../logo'

import './observer-table.css'

export function ObserverTable({ data }) {
  const [nav, setNav] = useState(true)
  const [labels, setLables] = useState([
    { label: 'Operator' },
    { label: 'CID' },
    { label: 'LAC' },
    { label: 'MCC' },
    { label: 'MNC' },
    { label: 'RSSI' },
  ])

  // Get socket based data about currentCycle from Anduha using some ESP server enpoint here.
  return (
    <div className='table-container overflow-x-auto relative w-full'>
      <TableHelper headers={labels} rows={data} currentCycle={4} />
      <table className='reo-data-table w-full'>
        {data.length !== 0 && <TableHeader headers={labels} />}
        <TableBody rows={data} />
      </table>
    </div>
  )
}
