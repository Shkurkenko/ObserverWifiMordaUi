import { Reo } from '../shared/interfaces/reo.interface'

export namespace ReoTestData {
  export const scanTasks: Reo.ScanTask[] = [
    {
      name: 'Сканирование #1',
      date: '22.04.24',
      time: '13:04',
      types: [Reo.ScanTypes.Gsm, Reo.ScanTypes.Lte, Reo.ScanTypes.FiveG],
      status: Reo.ScanStatusTypes.Running,
    },
    {
      name: 'Сканирование #2',
      date: '23.04.24',
      time: '16:34',
      types: [Reo.ScanTypes.Gsm, Reo.ScanTypes.Lte, Reo.ScanTypes.Umts],
      status: Reo.ScanStatusTypes.Running,
    },
    {
      name: 'Сканирование #3',
      date: '24.04.24',
      time: '10:23',
      types: [
        Reo.ScanTypes.Gsm,
        Reo.ScanTypes.Lte,
        Reo.ScanTypes.Umts,
        Reo.ScanTypes.Bluetooth,
        Reo.ScanTypes.Wifi,
        Reo.ScanTypes.FiveG,
      ],
      status: Reo.ScanStatusTypes.Pending,
    },
    {
      name: 'Сканирование #4',
      date: '25.04.24',
      time: '18:12',
      types: [Reo.ScanTypes.Gsm, Reo.ScanTypes.Lte, Reo.ScanTypes.Umts],
      status: Reo.ScanStatusTypes.Pending,
    },
    {
      name: 'Сканирование #5',
      date: '26.04.24',
      time: '11:55',
      types: [Reo.ScanTypes.Gsm, Reo.ScanTypes.Lte],
      status: Reo.ScanStatusTypes.Pending,
    },
    {
      name: 'Сканирование #6',
      date: '27.04.24',
      time: '12:09',
      types: [Reo.ScanTypes.Gsm, Reo.ScanTypes.Lte, Reo.ScanTypes.Umts, Reo.ScanTypes.Wifi],
      status: Reo.ScanStatusTypes.Failed,
    },
    {
      name: 'Сканирование #7',
      date: '28.04.24',
      time: '17:07',
      types: [Reo.ScanTypes.Gsm, Reo.ScanTypes.Umts],
      status: Reo.ScanStatusTypes.Failed,
    },
  ]
}
