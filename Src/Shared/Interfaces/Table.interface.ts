export namespace TableSpace {
  export interface IStyleSettings {
    columnWidth?: number
    columnMinWidth?: number
    columnMaxWidth?: number
    columnColors?: string[]
    gridColor?: string
    enableHorizontalGird?: boolean
    enableVerticalGrid?: boolean
    columnAlignment?: IColumnAlignment
  }

  export interface IConfig {
    enableColumnDisabling?: boolean
    enableCleanTable?: boolean
    enablePagination?: boolean
    enableSorting?: boolean
    enableFiltration?: boolean
    enableEnumiration?: boolean
    tableStyleSettings?: IStyleSettings
  }

  export enum IColumnAlignment {
    Left = 'left',
    Right = 'right',
    Center = 'center',
  }

  export enum IRowStatus {
    Normal = 'normal',
    Highlighted = 'highlighted',
    Disabled = 'disabled',
  }

  export enum IRowTypes {
    Normal,
    Colored,
  }

  export enum IColumnTypes {
    Enum,
    Text,
    Checkbox,
    Country,
    Signal,
    Operator,
    Date,
  }

  export enum IHeaderTypes {
    Static,
    Sortable,
  }

  export interface IPoint {
    rowIndex: number
    colIndex: number
  }

  export interface IHeader {
    label: string
    role: string
    type: IHeaderTypes
  }

  export interface ICell<T> {
    data: T
    position: IPoint
    type: IColumnTypes
    role: string
  }

  export enum IRoles {
    Enum,
  }

  export interface IRow {
    index: number
    columns: ICell<unknown>[] // Unknown type to allow custom cell types data
    status: IRowStatus
    type: IRowTypes
  }

  export interface IColumn {
    role: string
    type: IColumnTypes
    width: number
    minWidth: number
    maxWidth: number
    label: string
    align?: IColumnAlignment
  }

  export interface IEnumCellData {
    rowIndex: number
  }

  export interface ITextCellData {
    bold?: boolean
    text: string
  }

  export interface ICheckboxCellData {
    checked: boolean
    onClick?: (e: Event) => void
  }

  export interface IOperatorCellData {
    name?: string
    iconPath?: string
    code: number
  }

  export interface ICountryCellData {
    name: string
    countryCode: string
  }

  export interface ISignalRange {
    beginValue: number
    endValue: number
  }

  export interface ISignalCellData {
    range: ISignalRange
    value: number
  }

  export interface IRowProps {
    index: number
    columns: IColumn[]
  }

  export interface IBodyProps {
    rows: IRowProps[]
  }
}
