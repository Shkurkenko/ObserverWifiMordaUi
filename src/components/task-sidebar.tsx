import { useState } from "preact/hooks";
import { ScanLightStatus } from "./scan-light-status";

import "./task-sidebar.css";

export function TaskSidebar({ reoScanTaskListModel }) {
  const [active, setActive] = useState(true);

  return (
    <div className="task-sidebar h-full w-full">
      <div className="task-content-search">
        <div className="task-content-search-icon relative">
          <div className="task-content-search-icon-container flex items-center">
            <svg
              class="w-7 h-7 text-[#263240] dark:text-[#566679] absolute ml-5"
              aria-hidden="true"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="task-content-search-input-container w-full">
          <input
            type="text"
            className="task-content-search-input"
            placeholder="Поиск по задачам"
          />
        </div>
      </div>
      <div className="new-task-container flex">
        <div className="new-task-icon">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14m-7 7V5"
            />
          </svg>
        </div>
        <div className="new-label ml-3">
          <h2>Добавить новое сканирование</h2>
        </div>
      </div>
      <div className="task-list-container">
        <ul className="task-list">
          {reoScanTaskListModel.map((task, index) => (
            <li key={task.name} className="task-item">
              <div className="task-item-header pr-8">
                <div className="task-item-left-side flex">
                  <div className="task-item-header-more-button">
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M12 6h.01M12 12h.01M12 18h.01"
                      />
                    </svg>
                  </div>

                  <div className="scan-light-container ml-5">
                    <ScanLightStatus statusType={task.status} />
                  </div>

                  <div className="task-item-text-info">
                    <div className="task-name">{task.name}</div>
                    <div className="scan-time-info flex">
                      <div className="scan-time-icon flex mr-1.5">
                        <svg
                          class="w-4 h-4 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </div>
                      <div className="scan-date">{task.date}</div>
                      <div className="scan-time ml-2">{task.time}</div>
                    </div>
                  </div>
                </div>
                <div className="scan-types">
                  {task.types.map((type, index) => (
                    <div key={index} className="scan-type-label">
                      {type}
                    </div>
                  ))}
                </div>
                <div className="task-item-expand">
                  <svg
                    class="w-4 h-4 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
