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
        {model.items.map((menubarItem: MenubarItem) => (
          <MenubarItem
            data={menubarItem}
            isActive={model.currentIndex === menubarItem.id && menubarItem.active}
            itemOnClick={itemOnClick}
          />
        ))}
      </ul>
    </div>
  )
}
