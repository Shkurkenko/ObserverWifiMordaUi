import { useEffect, useState } from "preact/hooks";
import { ObserverTable } from "../components/observer-table";
import { scanRows } from "../components/example-row-data";

import "./reo-scan.css";

export const ReoScan = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/")
      .then((res) => res.text())
      .then((res) => setMessage(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <ul className="reo-scan-top">
        <li className="reo-scan-top-item">
          <div className="table-header-info">
            <h1>Данные по GSM</h1>
          </div>
        </li>
        <li className="reo-scan-top-item">
          <div class="observer-tabs border-b border-gray-200 dark:border-neutral-700">
            <nav
              class="flex gap-x-1"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="horizontal"
            >
              <button
                type="button"
                class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active"
                id="tabs-with-underline-item-1"
                aria-selected="true"
                data-hs-tab="#tabs-with-underline-1"
                aria-controls="tabs-with-underline-1"
                role="tab"
              >
                Tab 1
              </button>
              <button
                type="button"
                class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-2"
                aria-selected="false"
                data-hs-tab="#tabs-with-underline-2"
                aria-controls="tabs-with-underline-2"
                role="tab"
              >
                Tab 2
              </button>
              <button
                type="button"
                class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-3"
                aria-selected="false"
                data-hs-tab="#tabs-with-underline-3"
                aria-controls="tabs-with-underline-3"
                role="tab"
              >
                Tab 3
              </button>
            </nav>
          </div>
        </li>
      </ul>

      <div className="mt-3 w-full">
        <div
          id="tabs-with-underline-1"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-1"
        >
          <div className="overflow-x-auto w-full">
            <ObserverTable data={scanRows} />
          </div>
        </div>

        <div
          id="tabs-with-underline-2"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-2"
        >
          <div className="overflow-x-auto w-full hidden">
            <ObserverTable data={scanRows} />
          </div>
        </div>

        <div
          id="tabs-with-underline-3"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-3"
        >
          <div className="overflow-x-auto w-full hidden">
            <ObserverTable data={scanRows} />
          </div>
        </div>
      </div>
    </>
  );
};
