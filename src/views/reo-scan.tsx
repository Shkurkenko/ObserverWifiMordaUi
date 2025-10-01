import { useEffect, useState } from "preact/hooks";
import Spinner from "../components/spinner";
import { TableHeader } from "./table-header";

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
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <TableHeader />
      <TableBody />
      <TableStatusBar /> */}
      {/* {!message ? (
        <Spinner />
      ) : (
        <div class="alert alert-success shadow-lg text-2xl ">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span>
              ESP32 returned: <strong>{message}!!!</strong>
            </span>
          </div>
        </div>
      )} */}
    </>
  );
};
