import { Table } from './table.interface'

export namespace Reo {
  export enum Roles {
    Enum = 'enumiration',
    Operator = 'operator',
    Country = 'country',
    Cid = 'cid',
    LacTac = 'lacTac',
    Mcc = 'mcc',
    Mnc = 'mnc',
    RxLevel = 'rxLevel',
    Unknown = 'unknown',
  }

  export enum ScanTypes {
    Gsm = 'GSM',
    Lte = 'LTE',
    Umts = 'UMTS',
    Bluetooth = 'Bluetooth',
    Wifi = 'WiFi',
    FiveG = '5G',
  }

  export enum ScanStatusTypes {
    Finished,
    Running,
    Pending,
    Failed,
  }

  export interface ScanTask {
    id: string
    name: string
    date: string
    time: string
    types: ScanTypes[]
    status: ScanStatusTypes
  }

  export enum AdditionalRowStatuses {
    Stickable,
  }

  export enum AdditionalColumnTypes {
    Signal,
    Country,
  }

  export enum AdditionalRowTypes {
    Legit = 'legit',
    Illegit = 'illegit',
    Unknown = 'unknown',
  }

  export interface AdditionalReoTableStyles {
    illegitColor?: string
    legitColor?: string
    UnknownColor?: string
  }

  export type RowStatus = Table.RowStatus & AdditionalRowStatuses

  export type RowTypes = Table.RowTypes & AdditionalRowTypes

  export type ColumnTypes = Table.ColumnTypes & AdditionalColumnTypes

  export interface Column {
    type: ColumnTypes
    role: Roles
    data: unknown
  }
  export interface Row {
    columns: Column[]
    status: RowStatus
    type: RowTypes
  }

  export interface SignalRange {
    beginValue: number
    endValue: number
  }
  export interface SignalCellData {
    range: SignalRange
    value: number
  }

  export interface CountryCellData {
    name: string
    countryCode: string
  }

  export interface CountryColumnProps extends Table.Column {
    name: string
    countryCode: number
  }
}
