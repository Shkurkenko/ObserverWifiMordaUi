import { useState } from "preact/hooks";

import "./reo-content-view.css";

export function ReoContentView({ model }) {


  return (
    <div className="reo-content reo-scan-interface-item">
      <div className="task-content-container">
        <ul className="iterface-list">
          <li className="interface-item">
            <ul className="reo-scan-top">
              <li className="reo-scan-top-item">
                <div className="table-header-info">
                  <h1>{`Данные по ${model[activeIndex].label}`}</h1>
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
                    {model.map((tab, index) => (
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
                        data={model[activeIndex].data}
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
  );
}
