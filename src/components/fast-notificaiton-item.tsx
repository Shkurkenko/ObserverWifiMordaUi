import { useFastNotifications } from '../hooks/use-notifications'

import './fast-notification-item.css'

interface FastNotificationItemProps {
  icon: JSX.Element
  backgroundColor: string
  color: string
  borderColor: string
  message: string
  data: any
  transitionTime: number
}

export function FastNotificationItem({
  icon,
  backgroundColor,
  borderColor,
  color,
  message,
  data,
  transitionTime,
}: FastNotificationItemProps) {
  const { deleteFastNotification, hideFastNotification } = useFastNotifications()

  function closeHandler() {
    hideFastNotification(data.id, () => {
      setTimeout(() => {
        deleteFastNotification(data.id)
      }, transitionTime * 1000)
    })
  }

  return (
    <div
      className='fast-notification-item'
      style={{
        backgroundColor,
        border: `2px solid ${borderColor}`,
        borderLeft: `8px solid ${borderColor}`,
      }}
    >
      <div className='fast-notification-icon'>{icon}</div>
      <div className='fast-notification-content' style={{ color }}>
        <h3>{message}</h3>
      </div>
      <div className='close-fast-notification' onClick={closeHandler}>
        <svg
          class='w-5 h-5 text-[#a6adb5]'
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
            d='M6 18 17.94 6M18 18 6.06 6'
          />
        </svg>
      </div>
    </div>
  )
}
