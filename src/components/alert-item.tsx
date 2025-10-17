import { AlertGeneric } from './alert-generic'

import './alert-item.css'

export enum NotificationTypes {
  Error = 'Error',
  Success = 'Success',
  Info = 'Info',
  Warning = 'Warning',
}

export const deafultNotificationSetup = {
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
    color: '#9C27B0',
    icon: (
      <svg
        class='w-8 h-8 text-[#9C27B0]'
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
          color={deafultNotificationSetup.error.color}
          icon={deafultNotificationSetup.error.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
    case NotificationTypes.Success:
      return (
        <AlertGeneric
          color={deafultNotificationSetup.success.color}
          icon={deafultNotificationSetup.success.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
    case NotificationTypes.Warning:
      return (
        <AlertGeneric
          color={deafultNotificationSetup.warning.color}
          icon={deafultNotificationSetup.warning.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
    case NotificationTypes.Info:
      return (
        <AlertGeneric
          color={deafultNotificationSetup.info.color}
          icon={deafultNotificationSetup.info.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
    default:
      return (
        <AlertGeneric
          color={deafultNotificationSetup.info.color}
          icon={deafultNotificationSetup.info.icon}
          header={header}
          message={message}
          dismissAlert={dismissAlert}
        />
      )
  }
}

export function Alert({ type, header, message, handleDismiss = null }) {
  const dismissAlert = (e) => {
    e.preventDefault()
    handleDismiss()
  }

  return (
    <div className='alert-item-container w-full'>
      {renderNotificationItem(type, header, message, dismissAlert)}
    </div>
  )
}
