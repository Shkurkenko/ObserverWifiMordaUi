import { TableSpace } from '../../../Shared/Interfaces/Table.interface'

import './ColumnText.css'

interface IColumnCountryProps {
  data: TableSpace.ICountryCellData
}

export const ColumnCountry = ({ data }: IColumnCountryProps) => {
  return (
    <div className='w-full h-full column-text'>
      <span class={`fi fi-${data.countryAbb.toLowerCase()}`}></span>
      {'Страна'}
      <span class={`fi fi-${data.countryAbb.toLowerCase()} fis`}></span>
    </div>
  )
}
