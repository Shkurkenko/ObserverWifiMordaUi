import { useEffect } from "preact/hooks";
import { download, generateCsv, mkConfig } from "export-to-csv";
import "./table-helper.css";
import { TableColumnTypes } from "./table-body";

export function TableHelper({ headers, rows, currentCycle }) {
  function getValidData() {
    const resultData = [];

    for (let i = 0; i < rows.length; i++) {
      if (i === 0) continue;
      const rowData = {};
      for (let j = 0; j < rows[i].columns[j].length; j++) {
        const column = rows[i].columns[j];

        console.log(headers.label)

        const currentHeader = headers[j];
        if (column.data.text) {
          rowData[currentHeader.label] = column.data.text;
        } else if (column.data.name) {
          rowData[currentHeader.label] = column.data.name;
        } else {
          console.log(
            "Warning from TableHelper Component: Cannot parse unknown table type data"
          );
        }
        resultData.push(rowData);
      }
    }

    return resultData;
  }

  const csvConfig = mkConfig({ useKeysAsHeaders: true });
  const csv = generateCsv(csvConfig)(getValidData());

  return (
    <div className="table-helper">
      <ul className="table-helper-list">
        <li className="table-helper-item">
          <div className="scan-info">
            <h5 className="scan-count-label">
              Всего результатов:
              <span className="scan-count">{rows.length}</span>
            </h5>
          </div>
        </li>
        <li className="table-helper-item">
          <div className="scan-info">
            <h5 className="scan-count-label">
              Циклов: <span className="scan-count">{currentCycle}</span>
            </h5>
          </div>
        </li>
        <li className="table-helper-item">
          <button
            type="button"
            class="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-[#252b36] hover:bg-[#252b36] focus:ring-4 focus:outline-none rounded-lg text-center dark:bg-[#252b36] dark:hover:bg-[#252b36]"
            onClick={() => download(csvConfig)(csv)}
          >
            <svg
              class="w-3.5 h-3.5 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
