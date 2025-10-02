import { useState } from "preact/hooks";
import { TableBody } from "./table-body";
import { TableHeader } from "./table-header"
import { Logo } from "../logo";
import { TableHelper } from "./table-helper";

import "./observer-table.css"

export function ObserverTable({ data }) {
  const [nav, setNav] = useState(true);

  return (
    <div className="table-container">
      <TableHelper />
      <table className="reo-data-table w-full">
        <TableHeader
          headers={[
            { label: "Operator" },
            { label: "CID" },
            { label: "LAC" },
            { label: "MCC" },
            { label: "MNC" },
            { label: "RSSI" },
          ]}
        />
        <TableBody rows={data} />
      </table>
    </div>
  );
}
