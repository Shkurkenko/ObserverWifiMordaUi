import { Reo } from '../../shared/interfaces/reo.interface'
import { Notifications } from '../../shared/interfaces/notifications.interface'
import { MenubarModel } from '../../components/menubar'

export namespace ObserverConfig {
  export const AlertsConfig: Notifications.StyleConfig = {
    general: {
        transition: 0.2,
    },
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

  export const FastAlerts: Notifications.StyleConfig = {
    general: {
      transition: 0.3,
    },
    error: {
      icon: ObserverConfig.AlertsConfig.error.icon,
      iconColor: '#ea5233',
      backgroundColor: '#341b2a',
      color: '#ecc6c9',
      borderColor: '#4b1d2c',
    },
    success: {
      icon: ObserverConfig.AlertsConfig.success.icon,
      iconColor: '#5dad58',
      backgroundColor: '#0e2a2c',
      color: '#b9f8b5',
      borderColor: '#0d3b30',
    },
    warning: {
      icon: ObserverConfig.AlertsConfig.info.icon,
      iconColor: '#fad947',
      backgroundColor: '#262724',
      color: '#fef9b8',
      borderColor: '#322f22',
    },
    info: {
      icon: ObserverConfig.AlertsConfig.info.icon,
      iconColor: '#0288D1',
      backgroundColor: '#12233e',
      color: '#8ec5ff',
      borderColor: '#162c54',
    },
  }

  export const MenubarConfig: MenubarModel = {
    currentIndex: 0,
    items: [
      {
        id: 0,
        role: Reo.MenubarSetup.TaskManager,
        active: true,
        icon: (
          <svg
            class='w-9 h-9 text-gray-800 dark:text-white'
            aria-hidden='true'
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
              d='M6 6h8m-8 4h12M6 14h8m-8 4h12'
            />
          </svg>
        ),
      },
      {
        id: 1,
        role: Reo.MenubarSetup.Notifications,
        active: false,
        icon: (
          <svg
            class='w-6 h-6 text-gray-800 dark:text-white'
            aria-hidden='true'
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
              d='M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z'
            />
          </svg>
        ),
      },
    ],
  }
}
