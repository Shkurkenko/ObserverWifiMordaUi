import { ComponentChildren } from 'preact'

import './table-column-base.css'

interface TableColumnBaseProps {
  children?: ComponentChildren
  hovered?: boolean
  selected?: boolean
  handleHoverEnter?: Function | null
  handleHoverLeave?: Function | null
}

export function TableColumnBase({
  children,
  hovered,
  selected,
  handleHoverEnter = null,
  handleHoverLeave = null,
}: TableColumnBaseProps) {
  const handleMouseEnter = () => {
    if (handleHoverEnter) handleHoverEnter()
  }

  const handleMouseLeave = () => {
    if (handleHoverEnter) handleHoverLeave()
  }

  return (
    <td
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`table-basecol ${hovered && 'table-basecol-hovered'} ${selected && 'table-basecol-selected'}`}
    >
      {children}
    </td>
  )
}
