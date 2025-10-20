import { useState } from 'preact/hooks'
import { ObserverTable } from './observer-table'

import './reo-content-view.css'

export function ReoContentView({ model }) {
  const [activeTab, setActiveTab] = useState('tabs-with-underline-item-1')
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='reo-content reo-scan-interface-item'>
      <div className='task-content-container'>
        <ul className='iterface-list'>
          <li className='interface-item'>
            <ul className='reo-scan-top'>
              <li className='reo-scan-top-item'>
                <div className='table-header-info'>
                  <h1>{`Данные по ${model[activeIndex].label}`}</h1>
                </div>
              </li>

              <li className='reo-scan-top-item'>
                <div className='observer-tabs w-full dark:border-neutral-700'>
                  <nav
                    className='flex gap-x-7'
                    aria-label='Tabs'
                    role='tablist'
                    aria-orientation='horizontal'
                  >
                    {model.map((tab, index) => (
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
              </li>
            </ul>
          </li>

          <li className='interface-item'>
            <div className='interface-item-data-exploer-list w-full h-full'>
              <div className='data-explorer-item w-full h-full'>
                <div className='table-tabview w-full h-full tab-view'>
                  <div
                    id='tabs-with-underline-1'
                    role='tabpanel'
                    aria-labelledby='tabs-with-underline-item-1'
                    className='w-full h-full'
                  >
                    <ObserverTable data={model[activeIndex].data} />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
