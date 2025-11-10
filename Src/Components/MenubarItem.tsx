import { MenubarSetup } from '../Shared/Interfaces/Main.interface'

import './menubar-item.css'

interface MenubarItemProps {
  data: any
  itemOnClick: Function
  isActive: boolean
}

export interface MenubarItem {
  id: number
  active: boolean
  role: MenubarSetup
  icon: JSX.Element
  content: JSX.Element
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
