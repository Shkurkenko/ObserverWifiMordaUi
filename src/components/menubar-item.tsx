import { useSidebar } from '../hooks/use-sidebar'
import { Reo } from '../shared/interfaces/reo.interface'

interface MenubarItemProps {
  data: any
  itemOnClick: Function
  isActive: boolean
}

export interface MenubarItem {
  id: number
  role: Reo.MenubarSetup
  active: boolean
  icon: JSX.Element
}

export function MenubarItem({ data, itemOnClick, isActive }: MenubarItemProps) {

  return (
    <li
      key={data.id}
      onClick={() => {
        itemOnClick(data.id)
      }}
      className={`menubar-list-item task-toggle ${isActive ? 'menubar-active' : ''}`}
    >
      {data.icon}
    </li>
  )
}
