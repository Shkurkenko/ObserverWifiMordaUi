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
}
