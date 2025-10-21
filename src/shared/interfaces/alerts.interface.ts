export namespace Alerts {
  export enum Level {
    Error = 'Error',
    Success = 'Success',
    Info = 'Info',
    Warning = 'Warning',
  }

  export interface AlertType {
    id: number
    type: Level
    header: string
    message: string
    show: boolean
  }
}
