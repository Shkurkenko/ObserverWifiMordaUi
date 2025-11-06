export namespace Table {
  export enum RowStatus {
    Normal = 'normal',
    Highlighted = 'highlighted',
    Disabled = 'disabled',
  }

  export enum ColumnTypes {
    Enum,
    Text,
    Checkbox,
  }

  export interface Point {
    rowIndex: number
    colIndex: number
  }

  export interface Header {
    label: string
    role: string
  }

  export interface TableRow {
    columns: Array<{ type: ColumnTypes; data: any }>
    status: RowStatus
  }

  export interface Column {
    type: ColumnTypes
    data: any
    selected?: boolean
    hovered?: boolean
  }

  export interface CountryColumnProps extends Column {
    countryCode: string
  }

  export interface TextColumnProps extends Column {
    text: string
  }

  export interface SignalColumnProps extends Column {
    text: string
  }

  export interface OperatorColumnProps extends Column {
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
