export namespace Reo {
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

  export interface ScanTask {
    name: string
    date: string
    time: string
    types: ScanTypes[]
    status: ScanStatusTypes
  }

  export enum ScanStatusTypes {
    Running,
    Pending,
    Failed,
  }
}
