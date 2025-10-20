import { AlertGeneric } from './alert-generic'

import './alert-item.css'

export enum NotificationTypes {
  Error = 'Error',
  Success = 'Success',
  Info = 'Info',
  Warning = 'Warning',
}

export const defaultNotificationSetup = {
  error: {
    color: '#F44336',
    icon: (
      <svg
        class='w-8 h-8 text-[#F44336]'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
        />
      </svg>
    ),
  },
  info: {
    color: '#2a86cf',
    icon: (
      <svg
        class={`w-8 h-8 text-[#0288D1]`}
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
        />
      </svg>
    ),
  },
  success: {
    color: '#4CAF50',
    icon: (
      <svg
        class='w-8 h-8 text-[#4CAF50]'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
        />
      </svg>
    ),
  },
  warning: {
    color: '#FDD835',
    icon: (
      <svg
        class='w-8 h-8 text-[#FDD835]'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
        />
      </svg>
    ),
  },
}

const renderNotificationItem = (
  type: NotificationTypes,
  header: string,
  message: string,
  dismissAlert: Function | null,
) => {
  switch (type) {
    case NotificationTypes.Error:
      return (
        <AlertGeneric
          color={defaultNotificationSetup.error.color}
          icon={defaultNotificationSetup.error.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
    case NotificationTypes.Success:
      return (
        <AlertGeneric
          color={defaultNotificationSetup.success.color}
          icon={defaultNotificationSetup.success.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
    case NotificationTypes.Warning:
      return (
        <AlertGeneric
          color={defaultNotificationSetup.warning.color}
          icon={defaultNotificationSetup.warning.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
    case NotificationTypes.Info:
      return (
        <AlertGeneric
          color={defaultNotificationSetup.info.color}
          icon={defaultNotificationSetup.info.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
    default:
      return (
        <AlertGeneric
          color={defaultNotificationSetup.info.color}
          icon={defaultNotificationSetup.info.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
  }
}

export function Alert({ type, header, message, handleDismiss = null }) {
  const dismissAlert = (e: Event) => {
    e.preventDefault()
    handleDismiss()
  }

  return (
    <div className='alert-item-container w-full'>
      {renderNotificationItem(type, header, message, dismissAlert)}
    </div>
  )
}
