export namespace Table {
  export interface StyleSettings {
    columnWidth?: number
    columnMinWidth?: number
    columnMaxWidth?: number
    columnColors?: string[]
    gridColor?: string
    enableHorizontalGird?: boolean
    enableVerticalGrid?: boolean
  }
  export interface Config {
    enableColumnDisabling?: boolean
    enableCleanTable?: boolean
    enablePagination?: boolean
    enableSorting?: boolean
    enableFiltration?: boolean
    enableEnumiration?: boolean
    tableStyleSettings?: StyleSettings
  }

  export enum RowStatus {
    Normal = 'normal',
    Highlighted = 'highlighted',
    Disabled = 'disabled',
  }

  export enum RowTypes {
    Normal,
    Colored,
    Custom,
  }

  export enum ColumnTypes {
    Enum,
    Text,
    Checkbox,
    Custom,
  }

  export enum HeaderTypes {
    Static,
    Sortable,
  }

  export interface Point {
    rowIndex: number
    colIndex: number
  }

  export interface Header {
    label: string
    role: string
    type: HeaderTypes
  }

  export interface Row {
    columns: Column[]
    status: RowStatus
    type: RowTypes
  }

  enum ColumnAlignment {
    Left = 'left',
    Right = 'right',
    Center = 'center',
  }
  export interface Column {
    role: string
    type: ColumnTypes
    width: number
    minWidth: number
    maxWidth: number
    label: string
    align: ColumnAlignment
  }

  export interface Cell<T> {
    position: Point
    data: T
  }

  export interface TextCellData {
    text: string
  }

  export interface EnumCellData {
    rowIndex: number
  }

  export interface CheckboxCellData {
    checked: boolean
    onClick?: (e: Event) => void
  }

  export interface OperatorCellData {
    name?: string
    iconPath?: string
    code: number
  }

  export interface RowProps {
    index: number
    columns: Column[]
  }

  export interface BodyProps {
    rows: RowProps[]
  }
}
