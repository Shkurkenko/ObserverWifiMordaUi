export namespace ReoSpace {
  export interface IScanTask {
    id: string
    name: string
    date: string
    time: string
    types: IScanTypes[]
    status: IScanStatusTypes | string
  }

  export enum IRoles {
    Enum = 'enumiration',
    Operator = 'operator',
    Cid = 'cid',
    LacTac = 'lacTac',
    Mcc = 'mcc',
    Mnc = 'mnc',
    RxLevel = 'rxLevel',
    Unknown = 'unknown',
  }

  export enum IScanTypes {
    Gsm = 'GSM',
    Lte = 'LTE',
    Umts = 'UMTS',
    Bluetooth = 'Bluetooth',
    Wifi = 'WiFi',
    FiveG = '5G',
  }

  export enum IScanStatusTypes {
    Finished,
    Running,
    Pending,
    Failed,
  }
}
