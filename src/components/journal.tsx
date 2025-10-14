import { useState } from 'preact/hooks'
import { AlertType } from './alerts-list';

import './journal.css'
import { Alert, NotificationTypes } from './alert-item';
import { AlertList } from './alerts-list';

const journalModelExample: Array<AlertType> = [
  {
    id: 0,
    type: NotificationTypes.Success,
    header: "First alert",
    message: "All right bro!,"
  },
  {
    id: 1,
    type: NotificationTypes.Success,
    header: "First alert",
    message: "All right bro!,"
  },
  {
    id: 2,
    type: NotificationTypes.Success,
    header: "First alert",
    message: "All right bro!,"
  },
  {
    id: 3,
    type: NotificationTypes.Success,
    header: "First alert",
    message: "All right bro!,"
  },
  {
    id: 4,
    type: NotificationTypes.Success,
    header: "First alert",
    message: "All right bro!,"
  },
  {
    id: 5,
    type: NotificationTypes.Success,
    header: "First alert",
    message: "All right bro!,"
  },
  {
    id: 6,
    type: NotificationTypes.Success,
    header: "First alert",
    message: "All right bro!,"
  },
  {
    id: 7,
    type: NotificationTypes.Success,
    header: "First alert",
    message: "All right bro!,"
  },
];

export function Journal() {
  return (<div className='journal-container'>
    <AlertList model={journalModelExample} />
  </div>);
}
