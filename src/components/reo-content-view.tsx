import { useState } from 'preact/hooks'
import { ObserverTable } from './table/observer-table'
import { Reo } from '../shared/interfaces/reo.interface'
import { ObserverTableProvider } from './table/context/table-context'

import './reo-content-view.css'

export function ReoContentView({ model }) {
  const [activeTab, setActiveTab] = useState('tabs-with-underline-item-1')
  const [activeIndex, setActiveIndex] = useState(0)

  const handlRenderEmpty = (): JSX.Element => {
    return <div style={{ width: 100, height: 100, backgroundColor: 'red' }}></div>
  }

  return (
    <div className='reo-content w-full'>
      <div className='reo-content-top'>
        <div className='reo-header-info'>
          <h1 className='reo-content-header'>{`Данные по ${model[activeIndex].label}`}</h1>
        </div>
        <div className='observer-tabs w-full dark:border-neutral-700'>
          <nav
            className='flex gap-x-7'
            aria-label='Tabs'
            role='tablist'
            aria-orientation='horizontal'
          >
            {model.map((tab: Reo.Tab, index: number) => (
              <button
                type='button'
                key={tab.id}
                className={`${
                  activeTab === tab.id
                    ? 'font-semibold border-[#36B37E] text-[#36B37E] border-b-2'
                    : 'text-gray-500 border-transparent'
                } text-lg py-4 px-1 inline-flex items-center gap-x-2 whitespace-nowrap 
                             hover:text-[#36B37E] focus:outline-hidden focus:text-[#36B37E] 
                             disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 
                             dark:hover:text-[#36B37E]`}
                aria-controls={`tabs-with-underline-${index + 1}`}
                role='tab'
                onClick={() => {
                  setActiveTab(tab.id)
                  setActiveIndex(index)
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className='table-tabview w-full h-full tab-view'>
        <div
          id='tabs-with-underline-1'
          role='tabpanel'
          aria-labelledby='tabs-with-underline-item-1'
          className='w-full h-full'
        >
          <ObserverTableProvider data={model[activeIndex].data} renderEmpty={handlRenderEmpty}>
            <ObserverTable />
          </ObserverTableProvider>
        </div>
      </div>
    </div>
  )
}
