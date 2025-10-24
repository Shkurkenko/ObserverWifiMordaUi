import { MenubarItem } from './menubar-item'

import './menubar.css'
interface MenubarProps {
  model: MenubarModel
  itemOnClick: Function
}
export interface MenubarModel {
  currentIndex: number
  items: MenubarItem[]
}

export function Menubar({ model, itemOnClick }: MenubarProps) {
  return (
    <div className='menubar w-full'>
      <ul className='menubar-list w-full'>
        {model.items.map((menubarItem: any) => (
          <MenubarItem
            data={menubarItem}
            isActive={menubarItem.currentIndex === menubarItem.id}
            itemOnClick={itemOnClick}
          />
        ))}
      </ul>
    </div>
  )
}
