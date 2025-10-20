import { useState } from 'preact/hooks'

import './menubar.css'
import { useSidebar } from '../Context/sidebar-context'

export function Menubar({ model, currentIndex, itemOnClick }) {
  const [doubleClicked, setDoubleClicked] = useState<boolean>(false)
  const [clickedCount, setClickedCount] = useState<number>(0)
  const { toggleSidebar } = useSidebar()

  return (
    <div className='menubar w-full'>
      <div className='menubar-container w-full'>
        <ul className='menubar-list w-full'>
          {model.map((menubarItem) => (
            <li
              key={menubarItem.id}
              onClick={() => {
                setClickedCount((prev: number) => {
                  const currentCount = prev++
                  if (currentCount == 1) {
                    setDoubleClicked((prev) => true)
                    return 0
                  }
                  return currentCount
                })

                itemOnClick(menubarItem.id)
                console.log(`Setting click count: ${clickedCount}`)
                if (doubleClicked) toggleSidebar()
              }}
              className={`menubar-list-item task-toggle  ${
                currentIndex === menubarItem.id && 'menubar-active'
              }`}
            >
              {menubarItem.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
