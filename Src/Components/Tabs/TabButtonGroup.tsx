import { ITab } from '../../Shared/Interfaces/Main.interface'
import { TabButton } from './TabButton'

import './TabButtonGroup.css'

export interface ITabButtonGroup {
  currentIndex: number
  model: ITab[]
  handleClick: Function
}

export const TabButtonGroup = ({ currentIndex, model, handleClick }: ITabButtonGroup) => {
  return (
    <div className='observer-tabs w-full dark:border-neutral-700'>
      <nav className='flex gap-x-7' aria-label='Tabs' role='tablist' aria-orientation='horizontal'>
        {model.map((tab: ITab, index: number) => (
          <TabButton
            tabData={tab}
            isActive={currentIndex === tab.tabIndex}
            handleClick={handleClick}
          />
        ))}
      </nav>
    </div>
  )
}
