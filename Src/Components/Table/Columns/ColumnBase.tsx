import { ComponentChildren } from 'preact'

import './ColumnBase.css'

interface IColumnBaseProps {
  children?: ComponentChildren
  hovered?: boolean
  selected?: boolean
  handleHoverEnter?: Function
  handleHoverLeave?: Function
}

export function ColumnBase({
  children,
  hovered,
  selected,
  handleHoverEnter,
  handleHoverLeave,
}: IColumnBaseProps) {
  const handleMouseEnter = () => {
    if (handleHoverEnter) handleHoverEnter()
  }

  const handleMouseLeave = () => {
    if (handleHoverLeave) handleHoverLeave()
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
