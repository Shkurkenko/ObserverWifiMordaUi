import { useEffect, useState } from "preact/hooks";
import { ObserverTable } from "../components/observer-table";
import { scanRows } from "../components/example-row-data";
import { ScanLightStatus } from "../components/scan-light-status";

import "./reo-scan.css";

export enum ReoScanTypes {
  Gsm = "GSM",
  Lte = "LTE",
  Umts = "UMTS",
  Bluetooth = "Bluetooth",
  Wifi = "WiFi",
  FiveG = "5G",
}

export enum ReoScanStatusTypes {
  Running,
  Pending,
  Failed,
}

export const ReoScan = () => {
  // const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("tabs-with-underline-item-1");
  const [activeIndex, setActiveIndex] = useState(0);
  const [wssRows, setWssRow] = useState(scanRows);

  const reoScanTaskListModel = [
    {
      name: "Сканирование #1",
      date: "22.04.24",
      time: "13:04",
      types: [ReoScanTypes.Gsm, ReoScanTypes.Lte, ReoScanTypes.FiveG],
      status: ReoScanStatusTypes.Running,
    },
    {
      name: "Сканирование #2",
      date: "23.04.24",
      time: "16:34",
      types: [ReoScanTypes.Gsm, ReoScanTypes.Lte, ReoScanTypes.Umts],
      status: ReoScanStatusTypes.Running,
    },
    {
      name: "Сканирование #3",
      date: "24.04.24",
      time: "10:23",
      types: [
        ReoScanTypes.Gsm,
        ReoScanTypes.Lte,
        ReoScanTypes.Umts,
        ReoScanTypes.Bluetooth,
        ReoScanTypes.Wifi,
        ReoScanTypes.FiveG,
      ],
      status: ReoScanStatusTypes.Pending,
    },
    {
      name: "Сканирование #4",
      date: "25.04.24",
      time: "18:12",
      types: [ReoScanTypes.Gsm, ReoScanTypes.Lte, ReoScanTypes.Umts],
      status: ReoScanStatusTypes.Pending,
    },
    {
      name: "Сканирование #5",
      date: "26.04.24",
      time: "11:55",
      types: [ReoScanTypes.Gsm, ReoScanTypes.Lte],
      status: ReoScanStatusTypes.Pending,
    },
    {
      name: "Сканирование #6",
      date: "27.04.24",
      time: "12:09",
      types: [
        ReoScanTypes.Gsm,
        ReoScanTypes.Lte,
        ReoScanTypes.Umts,
        ReoScanTypes.Wifi,
      ],
      status: ReoScanStatusTypes.Failed,
    },
    {
      name: "Сканирование #7",
      date: "28.04.24",
      time: "17:07",
      types: [ReoScanTypes.Gsm, ReoScanTypes.Umts],
      status: ReoScanStatusTypes.Failed,
    },
  ];

  const reoScanTabsModel = [
    { id: "tabs-with-underline-item-1", label: "GSM", data: scanRows },
    { id: "tabs-with-underline-item-2", label: "LTE", data: scanRows },
    { id: "tabs-with-underline-item-3", label: "UMTS", data: scanRows },
  ];

  // WebSocket request here
  // useEffect(() => {
  //   fetch("/")
  //     .then((res) => res.text())
  //     .then((res) => setMessage(res))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div className="reo-scan-container w-full">
      <ul className="flex reo-scan-interface-list w-full">
        <li className="task-sidebar reo-scan-interface-item">
          <div className="task-content-search">
            <div className="task-content-search-icon">
              <svg
                class="w-7 h-7 text-[#263240] dark:text-[#566679]"
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
            <input
              type="text"
              className="task-content-search-input"
              placeholder="Поиск по задачам"
            />
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
        </li>
        <li className="reo-content reo-scan-interface-item">
          <div className="task-content-container">
            <ul className="iterface-list">
              <li className="interface-item">
                <ul className="reo-scan-top">
                  <li className="reo-scan-top-item">
                    <div className="table-header-info">
                      <h1>{`Данные по ${reoScanTabsModel[activeIndex].label}`}</h1>
                    </div>
                  </li>

                  <li className="reo-scan-top-item">
                    <div className="observer-tabs w-full dark:border-neutral-700">
                      <nav
                        className="flex gap-x-7"
                        aria-label="Tabs"
                        role="tablist"
                        aria-orientation="horizontal"
                      >
                        {reoScanTabsModel.map((tab, index) => (
                          <button
                            type="button"
                            key={tab.id}
                            className={`${
                              activeTab === tab.id
                                ? "font-semibold border-[#36B37E] text-[#36B37E] border-b-2"
                                : "text-gray-500 border-transparent"
                            } text-lg py-4 px-1 inline-flex items-center gap-x-2 whitespace-nowrap 
                             hover:text-[#36B37E] focus:outline-hidden focus:text-[#36B37E] 
                             disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 
                             dark:hover:text-[#36B37E]`}
                            aria-controls={`tabs-with-underline-${index + 1}`}
                            role="tab"
                            onClick={() => {
                              setActiveTab(tab.id);
                              setActiveIndex(index);
                            }}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </li>
                </ul>

                <div className="reo-scan-search">
                  <div class="w-full min-w-[200px]">
                    <div class="table-search-component flex items-center relative">
                      <div className="table-search-input-container flex items-center">
                        <div className="w-6 h-6 table-search-component-icon ml-2">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6 text-slate-600"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="table-search-input-container w-full">
                          <input
                            class="table-search-input w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-base pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
                            placeholder="Поиск по таблице"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="interface-item">
                <div className="interface-item-data-exploer-list w-full">
                  <div className="data-explorer-item">
                    <div className="table-tabview tab-view mt-3">
                      <div
                        id="tabs-with-underline-1"
                        role="tabpanel"
                        aria-labelledby="tabs-with-underline-item-1"
                      >
                        <div className="overflow-x-auto w-full">
                          <ObserverTable
                            data={reoScanTabsModel[activeIndex].data}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};
