import { CountryColumnProps } from './table-body'

import './column-text.css'

export const ColumnCountry = ({ countryCode }: CountryColumnProps) => {
  return (
    <div className='w-full h-full column-text'>
      <span class={`fi fi-${countryCode.toLowerCase()}`}></span>
      {'Страна'}
      <span class={`fi fi-${countryCode.toLowerCase()} fis`}></span>
    </div>
  )
}
