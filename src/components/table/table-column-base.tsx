import './table-column-base.css'

export function TableColumnBase({
  children,
  hovered,
  selected,
  handleHoverEnter,
  handleHoverLeave,
}) {
  const handleMouseEnter = () => {
    handleHoverEnter()
  }

  const handleMouseLeave = () => {
    handleHoverLeave()
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
