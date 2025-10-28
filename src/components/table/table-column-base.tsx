import './table-column-base.css'

export function TableColumnBase({
  children,
  hovered,
  selected,
  handleHoverEnter = null,
  handleHoverLeave = null,
}) {
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
