import { TableBody } from './table-body'
import { TableHeader } from './table-header'
import { TableHelper } from './table-helper'
import { TableSearch } from './table-search'
import { useTable } from './hooks/use-table'

import './observer-table.css'

export function ObserverTable() {
  const { rows, headers, renderEmpty } = useTable()

  return (
    <div className='table-container relative w-full h-full flex flex-col'>
      <TableSearch />
      <TableHelper currentCycle={4} />
      <div className='table-viewport w-full overflow-auto scrollbar-thin'>
        <table className='reo-data-table w-full h-full'>
          {rows.length !== 0 && <TableHeader headers={headers} />}
          {rows.length !== 0 ? <TableBody rows={rows} /> : renderEmpty()}
        </table>
      </div>
    </div>
  )
}
