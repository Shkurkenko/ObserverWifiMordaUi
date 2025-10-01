import { useEffect, useState } from "preact/hooks";
import Spinner from "../components/spinner";
import { TableHeader } from "./table-header";
import { TableBody } from "./table-body";
import { TableColumnTypes } from "./table-body";

export const ReoScan = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/")
      .then((res) => res.text())
      .then((res) => setMessage(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <TableHeader
          headers={[
            { label: "CID" },
            { label: "LAC" },
            { label: "MCC" },
            { label: "MNC" },
            { label: "RSSI" },
          ]}
        />
        <TableBody
          rows={[
            {
              columns: [
                { type: TableColumnTypes.Enum },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
              ],
            },
            {
              columns: [
                { type: TableColumnTypes.Enum },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
              ],
            },
            {
              columns: [
                { type: TableColumnTypes.Enum },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
              ],
            },
            {
              columns: [
                { type: TableColumnTypes.Enum },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
              ],
            },
            {
              columns: [
                { type: TableColumnTypes.Enum },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
              ],
            },
            {
              columns: [
                { type: TableColumnTypes.Enum },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
              ],
            },
            {
              columns: [
                { type: TableColumnTypes.Enum },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
                { type: TableColumnTypes.Text, data: { text: "SomeText" } },
              ],
            },
          ]}
        />
      </table>
    </div>
  );
};
