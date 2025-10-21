import { Alerts } from "../shared/interfaces/alerts.interface"

export const fastAlertsData = [
  {
    id: 100,
    type: Alerts.Level.Success,
    header: 'Some header',
    message: 'Some message',
    show: true,
  },
  {
    id: 101,
    type: Alerts.Level.Error,
    header: 'Some header',
    message: 'Some message',
    show: true,
  },
  {
    id: 102,
    type: Alerts.Level.Warning,
    header: 'Some header',
    message: 'Some message',
    show: true,
  },
  {
    id: 103,
    type: Alerts.Level.Info,
    header: 'Some header',
    message: 'Some message',
    show: true,
  },
]
