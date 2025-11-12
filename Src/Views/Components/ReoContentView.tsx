import { MouseEventHandler } from 'preact'
import { useCallback, useState } from 'preact/hooks'
import { Table } from '../../Components/Table'
import { ITab } from '../../Shared/Interfaces/Main.interface'
import { TableProvider } from '../../Components/Table/Context/TableContext'
import { ObserverTableEmpty } from '../../Components/Table/ObserverTableEmptyState'
import { TabButtonGroup } from '../../Components/Tabs/TabButtonGroup'
import { ReoView } from '../Pages/ReoScan'
import { TabView } from '../../Components/Tabs/TabView'
import { TableSpace } from '../../Shared/Interfaces/Table.interface'
import { ReoSpace } from '../../Shared/Interfaces/Reo.interface'

import './ReoContentView.css'

interface IReoContentViewProps {
  header: string
  model: ReoView
}

export function ReoContentView({ header, model }: IReoContentViewProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeTab, setActiveTab] = useState(model.tabsModel[activeIndex].id)
  const [reoColumnsModel, setReoColumnsModel] = useState<TableSpace.IColumn[]>([
    {
      role: TableSpace.IRoles.Enum.toString(),
      type: TableSpace.IColumnTypes.Enum,
      width: 130,
      minWidth: 50,
      maxWidth: 200,
      label: '#',
      align: TableSpace.IColumnAlignment.Center,
    },
    {
      role: ReoSpace.IRoles.Cid.toString(),
      type: TableSpace.IColumnTypes.Text,
      width: 130,
      minWidth: 50,
      maxWidth: 200,
      label: 'CID',
      align: TableSpace.IColumnAlignment.Center,
    },
    {
      role: ReoSpace.IRoles.LacTac.toString(),
      type: TableSpace.IColumnTypes.Text,
      width: 130,
      minWidth: 50,
      maxWidth: 200,
      label: 'LAC/TAC',
      align: TableSpace.IColumnAlignment.Center,
    },
    {
      role: ReoSpace.IRoles.Mcc.toString(),
      type: TableSpace.IColumnTypes.Country,
      width: 130,
      minWidth: 50,
      maxWidth: 200,
      label: 'Страна',
      align: TableSpace.IColumnAlignment.Center,
    },
    {
      role: ReoSpace.IRoles.Mnc.toString(),
      type: TableSpace.IColumnTypes.Text,
      width: 130,
      minWidth: 50,
      maxWidth: 200,
      label: 'Регион',
      align: TableSpace.IColumnAlignment.Center,
    },
    {
      role: ReoSpace.IRoles.Operator.toString(),
      type: TableSpace.IColumnTypes.Operator,
      width: 130,
      minWidth: 50,
      maxWidth: 200,
      label: 'Оператор',
      align: TableSpace.IColumnAlignment.Center,
    },
    {
      role: ReoSpace.IRoles.RxLevel.toString(),
      type: TableSpace.IColumnTypes.Signal,
      width: 130,
      minWidth: 50,
      maxWidth: 200,
      label: 'Уровень Сигнала',
      align: TableSpace.IColumnAlignment.Center,
    },
  ])

  const handleRenderEmpty = useCallback((): JSX.Element => {
    return <ObserverTableEmpty />
  }, [])

  const handleTabClick = useCallback((e: MouseEventHandler<HTMLButtonElement>, tab: ITab) => {
    setActiveTab(tab.id)
    setActiveIndex(tab.tabIndex)
  }, [])

  return (
    <div className={`reo-content w-full ${model.show ? '' : 'reo-content-view-hide'}`}>
      <div className='reo-content-top'>
        <div className='reo-header-info'>
          <h1 className='reo-content-header'>{`Результаты сканирования`}</h1>
          <h4 className='reo-content-scan-name'>{header}</h4>
        </div>
      </div>

      <TabButtonGroup
        currentIndex={activeIndex}
        model={model.tabsModel}
        handleClick={handleTabClick}
      />
      <TabView currentIndex={activeIndex}>
        <TableProvider
          columnsModel={reoColumnsModel}
          data={model.tabsModel[activeIndex].data}
          renderEmpty={handleRenderEmpty}
        >
          <Table />
        </TableProvider>
      </TabView>
    </div>
  )
}
