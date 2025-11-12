export interface IIconProps {
  width: number
  height: number
  color: string
}

export interface ITab {
  id: string
  label: string
  data: any
  tabIndex: number
}

export enum IMenubarSetup {
  Notifications = 'Notifications',
  TaskManager = 'TaskManager',
}
