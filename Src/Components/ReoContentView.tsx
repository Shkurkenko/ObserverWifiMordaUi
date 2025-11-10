import { useState } from 'preact/hooks'
import { Table } from './Table/Table'
import { ITab } from '../Shared/Interfaces/Main.interface'
import { TableProvider } from './Table/Context/TableContext'
import { ObserverTableEmpty } from './Table/ObserverTableEmptyState'
import { ReoView } from '../Views/ReoScan'

import './reo-content-view.css'

interface ReoContentViewProps {
  header: string
  model: ReoView
}

export function ReoContentView({ header, model }: ReoContentViewProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeTab, setActiveTab] = useState(model.tabsModel[activeIndex].id)

  const handlRenderEmpty = (): JSX.Element => {
    return <ObserverTableEmpty />
  }

  return (
    <div className={`reo-content w-full ${model.show ? '' : 'reo-content-view-hide'}`}>
      <div className='reo-content-top'>
        <div className='reo-header-info'>
          <h1 className='reo-content-header'>{`Результаты сканирования`}</h1>
          <h4 className='reo-content-scan-name'>{header}</h4>
        </div>
        <div className='observer-tabs w-full dark:border-neutral-700'>
          <nav
            className='flex gap-x-7'
            aria-label='Tabs'
            role='tablist'
            aria-orientation='horizontal'
          >
            {model.tabsModel.map((tab: ITab, index: number) => (
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
          <TableProvider data={model.tabsModel[activeIndex].data} renderEmpty={handlRenderEmpty}>
            <Table />
          </TableProvider>
        </div>
      </div>
    </div>
  )
}
