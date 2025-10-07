import { useEffect, useState } from "preact/hooks";
import { ObserverTable } from "../components/observer-table";
import { scanRows } from "../components/example-row-data";

import "./reo-scan.css";

export const ReoScan = () => {
  // const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("tabs-with-underline-item-1");
  const [activeIndex, setActiveIndex] = useState(0);
  const [wssRows, setWssRow] = useState(scanRows);

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
                    } text-lg py-4 px-1 inline-flex items-center gap-x-2 whitespace-nowrap  hover:text-[#36B37E] focus:outline-hidden focus:text-[#36B37E] disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-[#36B37E]`}
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

          <li className="reo-scan-top-item">
            <div class="w-full min-w-[200px]">
              <div class="table-search-component relative flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <input
                  class="table-search-input w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-base border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Поиск по таблице"
                />

                <button
                  class="table-search-button rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="button"
                >
                  Поиск
                </button>
              </div>
            </div>
          </li>
        </ul>
      </li>

      <li className="interface-item">
        <div className="tab-view mt-3 w-full">
          <div
            id="tabs-with-underline-1"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-1"
          >
            <div className="overflow-x-auto w-full">
              <ObserverTable data={reoScanTabsModel[activeIndex].data} />
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};
