import { useEffect, useState } from "preact/hooks";
import { ObserverTable } from "../components/observer-table";
import { scanRows } from "../components/example-row-data";
import { TaskSidebar } from "../components/task-sidebar";
import { Menubar } from "../components/menubar";
import { Journal } from "../components/journal";

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
  const [menubarCurrentIndex, setMenubarCurrentIndex] = useState(0);

  function menubarHandleClick(clickedIndex) {
    setMenubarCurrentIndex(clickedIndex);
  }

  const menubarModel = [
    {
      id: 0,
      role: "toggleTaskManager",
      icon: (
        <svg
          class="w-9 h-9 text-gray-800 dark:text-white"
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
            d="M6 6h8m-8 4h12M6 14h8m-8 4h12"
          />
        </svg>
      ),
    },
    {
      id: 1,
      role: "toggleNotifications",
      icon: (
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
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
          />
        </svg>
      ),
    },
  ];

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
    <div className="reo-scan-container w-full flex">
      <Menubar
        model={menubarModel}
        itemOnClick={menubarHandleClick}
        currentIndex={menubarCurrentIndex}
      />
      <Journal />
      <TaskSidebar reoScanTaskListModel={reoScanTaskListModel} />

      <div className="reo-content reo-scan-interface-item">
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
                    <div className="table-search-input-container w-full flex items-center">
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
      </div>
    </div>
  );
};
