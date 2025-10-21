import { useState } from 'preact/hooks'
import { useSidebar } from '../Context/sidebar-context'
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
  const [doubleClicked, setDoubleClicked] = useState<boolean>(false)
  const [clickedCount, setClickedCount] = useState<number>(0)
  const { show, toggleSidebar } = useSidebar()

  return (
    <li
      key={data.id}
      onClick={() => {
        itemOnClick(data.id)
        setClickedCount(clickedCount + 1)

        if (doubleClicked) toggleSidebar()

        console.log(`current clicked count: ${clickedCount}`)
        console.log(`current sidebar state show: ${show}`)
      }}
      className={`menubar-list-item task-toggle ${isActive && 'menubar-active'}`}
    >
      {data.icon}
    </li>
  )
}
