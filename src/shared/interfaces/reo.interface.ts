import { Table } from './table.interface'
export namespace Reo {
  export enum TableRowStatus {
    Legit = 'legit',
    Illegit = 'illegit',
    Unknown = 'unknown',
  }

  export enum Roles {
    Enum = 'enumiration',
    Operator = 'operator',
    Country = 'country',
    Cid = 'cid',
    LacTac = 'lacTac',
    Mcc = 'mcc',
    Mnc = 'mnc',
    RxLevel = 'rxLevel',
  }

  export type ColumnTypes = Table.ColumnTypes | Roles

  export enum MenubarSetup {
    Notifications = 'Notifications',
    TaskManager = 'TaskManager',
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

  export interface Tab {
    id: string
    label: string
    data: any
  }

  export type RowStatus = Table.RowStatus | TableRowStatus

  export interface TableHeader {
    role: Roles
  }
  export interface TableColumn {
    type: Table.ColumnTypes
    role: Roles
    data: any
  }
  export interface TableRow {
    columns: TableColumn[]
    status: RowStatus
  }
}
