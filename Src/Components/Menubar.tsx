import { useSidebar } from '../Hooks/UseSidebar'
import { MenubarItem } from './MenubarItem'

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
  const { show } = useSidebar()

  return (
    <div className='menubar w-full'>
      <ul className='menubar-list w-full'>
        {model.items.map((menubarItem: MenubarItem) => (
          <MenubarItem
            data={menubarItem}
            isActive={show && model.currentIndex === menubarItem.id}
            itemOnClick={itemOnClick}
          />
        ))}
      </ul>
    </div>
  )
}
